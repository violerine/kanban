<template>
<div class="task">
    <div class="ui card"  v-for="task in done" draggable="true">
    <div class="content">
      <h4 class="ui sub header"> {{task}}</h4>
    </div>
    <div v-if=" task!=='DONE' " class="extra content">
      <button @click="deleteDone(task)"  class="ui button">Delete</button>
    </div>
  </div>
</div>
</template>

<script>

import {Database}from  '../firebase'
import { mapState, mapActions } from 'vuex'

export default{
   created:function(){
        this.getDone()
      },
    computed: {
    ...mapState([
        'done'
    ])
  },
  methods:{
      deleteDone(val){
      Database.ref('/todo').child('done/'+val).remove()
    },
    ...mapActions([
      'getDone'
      
    ])
  }
}
</script>