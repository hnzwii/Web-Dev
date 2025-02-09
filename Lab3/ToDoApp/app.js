// document.getElementById("addButton").addEventListener("click", function () {
//   let el = document.createElement("li");
//   let button = document.createElement("button");
//   let text = document.getElementById("taskInput").value;
//   let container = document.getElementsByClassName("container")[0];

//   el.classList.add("el");
//   button.classList.add("delete");
//   el.textContent = text;

//   container.append(el, button);
//   document.getElementById("taskInput").value = "";
//   console.log("good");
// });

document.getElementById("addButton").addEventListener("click", function () {
  document.getElementById("container").innerHTML += `
         <li class="el">
             <div>
                <input type="checkbox" name="check" class="check" />
                <span class="task">${
                  document.getElementById("taskInput").value
                }</span>
              </div>
              <button class="delete">Del</button>
            </li>
    `;
  document.getElementById("taskInput").value = "";

  let currentTask = document.getElementsByClassName("delete");
  for (let i = 0; i < currentTask.length; i++) {
    currentTask[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  let taskStatus = document.getElementsByClassName("check");
  for (let i = 0; i < taskStatus.length; i++) {
    taskStatus[i].onclick = function () {
      let task = this.parentNode.getElementsByClassName("task")[0];
      task.classList.toggle("completed");
    };
  }
});
