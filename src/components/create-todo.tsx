import { Component, createSignal, Setter } from "solid-js";
import { styled } from "solid-styled-components";
import { COLORS } from "../constants";
import { Todo, TodoStatus } from "../types";

const InputGroup = styled.div`
  margin-bottom: 1rem;

  &:focus-within {
    & > label {
      color: ${COLORS.primary};
    }
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  display: block;
  padding: 0.5rem 1rem;
  width: 100%;

  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const StyledTextarea = styled.textarea`
  display: block;
  padding: 1rem;
  width: 100%;

  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const StyledButton = styled.button`
  background-color: ${COLORS.primary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;

  &:hover,
  &:focus {
    background-color: ${COLORS.primaryHover};
  }
`;

interface Props {
  setTodos: Setter<Todo[]>;
}
export const CreateTodo: Component<Props> = ({ setTodos }) => {
  const [todoTitle, setTodoTitle] = createSignal("");
  const [todoDesc, setTodoDesc] = createSignal("");

  const onSubmit = (e: Event) => {
    e.preventDefault();

    setTodos((todos) => {
      const newTodos = [
        ...todos,
        {
          id: (Math.random() + 1).toString(36).substring(7),
          title: todoTitle(),
          description: todoDesc(),
          status: TodoStatus.TODO,
        },
      ];

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  };
  return (
    <form onsubmit={onSubmit}>
      <InputGroup>
        <StyledLabel for="todo-title">Todo title</StyledLabel>
        <StyledInput
          type="text"
          id="todo-title"
          onInput={(e) => setTodoTitle(e.currentTarget.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <StyledLabel for="todo-description">Todo description</StyledLabel>
        <StyledTextarea
          id="todo-description"
          onInput={(e) => setTodoDesc(e.currentTarget.value)}
        ></StyledTextarea>
      </InputGroup>
      <InputGroup>
        <StyledButton type="submit">Add</StyledButton>
      </InputGroup>
    </form>
  );
};
