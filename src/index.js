document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo(e.target.new_task_description.value);
    form.reset();
  });
  
  const taskList = document.getElementById("tasks");
});

function createToDo(todo) {
  let li = document.createElement("li");
  let pList = document.createElement("p");

  let rmvBtn = document.createElement("button");
  rmvBtn.textContent = " X";
  rmvBtn.addEventListener("click", handleDel);
 
  let selectPriority = document.createElement("select");
  let highPriority = document.createElement("option");
  let mediumPriority = document.createElement("option");
  let lowPriority = document.createElement("option");
  //HANDLE SELECTING PRIORITY COLORS
  selectPriority.addEventListener("change", (e) => {

    if (e.target.options[selectPriority.selectedIndex].value === "High") {
      li.style.color = "red";
    } else if (
      e.target.options[selectPriority.selectedIndex].value === "Medium"
    ) {
      li.style.color = "#eed202";
    } else {
      li.style.color = "lightgreen";
    }
  });
  highPriority.textContent = "High";
  mediumPriority.textContent = "Medium";
  lowPriority.textContent = "Low";
  selectPriority.add(highPriority);
  selectPriority.add(mediumPriority);
  selectPriority.add(lowPriority);

  pList.textContent = todo;
  li.appendChild(pList);
  li.appendChild(rmvBtn);
  li.appendChild(selectPriority);
  document.getElementById("tasks").appendChild(li);
}

function handleDel(e) {
  e.target.parentNode.remove();
}

});
