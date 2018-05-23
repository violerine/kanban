<template>
  <div class="about">
    <h2>Add New Task</h2>
    <p>


<div class="row container">
  <div class="col-lg-4">
    <div class="input-group">
      Add New Task
      <input v-model="taskname" type="text" class="form-control" placeholder="Task name">
    </div><!-- /input-group -->   
    <router-link to="/"><button class="ui button" type="button">Cancel</button> </router-link>
    <button @click="newTask" class="ui button" type="button">Add new Task</button> 
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default{
  data(){
    return{
      taskname:'',
    }
  },
  methods:{
    newTask(){
      this.$store.dispatch('newPost',this.taskname)
      this.$router.push('/')
    },
    ...mapActions([
      'newPost'
    ])
  }
}
</script>
