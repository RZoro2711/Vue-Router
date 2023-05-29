<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Job' }">Job</router-link>
  </nav>
  <router-view />
  <button @click="redirect">Redirect</button><button @click="goforward">Go Forward</button><button  @click="goback">Go Back</button>
</template>
<script>
export default{
  methods:{
    goback(){
      this.$router.go(-1)
    },
    goforward(){
      this.$router.go(+1)
    },
    redirect(){
      this.$router.push({name : 'Home'});
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 10px;
}

nav a.router-link-exact-active {
  background-color: crimson;
  color: white;
}
</style>
