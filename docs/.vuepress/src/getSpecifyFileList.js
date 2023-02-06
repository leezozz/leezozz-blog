const specifyFileList = (arg, itemTitle) => {
  console.log('参数·······', arg, itemTitle)

  // 列如："./react/1. 基本模版.md" ， 过滤包含 /react/ 的数据
  const res = arg.filter((item) => {
    console.log('--', item.match(/\/(\S*)\//)[1])
    // 过滤其他文件，只保留md文件
    const handleFile = item.slice(item.lastIndexOf('.')) === ".md"
    const target = handleFile && item.match(/\/(\S*)\//)[1]

    return target === itemTitle
  }).map((item) => {
      console.log('item', item)
      // item:  "./react/1. 基本模版.md"
      // 去除开头的.    结尾的.md
      // const newTemp = item.match(/.\/(\S*).md/)
      const newTemp = item.replace('./', '').replace('.md', '')
      // 最后一个/的索引
      const indexTarget = item.lastIndexOf('/')
      // 文件名，去除.md
      const newLabel = item.slice(indexTarget + 1, -3)

      console.log('newTemp', newTemp, newLabel)
      return {
        path: newTemp,
        label: newLabel
      }
  })

  console.log('res', res)
  
  return res
}

module.exports = {
  specifyFileList
}