from django.urls import path
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from .models import Company, Vacancy
import json


#function-based views (FBVs)
@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = list(Company.objects.values())
        return JsonResponse(companies, safe=False)

    if request.method == "POST":
        try:
            company_data = json.loads(request.body)
            company = Company.objects.create(**company_data)
            return JsonResponse(
                {
                    "id": company.id,
                    "name": company.name,
                    "description": company.description,
                    "city": company.city,
                    "address": company.address
                },
                status=201)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)


@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({"message": "company not found"}, status=400)

    if request.method == "GET":
        return JsonResponse({
            "id": company.id,
            "name": company.name,
            "description": company.description,
            "city": company.city,
            "address": company.address
        })

    if request.method == "PUT":
        try:
            company_data = json.loads(request.body)
            company.name = company_data.get('name', company.name)
            company.description = company_data.get('description',
                                                   company.description)
            company.city = company_data.get('city', company.city)
            company.address = company_data.get('address', company.address)
            company.save()

            return JsonResponse({
                "id": company.id,
                "name": company.name,
                "description": company.description,
                "city": company.city,
                "address": company.address
            })

        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)

    if request.method == "DELETE":
        company.delete()
        return JsonResponse({"message": "Company deleted successfully"},
                            status=204)


def company_vacancies(request, id):
    company = list(Company.objects.filter(id=id).values())
    vacancies = list(Vacancy.objects.filter(company_id=id).values())
    return JsonResponse({
        "company": company,
        "vacancies": vacancies
    },
                        safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == "GET":
        vacancies = list(Vacancy.objects.values())
        return JsonResponse(vacancies, safe=False)

    if request.method == "POST":
        try:
            vacancy_data = json.loads(request.body)
            vacancy = Vacancy.objects.create(**vacancy_data)
            return JsonResponse(
                {
                    "id": vacancy.id,
                    "name": vacancy.name,
                    "description": vacancy.description,
                    "salary": vacancy.salary,
                    "company": vacancy.company.id
                },
                status=201)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)


@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({
            "message": "vacancy not found",
            "status": 400
        },
                            status=400)

    if request.method == "GET":
        return JsonResponse({
            "id": vacancy.id,
            "name": vacancy.name,
            "description": vacancy.description,
            "salary": vacancy.salary,
            "company": vacancy.company.id
        })

    if request.method == "PUT":
        try:
            vacancy_data = json.loads(request.body)
            vacancy.name = vacancy_data.get('name', vacancy.name)
            vacancy.description = vacancy_data.get('description',
                                                   vacancy.description)
            vacancy.salary = vacancy_data.get('salary', vacancy.salary)
            vacancy.company_id = vacancy_data.get('company',
                                                  vacancy.company.id)
            vacancy.save()

            return JsonResponse({
                "id": vacancy.id,
                "name": vacancy.name,
                "description": vacancy.description,
                "salary": vacancy.salary,
                "company": vacancy.company.id
            })

        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)

    if request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"message": "Vacancy deleted successfully"},
                            status=204)


def vacancy_top(request):
    vacancies = list(Vacancy.objects.order_by('-salary')[:10].values())
    return JsonResponse(vacancies, safe=False)


#class-based views (CBVs)

from rest_framework import generics
from .models import Company
from .serializers import CompanySerializer


class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


from .models import Vacancy
from .serializers import VacancySerializer


class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
