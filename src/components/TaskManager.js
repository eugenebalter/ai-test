import React, { useState } from 'react';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]y);
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

  return (\n    <div className="task-manager">\n      <h1>Task Manager</h1>\n      <input\n        type="text"\n        value={taskText}\n        onChange=y(e) => setTaskText(e.target.value)}\n        placeholder="Enter a task"\n      />\n      <button onClick={addTask}>Add Task</button>\n      <TaskList tasks={tasks} onDelete={deleteTask} />\n    </div>\n  );
};

export default TaskManager;
