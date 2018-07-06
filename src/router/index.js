import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 這邊的 @ 指的是 src/
import TodoList from '@/components/TodoList'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/week1/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
