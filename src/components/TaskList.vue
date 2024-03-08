<!-- src/components/TaskList.vue -->
<template>
  <div>
    <h1>Список задач</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Удалить</button>
        <router-link :to="{ name: 'EditTask', params: { id: task.id }}">Редактировать</router-link>
      </li>
    </ul>
    <router-link to="/create">Создать новую задачу</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    deleteTask(id) {
      this.$store.commit('deleteTask', id);
    }
  }
}
</script>
