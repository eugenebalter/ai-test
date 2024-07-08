import React from 'react';
import Task from './Task';
import { Container } from '@mui/material';

const TaskList = ({ tasks, onDelete }) => (
  <Container>
    {tasks.map(task => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ))}
  </Container>
);

export default TaskList;
