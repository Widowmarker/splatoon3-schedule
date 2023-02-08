const mapCloudList = [
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/SockeyeStation.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/GoneFissionHydroplant.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/SpawningGrounds.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/MaroonersBay.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/ScorchGorge.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/HammerheadBridge.jpg',
	"cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/MuseumdAlfonsino.jpg",
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/Mahi-MahiResort.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/InkblotArtAcademy.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/SturgeonShipyard.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/MakoMart.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/WahooWorld.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/EeltailAlley.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/HagglefishMarket.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/UndertowSpillway.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/MincemeatMetalworks.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/BrinewaterSprings.jpg',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/zpijpg50/FlounderHeights.jpg'
]

const mapIdList = [
	'Q29vcFN0YWdlLTI=', // 新卷堡
	'Q29vcFN0YWdlLTc=', // 发电站
	'Q29vcFN0YWdlLTE=', // 大坝
	'Q29vcFN0YWdlLTY=', // 破船
	'VnNTdGFnZS0x', // 温泉花大峡谷
	'VnNTdGFnZS0xMA==', // 真鲭跨海大桥
	'VnNTdGFnZS0xMQ==', // 金眼鲷美术馆
	'VnNTdGFnZS0xMg==', // 鬼头刀SPA度假区
	'VnNTdGFnZS0xMw==', // 海女美术大学
	'VnNTdGFnZS0xNA==', // 鲟鱼造船厂
	'VnNTdGFnZS0xNQ==', // 座头购物中心
	'VnNTdGFnZS0xNg==', // 醋饭海洋世界
	'VnNTdGFnZS0y', // 鳗鲶区
	'VnNTdGFnZS0z', // 烟管鱼市场
	'VnNTdGFnZS00', // 竹蛏疏洪道
	'VnNTdGFnZS02', // 鱼肉碎金属
	'VnNTdGFnZS05', // 比目鱼住宅区
	'VnNTdGFnZS03' // 臭鱼干温泉
]

const weaponCloudList0 = [
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/52Gal.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/96Gal.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/AerosprayMG.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/BallpointSplatling.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Bamboozler14MkI.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/BigSwigRoller.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Blaster.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Bloblobber.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/CarbonRoller.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/ClashBlaster.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/ClassicSquiffer.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/DappleDualies.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/DarkTetraDualies.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/DualieSquelchers.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/DynamoRoller.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/E-liter4K.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Explosher.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/FlingzaRoller.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/GloogaDualies.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/GooTube.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/H-3Nozzlenose.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/HeavySplatling.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/HydraSplatling.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Inkbrush.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/JetSquelcher.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/L-3Nozzlenose.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/LunaBlaster.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/MiniSplatling.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/N-ZAP85.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Nautilus47.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Octobrush.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/REEF-LUX450.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Random.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/RangeBlaster.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/RapidBlaster.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/RapidBlasterPro.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Slosher.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SloshingMachine.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Snipewriter5H.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Splash-o-matic.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplatBrella.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplatCharger.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplatDualies.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplatRoller.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplatanaStamper.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplatanaWiper.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Splattershot Pro.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Splattershot.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplattershotJr.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/SplattershotNova.png',
]

const weaponCloudList1 = [
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Sploosh-o-matic.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Squeezer.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/TentaBrella.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Tri-Slosher.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/Tri-Stringer.png',
	'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/weapon/UndercoverBrella.png',
]

