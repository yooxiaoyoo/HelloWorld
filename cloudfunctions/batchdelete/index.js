// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{  //捕获异常
    return await db.collection("user0707")
    .where({
      name:"悠小呦"
    }).remove()
  } catch (e){
    console.error("云函数运行错误",e)
  }
}