<template>
  <div>
      <div class="container">
          <label>email:</label>
          <input type="email" class="form-control" v-model="formData.email" >
          <label>Password:</label>
          <input type="password" v-model="formData.password" class="form-control">
          <button type="button" @click="signup()" class="btn btn-danger">Sign-up</button>  
      </div>
  </div>
</template>

<script>
export default {
    name:'signup',
    data(){
        return{
            formData:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        signup(){
            firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password)
            .then((user)=>{
              this.$router.replace('/hello');
            })
            .catch((e)=>{
                alert("oops"+ e.message);
            })
        }
      },
  
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
