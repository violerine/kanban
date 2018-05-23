<template>
<div class="task">
    <div class="ui card" v-for="task in allTasks" draggable="true">
    <div class="content">
      <h4 class="ui sub header"> {{task}}</h4>
    </div>
    <div v-if="task!=='WILL DO' " class="extra content">
      <button @click="moveToOnProgress(task)" class="ui button">Move to On Progress</button>
    </div>
  </div>
</div>
</template>

<script>
import {Database}from  '../firebase'
// import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'


export default{
   created:function(){
        console.log("ni this get",this.getTodo())
        console.log("ALL TASK",this.allTasks)
        this.getTodo()
      },
    computed: {
    ...mapState([
        'allTasks'
    ])
  },
  methods:{
    moveToOnProgress(val){
      console.log("INI VALUE",val)
      Database.ref('/todo').child('onprogress/'+val).set({status:"on progress"})
      Database.ref('/todo').child('willdo/'+val).remove()
      console.log("FIREBASENYA BERHASIL")
    },
    ...mapActions([
      'getTodo'
    ])
  }
}
</script>


