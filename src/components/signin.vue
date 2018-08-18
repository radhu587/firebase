<template>
  <div>
      <div class="container">
          <label>email:</label>
          <input type="email" class="form-control" v-model="formData.email" >
          <label>Password:</label>
          <input type="password" v-model="formData.password" class="form-control">
          <button type="button" @click="signin()" class="btn btn-danger"> login</button>  
      </div>
  </div>
</template>

<script>
export default {
    name:'signin',
    data(){
        return{
            formData:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        signin(){
            firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
            .then((user)=>{
                this.$router.replace('/hello');
            })
            .catch((e)=>{
                alter(e.message);
            })
        }
    }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
