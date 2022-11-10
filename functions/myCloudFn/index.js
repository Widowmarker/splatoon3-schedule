// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

const rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
	// 语言接口
	if (event.language) {
		const res = await rp(`https://splatoon3.ink/data/locale/${event.language}.json`)
		return res
	}
	// const wxContext = cloud.getWXContext()
	// 日程、商城、祭奠接口
	const res = await rp(`https://splatoon3.ink/data/${event.type}.json`)
	return res
}
