const SOURCE_FILE_PATH = 'packages'

module.exports = {
  description: '初始化创建组件模板',
  prompts: [
    {
      type: 'input', // 命令方式，input-输入，list-选择，confirm-是否
      name: 'fileName',
      message: '请输入初始化组件名称'
    }
  ],
  actions: data => {
    const {fileName} = data
    const actions = []
    if (fileName) {
      actions.push({
        type: 'add',
        path: `${SOURCE_FILE_PATH}/{{ fileName }}/index.ts`,
        templateFile: 'templates/component/index-ts.hbs',
        data: {
          name: fileName,
        }
      }, {
        type: 'add',
        path: `${SOURCE_FILE_PATH}/{{ fileName }}/src/index.vue`,
        templateFile: 'templates/component/index-vue.hbs',
        data: {
          name: fileName,
        }
      })
    }
    return actions
  }
}
