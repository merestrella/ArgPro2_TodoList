import { useState } from "react";
import TodoItem from "./TodoItem";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const currentDate = new Date(Date.now());
  const nombreDia = currentDate.toLocaleDateString("es-ES", {
    weekday: "long",
  });
  const mes = currentDate.toLocaleDateString("es-ES", { month: "long" });
  const numeroDia = currentDate.getDate();

  const hora = currentDate.getHours();
  const minutos = currentDate.getMinutes().toString().padStart(2, "0");

  const fecha = `${nombreDia} ${numeroDia} de ${mes}`;
  const horario = `${hora}:${minutos}`;

  const addTodo = () => {
    if (newTodo !== "") {
      setTodo([...todo, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <Box width={"100%"} backgroundColor={"#fff"} paddingTop={"25px"}>
      <Text
        color={"#79ecb7"}
        fontWeight={"normal"}
        fontSize={"6xl"}
        textAlign={"center"}
      >
        {horario}
      </Text>
      <Text color={"gray"} textAlign={"center"}>
        {fecha}
      </Text>

      <UnorderedList
        marginX="0"
        marginTop={"3rem"}
        spacing={5}
        paddingBottom={"40px"}
      >
        {todo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </UnorderedList>
      <Flex alignItems={"center"} border={"1px"} borderColor={"#ccc"}>
        <Input
          placeholder="Type item"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          rounded={"unset"}
          backgroundColor={"#fff"}
          border="none"
        />
        <Button
          onClick={addTodo}
          colorScheme="teal"
          size="md"
          rounded={"unset"}
          backgroundColor={"#79ecb7"}
          color={"#000"}
          fontWeight={"normal"}
        >
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default TodoList;
