from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    try:
        products = list(Product.objects.values())
        return JsonResponse(data=products, status=200, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def categories_list(request):
    try:
        categories = list(Category.objects.values())
        return JsonResponse(data=categories, status=200, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def product(request, product_id: int):
    try:
        product = Product.objects.get(id=product_id)
        return JsonResponse(data=product.to_json(), status=200)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def category(request, category_id: int):
    try:
        category = Category.objects.get(id=category_id)
        return JsonResponse(data=category.to_json(), status=200)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def find_product_by_category_id(request, category_id: int):
    try:
        products = Product.objects.filter(category_id=category_id)
        return JsonResponse(list(products.values()), safe=False, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
