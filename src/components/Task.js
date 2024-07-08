import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteIcon';

const Task = ({ task, onDelete }) => (
  Card variant="outlined" sx={ { mb: 2 } }>
    <CardContent sx={{ display: 'flex', justify content: 'space-between', alignItems: 'center' } }>
      <Typography>{task.text}</Typography>
      <IconButton aria-label="delete" onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </IconButton>
    </CardContent>
  </Card>
);

export default Task;
