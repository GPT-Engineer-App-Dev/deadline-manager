import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="3xl" mb={4}>Todo App</Text>
        <HStack w="100%">
          <Input
            variant="filled"
            placeholder="Enter a new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTask}>Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={2} mt={4}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" spacing={4} alignItems="center">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)} />
              <Text as={task.completed ? "s" : ""} flex="1">{task.text}</Text>
              <IconButton
                aria-label="Delete Task"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTask(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;