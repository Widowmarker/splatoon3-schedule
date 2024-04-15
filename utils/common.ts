// 处理时间格式(打工)
const handleTime = (time : string) => {
	const sourceTime = new Date(time)

	const month = sourceTime.getMonth() + 1
	const day = sourceTime.getDate()
	let hours = sourceTime.getHours() + ':00'
	if (hours.length === 4) hours = '0' + hours

	return `${month}/${day} ${hours}`
}

// 处理时间格式(打工)
const handleTimeDate = (time : string) => {
	const sourceTime = new Date(time)

	const month = sourceTime.getMonth() + 1
	const day = sourceTime.getDate()
	let hours = sourceTime.getHours() + ':00'
	if (hours.length === 4) hours = '0' + hours
	const weekNum = sourceTime.getDay()
	const weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	const week = weekArr[weekNum]

	return `${week} ${month}/${day} ${hours}`
}

// 处理时间格式(涂地、真格)
const handleHours = (time : string) => {
	const sourceTime = new Date(time)
	let hours = sourceTime.getHours() + ':00'
	if (hours.length === 4) hours = '0' + hours
	return hours
}

// 商品剩余时间
const surplusTime = (time : string) => {
	const now = new Date().getTime()
	const sourceTime = new Date(time).getTime()

	const surplus = (sourceTime - now) / 1000 / (60 * 60)

	if (surplus < 1) {
		return Math.floor((sourceTime - now) / 1000 / 60)
	}

	return Math.floor(surplus)
}

// 处理武器名称
const simplifyName = (name : string, url ?: string) => {
	if (name === 'Random') {
		// if (url === 'https://splatoon3.ink/assets/splatnet/v1/ui_img/473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0.png')
		if (url?.includes('473fffb2442075078d8bb7125744905abdeae651b6a5b7453ae295582e45f7d1_0')) {
			return 'Random'
		} else {
			return 'GoldRandom'
		}
	}
	return name.replaceAll(' ', '').replaceAll('\'', '').replaceAll('-', '').replaceAll('.', '').replaceAll('&', '')
}

export { handleTime, handleTimeDate, handleHours, surplusTime, simplifyName }