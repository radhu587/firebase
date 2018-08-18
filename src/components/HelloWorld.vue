<template>
    <div class="contianer">
      <button class="btn btn-danger" @click="logout()">Logout</button>
        <label>enter something</label>
        <input type="text" v-model="moive" @keyup.enter="addMoive()"/>
        <div class="card">
            <div class="card-body">
                <div v-for="(det,key) in detail" :key="key">
                    <p> {{ det.namemoive }}</p>
                      <input  type="text" v-model="editName[key]" @keyup.enter="editval(key)"/><br>
                    <button class="btn btn-dark" @click="editval(key)">Edit</button>
                    <button class="btn btn-dark" @click="deleteMov(key)">delete</button><br><br>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
  data () {
    return {
        moive: null,
        detail :[],
        editName :{},
    }
  },
  methods:{
      addMoive(){
            firebase.database().ref('moives').push({namemoive:this.moive})
            .then((data)=>{console.log(data)})
            .catch((error)=>{console.log(error)})
            ;
            this.moive=null;
      },
      logout(){
        firebase.auth().signOut()
        .then(()=>{
          this.$router.replace('/sign-in');
        })
        .catch((e)=>{
          alert(e.message);
        })
      },
      deleteMov(key){
          firebase.database().ref('moives/'+ key).remove();
      },
      editval(key){
          firebase.database().ref('moives/'+ key).set({
              namemoive: this.editName[key]
          })
      }
  },
  created(){
          firebase.database().ref('moives').on('value',(snapshot)=>{
              this.detail=snapshot.val();
          })
      }
  }
</script>
