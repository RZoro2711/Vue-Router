<template>
  <h2>Jobs</h2>
  <div v-for="job in jobs" :key="job.id">

    <router-link :to="{ name: 'Job/Detail', params: { id: job.id } }">
      <p>{{ job.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then(((response) => {
        return response.json();
      }))
      .then((datas) => {
        this.jobs = datas
      })
      .catch((err) => {
        console.log(err);
      })
  },
}
</script>

<style></style>