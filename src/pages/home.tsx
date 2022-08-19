import { Component, createSignal, onMount } from "solid-js";
import { styled } from "solid-styled-components";
import { CreateTodo, TodoContainer } from "../components";
import { Todo, TodoStatus } from "../types";

const StyledHR = styled.hr`
  border-top: 2px solid #878787;
  margin-block: 2rem;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 20rem;
`;

export const Home: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>([]);

  onMount(() => setTodos(JSON.parse(localStorage.getItem("todos") || "[]")));

  return (
    <>
      <CreateTodo setTodos={setTodos} />
      <StyledHR />
      <FlexBox>
        <TodoContainer
          title="Todo"
          todos={todos}
          setTodos={setTodos}
          filter={TodoStatus.TODO}
        />
        <TodoContainer
          title="Inprogress"
          todos={todos}
          setTodos={setTodos}
          filter={TodoStatus.INPROGRESS}
        />
        <TodoContainer
          title="Done"
          todos={todos}
          setTodos={setTodos}
          filter={TodoStatus.DONE}
        />
      </FlexBox>
    </>
  );
};
