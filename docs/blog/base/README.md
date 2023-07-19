<template>
  <div>
    <navFileList 
      v-for="(item, index) in sideBarConfigInfos"
      :key="index"
      :fileDatas="specifyFileList(filterFileList, item.folder)"
    >
      {{ item.title }}
    </navFileList>
  </div>
</template>

<script>
  const { sideBarConfig } = require('../../.vuepress/src/sideBarData.js')
  const { sideBarFilter } = require('../../.vuepress/src/sideBarFilter.js')
  const curFileList = require.context('../../blog/base', true, /.md$/)
  const { specifyFileList } = require('../../.vuepress/src/getSpecifyFileList.js')

  export default {
  name: "Base",
  setup() {

    const sideBarConfigInfos = sideBarConfig[0].sideBarInfo

    // 去除README.md文件
    const filterFileList = curFileList.keys().filter(item => item !== './README.md')
    // console.log('filterFileList', filterFileList)


    return {
      filterFileList,
      specifyFileList,
      sideBarConfigInfos
    }
  }
}
</script>
