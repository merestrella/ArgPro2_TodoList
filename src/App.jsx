import { Container } from "@chakra-ui/react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxW='lg' centerContent>
      <TodoList/>
    </Container>
  );
}

export default App;
