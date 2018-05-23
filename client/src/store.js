import Vue from 'vue'
import Vuex from 'vuex'
import './firebase'
import firebase from 'firebase'
import swal from 'sweetalert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTasks:[],
    taskname:'',
    onprogress:'',
    done:''
  },
  mutations: {

    readAllTask(state,payload){
      console.log("PAYLOADNYA ISINYA APAAA",payload)
      state.allTasks=payload
    },
    inputNew(state,taskname){
      state.taskname=taskname
    },
    readAllOnProgress(state,payload){
      state.onprogress=payload
    },
    readDone(state,payload){
      state.done=payload
    }
  },
  actions: {
    newPost:function({commit},todo){
      firebase.database().ref('/todo').child('willdo/'+todo).set({status:'belom dikerjain'})
      commit('inputNew',todo)
      swal('berhasil add task baru')
    },
    getTodo:function({commit}){
      firebase.database().ref('todo').child('/willdo').on("value",function(snapshot){
        console.log("INI SNAPSHOT .VAL",snapshot.val())
        // for(var task in snapshot.val()){
          commit('readAllTask',Object.keys(snapshot.val()))
          // console.log("task",task)
        // }
      })
    },
    getOnProgress:function({commit}){
      firebase.database().ref('todo').child('/onprogress').on("value",function(snapshot){
        console.log("INI SNAPSHOT .VAL",snapshot.val())
        // for(var task in snapshot.val()){
          commit('readAllOnProgress',Object.keys(snapshot.val()))
          // console.log("task",task)
        // }
      })
    },
    getDone:function({commit}){
      firebase.database().ref('todo').child('/done').on("value",function(snapshot){
        console.log("INI SNAPSHOT .VAL",snapshot.val())
        // for(var task in snapshot.val()){
          commit('readDone',Object.keys(snapshot.val()))
          // console.log("task",task)
        // }
      })
    },


  }
})
