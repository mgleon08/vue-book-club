<template>
  <el-container class="is-vertical">
    <el-header>
      <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#47B784" text-color="#36495D" active-text-color="#FFFFFF">
        <el-menu-item :route="{ path: item.url }" v-for="(item, index) in meunItems" :key="index" :index="`${index+1}`">
          {{item.name}}
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      meunItems: [
        {
          url: '/helloworld',
          name: 'HelloWorld'
        },
        {
          url: '/week1/todolist',
          name: 'Ｗeek1 - Todolist'
        },
        {
          url: '/test',
          name: 'Test'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.el-header{
  padding: 0 !important;
}
</style>
