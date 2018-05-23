<template>
  <div id="kanban">
    <h3 class="ui center aligned header">KanBan</h3>
    <!-- <button class="ui button" style="margin-left: 50px">New Task</button> -->
          <router-link to="/about"><button class="ui button">New Task</button></router-link>
    <div class="ui three column center aligned grid container">
      <div class="column">
        <div class="ui segment" style="background-color:pink;">
<!--CARD 1-->
            <div class="content" >
              <div class="header"><h2>To Do</h2></div>
            </div>
                <task></task>

<!--CARD END-->
        </div>
      </div>

      <div class="column">
        <div class="ui segment" style="background-color:yellow;">
<!--CARD-->
          <div class="content">
            <div class="header"><h2>On Progress</h2></div>
          </div>
                <onprogress></onprogress>
<!--CARD END-->
        </div>
      </div>
      <div class="column">
        <div class="ui segment" style="background-color:skyblue;">
<!--CARD-->

          <div class="content">
            <div class="header"><h2>Done</h2></div>
          </div>
                <done></done>
<!--CARD END-->
        </div>
      </div>
    </div>
    
<!--div ngebungkus end-->
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import task from '@/components/task.vue'
import done from '@/components/done.vue'
import onprogress from '@/components/onprogress.vue'

export default {
  name: 'home',
  components: {
    task,
    done,
    onprogress
  }
}
</script>
