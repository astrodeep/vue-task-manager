// src/store/index.js
import { createStore } from 'vuex'

const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

export default createStore({
    state: {
        tasks: storedTasks
    },
    getters: {
        allTasks(state) {
            return state.tasks;
        }
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push({
                id: Date.now(),
                title: task.title
            });
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        editTask(state, { id, title }) {
            const index = state.tasks.findIndex(task => task.id === id);
            if (index !== -1) {
                state.tasks[index].title = title;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        }
    }
});
