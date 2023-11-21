/* eslint-disable react/prop-types */

import { Button, Checkbox, Flex, ListItem } from "@chakra-ui/react"


const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem 
      listStyleType="none"
      textAlign="center"
      rounded="10px"
      border="1px"
      borderColor="#ccc"
      padding="15px"
      boxShadow='xl'
    >
      
      <Flex justifyContent={"space-between"}>
        <Checkbox
          borderRadius={"50%"}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          size='lg' colorScheme='orange'
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <Button size='xs' onClick={() => deleteTodo(todo.id)}>Delete</Button>
      </Flex> 
    </ListItem>
  )
}

export default TodoItem