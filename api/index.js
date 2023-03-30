// 引入每个目录下面的index.js文件
const ModulesFile = require.context('@/api', true, /.js$/)

//接口集合
var ApiList = {}

for(var key of ModulesFile.keys())
{
  if(/^\.\//.test(key))
  {
    if(key === "./index.jsx") continue

    //合并对象 循环多次合并
    ApiList = Object.assign(ApiList, ModulesFile(key))
  }
}

module.exports = ApiList