<template>
  <div id="TabB">
    <h1>TabB</h1>
    <h2>{{ data }}</h2>
    <!-- slot 設定，外面必須 name 也是 content -->
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabB',
  props: ['data', 'data2'],
  data() {
    return {
    }
  }
}
</script>
