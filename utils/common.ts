 // 处理时间格式(打工)
const handleTime = (time: string) => {
	const sourceTime = new Date(time)

	const month = sourceTime.getMonth() + 1
	const day = sourceTime.getDate()
	let hours = sourceTime.getHours() + ':00'
	if (hours.length === 4) hours = '0' + hours

	return `${month}/${day} ${hours}`
}

// 处理时间格式(涂地、真格)
const handleHours = (time: string) => {
	const sourceTime = new Date(time)
	let hours = sourceTime.getHours() + ':00'
	if (hours.length === 4) hours = '0' + hours
	return hours
}

export { handleTime, handleHours }