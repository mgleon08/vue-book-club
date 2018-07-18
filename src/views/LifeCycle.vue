<template>
  <div>
    <el-alert class="alert"
    title="請打開 console 去觀看"
    type="warning">
    </el-alert>
    <el-button type="primary" @click="backPreWeek">回上週</el-button>
    {{queryData}}
    <input type="text" v-model="queryData.limit" />
    <child />
  </div>
</template>

<script>
import child from '@/components/LifeCycleChild'
import queryData from '@/config/queyData'
export default {
  name: 'lifeCycle',
  components: {
    child
  },
  data() {
    return {
      queryData: null
    }
  },
  methods: {
    backPreWeek() {
      this.$router.push({
        path: '/week1/todolist'
      })
    }
  },
  beforeCreate() {
    console.log('beforeCreate Parent')
  },
  created() {
    console.log('create Parent')
  },
  beforeMount() {
    console.log(this.queryData)
    this.queryData = queryData
    console.log(this.queryData)
    console.log('beforeMounted Parent')
  },
  mounted() {
    this.queryData.limit = 20
    console.log('mounted Parent')
  },
  beforeUpdate() {
    console.log('beforeUpdate Parent')
  },
  updated() {
    console.log('updated Parent')
  },
  beforeDestroy() {
    console.log('beforeDestroy Parent')
  },
  destroyed() {
    console.log('destroyed Parent')
  }
}
</script>

<style lang="scss" scoped>
  .alert{
    margin-bottom: 20px !important;
  }
</style>
