import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
// 這邊的 @ 指的是 src/
import TodoList from '@/views/TodoList'
import LifeCycle from '@/views/LifeCycle'
import Main from '@/views/Main'

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
          path: '/week3/component',
          name: 'Week3-Component',
          component: () => import('@/views/Component')
        },
        {
          path: 'test',
          name: 'Test',
          component: () => import('@/views/Test')
        }
      ]
    }
  ]
})
