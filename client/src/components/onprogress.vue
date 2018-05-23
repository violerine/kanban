<template>
<div class="task">
    <div class="ui card"  v-for="task in onprogress "draggable="true">
    <div class="content">
      <h4 class="ui sub header">{{task}}</h4>
    </div>
    <div  v-if="task!=='ON PROGRESS' " class="extra content">
      <button @click="moveToDone(task)" class="ui button">Make it Done</button>
    </div>
  </div>
</div>
</template>

<script>

import {Database}from  '../firebase'
import { mapState, mapActions } from 'vuex'


export default{
   created:function(){
        this.getOnProgress()
      },
      computed: {
    ...mapState([
        'onprogress'
    ])
  },
  methods:{
      moveToDone(val){
      console.log("INI VALUE",val)
      Database.ref('/todo').child('done/'+val).set({status:"on progress"})
      Database.ref('/todo').child('onprogress/'+val).remove()
      console.log("FIREBASENYA BERHASIL")
    },
    ...mapActions([
      'getOnProgress'
      
    ])
  }
}
</script>