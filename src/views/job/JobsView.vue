<template>
  <h2>Jobs</h2>
  <div v-for="job in jobs" :key="job.id">
   
    <router-link :to="{name:'Job/Detail', params:{id:job.id}}"> <p>{{ job.title }}</p></router-link>
  </div>
</template>

<script>
export default {
 data(){
    return{
        jobs:[
            {id:1, title:'Html'},
            {id:2, title:'Laravel'},
            {id:3, title:'Vue'},
        ]
    }
 }
}
</script>

<style>

</style>