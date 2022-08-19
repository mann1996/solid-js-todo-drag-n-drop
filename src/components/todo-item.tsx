import { Component, JSX, Show } from "solid-js";
import { styled } from "solid-styled-components";
import { Todo, TodoStatus } from "../types";

interface Props {
  id: string;
  todo: Todo;
}

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  status: TodoStatus | undefined;
}

const Card = styled.div<CardProps>`
  background-color: white;
  min-height: 3rem;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 23px -6px rgba(156, 156, 156, 1);
  text-decoration: ${(props) => (props.status === 2 ? "line-through" : "none")};
  color: ${(props) => (props.status === 2 ? "#505050" : "#000")};
`;
export const TodoItem: Component<Props> = ({ todo, id }) => {
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer?.setData("id", id);
    console.log(id);
  };
  return (
    <Card id={id} draggable onDragStart={onDragStart} status={todo.status}>
      <h3>{todo.title}</h3>
      <Show when={todo.description && todo.description.length > 0}>
        {todo.description}
      </Show>
    </Card>
  );
};
