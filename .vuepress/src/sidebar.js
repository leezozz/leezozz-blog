const fs = require('fs');

// 自动获取侧边栏
function getSideBar(folder, cfolder) {
    // 只能用绝对路径
    // /Users/admin/Documents/work/vue3/leezozz-blog/.vuepress/config.js
    path = '/Users/admin/Documents/work/vue3/leezozz-blog/' + folder + '/' + cfolder;
    let file_list = fs.readdirSync(path);
    for (let i = 0; i < file_list.length; i++) {
        // 可根据需求定制文件名，但是不能有.md后缀
        file_list[i] = file_list[i].slice(0, -3);
    }
    console.log('侧边栏数据', file_list)
    return file_list;
}

module.exports = {
  getSideBar: getSideBar
}