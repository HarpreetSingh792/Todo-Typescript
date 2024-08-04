import { todoContainer } from "./main";

export const addTodo = (card:HTMLDivElement, body: HTMLDivElement) => {
 
  body.appendChild(card);
};

export const deleteTodo = (arrElement: HTMLElement[], value: string) => {
    todoContainer.removeChild(arrElement.filter(item=>item.children[0]?.innerHTML===value)[0])
    if(todoContainer.children.length===1) {
        const noTodo = document.querySelector(".no-todo") as HTMLHeadingElement;
        noTodo.style.display="block"
    }
};

export const updateTodo = (arrElement: HTMLElement[], value: string) => {
//    todo
};
