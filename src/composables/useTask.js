import { reactive, readonly } from 'vue';
import generateUuid from '../utils/generateUuid';

export default function useTask() {
  const tasks = reactive({});
  const addTask = (newTaskName, date) => {
    const taskId = generateUuid();
    const newTask = {
      id: taskId,
      name: newTaskName,
    }
    const currentTask = tasks[date] || [];
    tasks[date] = [...currentTask, newTask];
  };
  const removeTask = (taskId) => {
    for (const date in tasks) {
      if (Object.hasOwnProperty.call(tasks, date)) {
        tasks[date] = tasks[date].filter((task) => task.id !== taskId);
      }
    }
  };

  return {
    tasks: readonly(tasks),
    addTask,
    removeTask,
  }
}