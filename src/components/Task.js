import React from 'react';

const Task = ({ task, onDelete }) => (
  <div className="task">
    <span>{task.text}</span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default Task;
