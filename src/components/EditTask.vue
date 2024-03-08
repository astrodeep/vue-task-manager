<template>
  <div>
    <h2>Редактировать задачу</h2>
    <form @submit.prevent="editTask">
      <input type="text" v-model="editedTask.title" required>
      <button type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedTask: {
        id: null,
        title: ''
      }
    }
  },
  created() {
    const id = parseInt(this.$route.params.id);
    const task = this.$store.state.tasks.find(task => task.id === id);
    if (task) {
      this.editedTask = { ...task };
    }
  },
  methods: {
    editTask() {
      const { id, title } = this.editedTask;
      this.$store.commit('editTask', { id, title });
      this.$router.push('/');
    }
  }
}
</script>
