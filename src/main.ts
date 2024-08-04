import './style.css'
import {addTodo, deleteTodo, updateTodo} from "./logic"

export const todoContainer = document.querySelector("#todos") as HTMLDivElement;
if(todoContainer.children.length===0) {
  const h2 = document.createElement("h2")
  h2.textContent="Add something to do!";
  h2.style.textAlign="center";
  h2.classList.add("no-todo");
  todoContainer.append(h2);
}
const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit",(e:SubmitEvent)=>{
  e.preventDefault();
  const input = document.querySelector("input") as HTMLInputElement;
  const h2 = document.querySelector(".no-todo") as HTMLHeadingElement;
  h2.style.display = "none";
  const card = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = input.value;

  card.classList.add("card");

  card.appendChild(p);

  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.width = "7%";
  div.style.justifyContent = "space-between";

  const edit = document.createElement("button");
  const span1 = document.createElement("span");
  span1.innerHTML = `<i class="fa-solid fa-pen"></i>`;

  edit.appendChild(span1);

  edit.classList.add("edit");

  edit.addEventListener("mouseenter", () => {
    span1.innerHTML = `<i class="fa-solid fa-pen fa-bounce"></i>`;
  });

  edit.addEventListener("mouseleave", () => {
    span1.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  });

  const deleteBtn = document.createElement("button");
  const span2 = document.createElement("span");
  span2.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  deleteBtn.appendChild(span2);

  deleteBtn.classList.add("edit");

  deleteBtn.addEventListener("mouseenter", () => {
    span2.style.color = "red";
    span2.innerHTML = `<i class="fa-solid fa-trash fa-shake"></i>`;
  });

  deleteBtn.addEventListener("mouseleave", () => {
    span2.style.color = "rgba(255, 255, 255, 0.87)";
    span2.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  });

  deleteBtn.addEventListener("click", () => {
    const htmlElementArray = Array.from(todoContainer.children) as HTMLElement[];
    deleteTodo(htmlElementArray,p.innerText)
  });


  edit.addEventListener("click", () => {
    const htmlElementArray = Array.from(todoContainer.children) as HTMLElement[];
    updateTodo(htmlElementArray,p.innerText)
  });

  div.appendChild(edit);
  div.appendChild(deleteBtn);

  card.appendChild(div);

  addTodo(card,todoContainer)
  input.value=""


})
