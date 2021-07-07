// 云函数入口函数
// event 小程序端参数  context 当前调用的上下文
exports.main = async (event, context) => {
  return{
    sum: event.a+event.b
  }
}