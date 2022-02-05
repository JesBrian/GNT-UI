const SOURCE_FILE_PATH = 'packages'

module.exports = {
  description: '创建文件，注意必须符合项目约束规范', // 命令启动描述
  prompts: [
    {
      type: 'input', // 命令方式，input-输入，list-选择，confirm-是否
      name: 'fileName', // 输入的文件名
      message: '请输入文件名称' // 提示信息
    }
  ],
  actions: data => {
    const {fileName} = data // 拿到终端输入的文件名
    const actions = []
    if (fileName) {
      actions.push({ // 添加新的模板文件 add
        type: 'add',
        path: `${SOURCE_FILE_PATH}/{{ fileName }}/index.vue`, // 生成的文件存放路径
        templateFile: 'config/templates/index-vue.hbs', // 模板文件路径
        data: { // 传递的数据给模板文件
          name: fileName,
        }
      })
    }
    return actions
  }
}
