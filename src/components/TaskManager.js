import React, { useState, useContext } from 'react';
import TaskList from './TaskList';
import { UserContext } from '../context/UserContext';
import { Container, TextField, Button, Typography } from '@mui/material';

const TaskManager = () => {
  const { tasks, setTasks } = useContext(UserContext);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([ ...tasks, { id: Date.now(), text: taskText }]);
      setTaskText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Task Manager</Typography>
      <TextField
        label="Enter a task"
        variant="outlined"
        fullWidth
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      sx={ mb: 2 }
      />
      <Button variant="contained" color="primary" onClick={addTask} fullWidth>Add Task</Button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </Container>
});
};

export default TaskManager;
