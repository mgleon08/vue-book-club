<template>
  <div>
    child
    <div ref="msgDiv">{{msg}}</div>
      <el-row>
        <el-col class='life-td' :span="24" v-if="msg1">Message $nextTick: {{msg1}}
        <div>(當下直接取 reference 到 html 上面的 value，這時候更新的值還沒 bind 到 html 上面)</div>
        </el-col>
        <el-col class='life-td' :span="24" v-if="msg2">Message $nextTick: {{msg2}}
        <div>(當下個階段再去取 reference 到 html 上面的 value，這時下個階段已經將 value bind 到 html 上面，因此可以拿到更新後的值)</div>
        </el-col>
        <el-col class='life-td' s:span="24" v-if="msg3">Message $nextTick: {{msg3}}
        <div>(當下直接取 reference 到 html 上面的 value，這時候更新的值還沒 bind 到 html 上面)</div>
        </el-col>
      </el-row>
    <el-button type="success" @click="changeMsg">Change the Message to Hello world</el-button>
  </div>
</template>

<script>
export default {
  name: 'lifeCycleChild',
  data() {
    return {
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello world'
      console.log('before update msg1 value')
      this.msg1 = this.$refs.msgDiv.innerHTML
      console.log('after update msg1 value')
      // nextTick 是指 life cycle 的下一個階段要執行
      this.$nextTick(() => {
        console.log('before update msg2 value')
        this.msg2 = this.$refs.msgDiv.innerHTML
        console.log('after update msg2 value')
      })
      console.log('before update msg3 value')
      this.msg3 = this.$refs.msgDiv.innerHTML
      console.log('after update msg3 value')
    }
  },
  beforeCreate() {
    console.log('beforeCreate Child')
  },
  created() {
    console.log('create Child')
  },
  beforeMount() {
    console.log('beforeMounted Child')
  },
  mounted() {
    console.log('mounted Child')
  },
  beforeUpdate() {
    console.log('beforeUpdate Child')
  },
  updated() {
    console.log('updated Child')
  },
  beforeDestroy() {
    console.log('beforeDestroy Child')
  },
  destroyed() {
    console.log('destroyed Child')
  }
}
</script>

<style lang="scss" scoped>
 .life-td{
   margin: 20px 0 !important;
 }
</style>
