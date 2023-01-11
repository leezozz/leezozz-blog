<template>
  <div>
    <h3>
      <slot></slot>
    </h3>
    <ul>
      <li 
        v-for="(item, index) in fileDatas"
        :key="index"
      >
        <router-link :to="item.path">{{item.label}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件
export default {
  name: "navFileList",
  props: {
    fileDatas: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  
}
</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
</style>