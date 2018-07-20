<template>
  <div id="TodoList">
    <div class="top-area">
      <el-row :gutter="10">
        <el-col :span="8"><el-input type="text" v-model.trim="todoMessage" v-on:keyup.enter="addTodo" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="4"><el-button type="primary" @click="addTodo" icon="el-icon-circle-plus"></el-button></el-col>
      </el-row>
      <div class="top-area-info">
        共有: {{ todoList.length }} 筆資料，有 {{ checkedItemCount.length }} 筆完成，{{ uncheckedItemCount.length }} 未筆完成
      </div>
      <div v-if="isMaxLimit" class="top-area-info--full">已達新增上限！v-if</div>
      <div v-show="isMaxLimit" class="top-area-info--full">已達新增上限！v-show</div>
    </div>

    <el-row :gutter="10">
      <el-col :span="8">
        <div class="content">
          未完成
          <ul class="todolist">
            <li v-for="(todo, index) in uncheckedItemCount" :key="index" class="todolist-item">
              <input :id="`todo-${index}`" type="checkbox" v-model="todo.checked">
              <label :for="`todo-${index}`" :class="[{ 'todolist-item--checked': todo.checked }]">{{ todo.name }}</label>
              <button class="todolist-item-remove" @click="removeTodo(index)">remove</button>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="content">
                已完成
          <ul class="todolist">
            <li v-for="(todo, index) in checkedItemCount" :key="index" class="todolist-item">
              <input :id="`todo-${index}`" type="checkbox" v-model="todo.checked">
              <label :for="`todo-${index}`" :class="[{ 'todolist-item--checked': todo.checked }]">{{ todo.name }}</label>
              <button class="todolist-item-remove" @click="removeTodo(index)">remove</button>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      maxLimit: 5,
      todoMessage: '',
      todoList: [{ name: 'test', checked: false }]
    }
  },
  computed: {
    checkedItemCount() {
      return this.todoList.filter(todo => todo.checked)
    },
    uncheckedItemCount() {
      return this.todoList.filter(todo => !todo.checked)
    },
    isMaxLimit() {
      return this.todoList.length === this.maxLimit
    }
  },
  watch: {
    // todoMessage (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    // }
    // todoList: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     this.checkedItemCount = this.todoList.filter(todo => todo.checked)
    //   },
    //   deep: true
    // }
  },
  methods: {
    addTodo() {
      if (!this.isMaxLimit && this.todoMessage) {
        this.todoList.push({
          name: this.todoMessage,
          checked: false
        })
        this.todoMessage = ''
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
#TodoList {
  * {
    user-select: none;
  }
  .top-area {
    &-info {
      &--full {
        color: pink;
      }
    }
  }
  .todolist {
    &-item {
      &--checked {
        text-decoration: line-through;
      }
    }
  }
}
</style>
