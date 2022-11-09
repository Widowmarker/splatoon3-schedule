// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init({
// 	env: cloud.DYNAMIC_CURRENT_ENV
// })

// // 云函数入口函数
// exports.main = async (event, context) => {
// 	let code = event.code //接受参数
// 	try {
// 		const result = await cloud.openapi.myCloudFn()
// 		return result //返回结果
// 	} catch (err) {
// 		throw err
// 	}
// }

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const res = await rp('https://splatoon3.ink/data/schedules.json')
  return res
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}