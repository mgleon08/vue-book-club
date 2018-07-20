<template>
  <div id="TabA">
    <h1>TabA</h1>
    <h2>{{ childData }}</h2>
    <button @click="changeChildObj">changeChildObj</button>
  </div>
</template>

<script>
export default {
  name: 'TabA',
  // props: ['data'], 可以這樣寫需要的屬性，但就沒辦法限制 type 等等..
  props: {
    // 這樣寫就可以限制每個屬性要的條件
    data: {
      type: Object,
      default: () => { return {} },
      required: false
    }
  },
  data() {
    return {
      // 要改 props 資料，必須做深拷貝，不然原本 object 會 reference 上一層的資料
      childData: JSON.parse(JSON.stringify(this.data))
    }
  },
  methods: {
    changeChildObj() {
      this.childData.name = 'BBBBBB'
    }
  }
}
</script>
