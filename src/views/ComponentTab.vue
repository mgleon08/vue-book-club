<template>
  <div id="W3Index">
    <h1>Index {{ tabIndex }}</h1>
    <h2>ChildMessage: {{ childMessage }}</h2>
    <h2>{{ obj }}</h2>
    <input v-model="message" type="text">
    <div class="tab-buttons">
      <span
        v-for="(tab, index) in tabs"
        @click="tabIndex = index"
        :class="{ 'active': tabIndex === index }"
        :key="index">
        {{ tab.name }}
      </span>
    </div>
    <div class="tab-content">
      <!-- data 是由 TabA 作定義的 props 屬性 -->
      <TabA v-show="tabIndex === 0" :data="obj"></TabA>
      <TabB v-show="tabIndex === 1" :data="childMessage">
        <!-- mapping component 的 slot 名稱，就可將 template 傳到下層 -->ㄋ
        <div slot="content">
          <div style="width: 100px; height: 100px; border: solid 1px #333"> I am slot </div>
        </div>
      </TabB>
      <!-- 監聽 childMessage，監聽到就執行 getChildMessage -->
      <TabC v-show="tabIndex === 2" :message="message" @childMessage="getChildMessage"></TabC>
    </div>
  </div>
</template>

<script>
import TabA from '@/components/week3/TabA'
import TabB from '@/components/week3/TabB'
import TabC from '@/components/week3/TabC'
export default {
  name: 'W3Index',
  components: {
    // es6 於許 key value 一樣時，只需要寫一次，如果不一樣就必須都寫 TabZ: TabA
    TabA,
    TabB,
    TabC
  },
  data() {
    return {
      message: '',
      childMessage: '',
      obj: {
        name: 'AAAAA',
        value: 123
      },
      tabIndex: 0,
      tabs: [{ name: 'TabA' }, { name: 'TabB' }, { name: 'TabC' }]
    }
  },
  methods: {
    getChildMessage(msg) {
      this.childMessage = msg
    }
  }
}
</script>

<style lang="scss">
#W3Index {
  .tab {
    &-buttons {
      margin-top: 30px;
      span {
        margin-right: 20px;
        padding: 5px 20px;
        border: solid 1px #333;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        &:hover,
        &.active {
          background-color: #333;
          color: #fff;
        }
      }
    }
    &-content {
      margin-top: 30px;
      border: solid 1px #333;
      padding: 20px;
    }
  }
}
</style>
