const buttonRef = document.getElementById("btn");
const inputRef = document.getElementById("todoInput");
const todoContainer = document.getElementById("todoContainer");

(async () => {
  fetch("https://api.freeapi.app/api/v1/public/quotes", {
    method: "GET",
  })
    .then((promise) => promise.json())
    .then((data) => {
      for (const obj of data.data.data) {
        const li = document.createElement("li");
        li.innerText = obj.content;
        todoContainer.appendChild(li);
        li.addEventListener("click", () => {
          li.remove();
        });
      }
    });
})();

buttonRef.addEventListener("click", function () {
  const value = inputRef.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.innerText = value;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  todoContainer.appendChild(li);
  inputRef.value = "";
  inputRef.focus();
});

inputRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buttonRef.click();
  }
});
