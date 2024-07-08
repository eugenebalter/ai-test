import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => (\n  <div className="task-list">\n    {tasks.map(task => (\n      <Task key={task.id} task={task} onDelete={onDelete} />\n    ))}\n  </div>\n);

export default TaskList;