const weaponIdList0 = [
	['d9bbd083353c118d'], // .52加仑
	['ab50e9ae40810698'], // .96加仑
	['48d6e062dd8b7efb', 'd3d579406dbc0fc8'], // 专业模型枪MG 银喷
	['9e45d86ccd5fea1e', 'cb9126ea2928b619'], // 圆珠笔
	['8c0617eafedab081'], // 14式竹筒枪·甲
	['7f8967b3ae112ffc'], // 宽滚筒
	['670ae6f0c617cca4', '9208eee9ecd2026e'], // 火热爆破枪 热泡
	["7a4705bd110b0cee", "13ef7ad9ba855fe1"], // 满溢泡澡泼桶
	["3adcc67d997a5aa8", "8c157e85b75798e7"], // 碳纤维滚筒
	['1208a614c4bb22cf'], // 冲涂爆破枪 蜡笔
	["1e9e39f56c9f6d1a"], // 鱿快洁α
	["1e344559d62809b2"], // 溅镀枪 牙刷
	["3939e000515fe04c", "8e59d00fc471083a"], // 四重弹跳手枪 黑 气垫
	["97745a7307013de3"], // 双重清洁枪
	["7a2dd4e35809d537"], // 电动马达滚筒
	["57717b83b81f474f"], // 公升4K
	["61d373353a48eb2e", "6529a2c7f83ca858"], // 爆炸泼桶
	["daa5ab5b571faec5"], // 可变式滚筒
	["5903a8cef02e4298"], // 开尔文525
	["e2b5e6b340555596", "70aa6b216ca8f01c"], // 高压油管枪
	["a99a6dd8efd4d5bb"], // H3卷管枪
	["11ba9e5928b14318"], // 桶装旋转枪 加特林
	["50563f3849b68e0a"], // 消防栓旋转枪
	["b5c29680486b0d1c"], // 巴勃罗
	["cfcd1cb4b09dc134", "92f330252fdd9421"], // 喷射清洁枪
	["5615e681937a3f12"], // L3卷管枪
	["4b6949b9e979636c"], // 新星爆破枪 白泡
	["cb1243d9c1908a38"], // 斯普拉旋转枪 轻加
	["cf6021b669c84379"], // N-ZAP85
	["39e383c2f6d1ca3e", "af505e7c4bdb7888"], // 鹦鹉螺号47
	["e594a5f9535eaf40"], // 北斋
	["70e60082b7f73c24"], // LACT-450
	["1f6ce9f852641707"], // 随机
	["afc40370eb8a1aa5"], // 远距爆破枪 长热泡
	["627d43fa3ab06066", "2d3900d357e005e9"], // 快速爆破枪 红泡
	["f668bd94e7ebf62d", "83275e416e7c1bc2"], // 快速爆破枪 精英 长热泡
	["13d0d18880c2f4e4"], // 飞溅泼桶 红桶
	["a31def86914d98ae"], // 回旋泼桶 洗衣机
	["a1ea7028b1bcdd28"], // R-PEN/5H 铅笔
	["59d665d32bb4122a", "41492e011c163cc1"], // 窄域标记枪 针管
	["24cab1bbfb443770"], // 遮阳防空伞
	["1d1dd4a9165c4a0c"], // 斯普拉蓄力狙击枪
	["4dc28c8d9bca2dae", "582d03e42a63596a"], // 斯普拉机动枪
	["57684fd4ee281e09", "0637f4b4225f22b8"], // 斯普拉滚筒
	["8f8bfbac8a43c2c7"], // 工作刮水刀
	["77e4f6414e5a257d", "df5b39ea3d32b25b"], // 雨刷刮水刀
	["2c34cb021254c8f8", "617dedf1c26235dc"], // 顶尖射击枪 精英枪
	["9a9dcaa55c2f6545"], // 斯普拉射击枪
	["319a3174ebcb8224"], // 新叶射击枪
	["66e9cd75721a942f"], // 太空射击枪
]

const weaponIdList1 = [
	["e70b1ea70b5916be"], // 广域标记枪 喇叭
	["6c5bbce4a6c63d0c", "f09bb1bb306659dd"], // 开瓶喷泉枪
	["0037f260dd45e397"], // 露营防空伞
	["7813d8c4d9103b07", "7d97fc215efe47fa"], // 洗笔桶
	["ba2b27f7c17b1632", "7ed9dd50b97d24f3"], // 三发猎鱼弓
	["53cefbb18bb74cb3"], // 特工配件
]

export { mapCloudList, mapIdList, weaponCloudList0, weaponIdList0, weaponCloudList1, weaponIdList1 }