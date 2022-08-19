import {
  Accessor,
  Component,
  createSignal,
  For,
  Setter,
  Show,
  splitProps,
} from "solid-js";
import { styled } from "solid-styled-components";
import { Todo, TodoStatus } from "../types";
import { TodoItem } from "./todo-item";

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #dfdfdf;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 10rem;
`;

interface Props {
  todos: Accessor<Todo[]>;
  setTodos: Setter<Todo[]>;
  title: string;
  filter: TodoStatus;
}

export const TodoContainer: Component<Props> = (props) => {
  const filteredTodos = () =>
    props.todos().filter((todo) => todo.status === props.filter);

  const onDragOver = (e: MouseEvent) => {
    e.preventDefault();
    console.log(e);
  };

  const onDrop = (e: DragEvent, filter: TodoStatus) => {
    e.preventDefault();
    const id = e.dataTransfer?.getData("id");
    // const id: number = parseInt((e.target as HTMLDivElement).id);
    props.setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.status = filter;
        }
        return todo;
      });
      // console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <Container>
      <Show when={props.title && props.title.length > 0}>
        <p>{props.title}</p>
      </Show>
      <Items
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, props.filter)}
        data-filter={props.filter}
      >
        <For each={filteredTodos()}>
          {(todo) => <TodoItem id={todo.id} todo={todo} />}
        </For>
      </Items>
    </Container>
  );
};
