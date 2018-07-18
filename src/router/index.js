import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 這邊的 @ 指的是 src/
import TodoList from '@/components/TodoList'
import Test from '@/components/Test'
import LifeCycle from '@/views/LifeCycle'
import Main from '@/components/pages/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: { name: 'HelloWorld' },
      children: [
        {
          path: 'helloworld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/week1/todolist',
          name: 'Week1-TodoList',
          component: TodoList
        },
        {
          path: '/week2/lifecycle',
          name: 'Week2-LifeCycle',
          component: LifeCycle
        },
        {
          path: 'test',
          name: 'Test',
          component: Test
        }
      ]
    }
  ]
})
