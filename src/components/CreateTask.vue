<template>
  <div>
    <h2>Создать задачу</h2>
    <form @submit.prevent="createTask">
      <input type="text" v-model="title" placeholder="Заголовок задачи" required>
      <button type="submit">Добавить</button>
    </form>
    <h3>Список созданных задач:</h3>
    <ul>
      <li v-for="task in allTasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    }
  },
  methods: {
    createTask() {
      this.$store.commit('createTask', { title: this.title });
      this.title = '';
    },
    deleteTask(id) {
      this.$store.commit('deleteTask', id);
    }
  }
}
</script>
