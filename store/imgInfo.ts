import cloudId from './cloudId'

const mapCloudList = [
	cloudId + '/zpijpg50/SockeyeStation.jpg',
	cloudId + '/zpijpg50/GoneFissionHydroplant.jpg',
	cloudId + '/zpijpg50/SpawningGrounds.jpg',
	cloudId + '/zpijpg50/MaroonersBay.jpg',
	cloudId + '/zpijpg50/JamminSalmonJunction.jpg',
	cloudId + '/zpijpg50/SalmonidSmokeyard.jpg',
	cloudId + '/zpijpg50/BonerattleArena.jpg',
	cloudId + '/zpijpg50/ScorchGorge.jpg',
	cloudId + '/zpijpg50/HammerheadBridge.jpg',
	cloudId + "/zpijpg50/MuseumdAlfonsino.jpg",
	cloudId + '/zpijpg50/Mahi-MahiResort.jpg',
	cloudId + '/zpijpg50/InkblotArtAcademy.jpg',
	cloudId + '/zpijpg50/SturgeonShipyard.jpg',
	cloudId + '/zpijpg50/MakoMart.jpg',
	cloudId + '/zpijpg50/WahooWorld.jpg',
	cloudId + '/zpijpg50/EeltailAlley.jpg',
	cloudId + '/zpijpg50/HagglefishMarket.jpg',
	cloudId + '/zpijpg50/UndertowSpillway.jpg',
	cloudId + '/zpijpg50/MincemeatMetalworks.jpg',
	cloudId + '/zpijpg50/BrinewaterSprings.jpg',
	cloudId + '/zpijpg50/FlounderHeights.jpg',
	cloudId + '/zpijpg50/MantaMaria.jpg',
	cloudId + '/zpijpg50/UmamiRuins.jpg',
	cloudId + '/zpijpg50/BarnacleDime.jpg',
	cloudId + '/zpijpg50/HumpbackPumpTrack.jpg',
	cloudId + '/zpijpg50/ShipshapeCargoCo.jpg',
	cloudId + '/zpijpg50/CrablegCapital.jpg',
	cloudId + '/zpijpg50/BluefinDepot.jpg',
	cloudId + '/zpijpg50/RoboROM-en.jpg',
	cloudId + '/zpijpg50/MarlinAirport.jpg',
]

// const mapIdList = [
// 	'Q29vcFN0YWdlLTI=', // 新卷堡
// 	'Q29vcFN0YWdlLTc=', // 发电站
// 	'Q29vcFN0YWdlLTE=', // 大坝
// 	'Q29vcFN0YWdlLTY=', // 破船
// 	'Q29vcFN0YWdlLTg=', // 生筋子系统交流道遗址
// 	'Q29vcFN0YWdlLTQ=', // 鲑鱼岛
// 	'Q29vcFN0YWdlLTk=', // 鲑鱼心脏竞技场
// 	'VnNTdGFnZS0x', // 温泉花大峡谷
// 	'VnNTdGFnZS0xMA==', // 真鲭跨海大桥
// 	'VnNTdGFnZS0xMQ==', // 金眼鲷美术馆
// 	'VnNTdGFnZS0xMg==', // 鬼头刀SPA度假区
// 	'VnNTdGFnZS0xMw==', // 海女美术大学
// 	'VnNTdGFnZS0xNA==', // 鲟鱼造船厂
// 	'VnNTdGFnZS0xNQ==', // 座头购物中心
// 	'VnNTdGFnZS0xNg==', // 醋饭海洋世界
// 	'VnNTdGFnZS0y', // 鳗鲶区
// 	'VnNTdGFnZS0z', // 烟管鱼市场
// 	'VnNTdGFnZS00', // 竹蛏疏洪道
// 	'VnNTdGFnZS02', // 鱼肉碎金属
// 	'VnNTdGFnZS03', // 臭鱼干温泉
// 	'VnNTdGFnZS05', // 比目鱼住宅区
// 	'VnNTdGFnZS0xOA==', // 鬼蝠鲼玛利亚号
// 	'VnNTdGFnZS01', // 鱼霸遗迹
// 	'VnNTdGFnZS04', // 塔拉波特购物公园
// 	'VnNTdGFnZS0xNw==', // 昆布赛道
// 	'VnNTdGFnZS0yMA==', // 大比目鱼海运中心
// 	'VnNTdGFnZS0xOQ==', // 高脚经济特区
// 	'VnNTdGFnZS0yMg==', // 葱鲔鱼煤矿场
// 	'VnNTdGFnZS0yMQ==', // 贝见亭
// 	"VnNTdGFnZS0yMw==", // 旗鱼机场
// ]

const mapIdList = [
	'SockeyeStation', // 新卷堡
	'GoneFissionHydroplant', // 发电站
	'SpawningGrounds', // 大坝
	'MaroonersBay', // 破船
	'JamminSalmonJunction', // 生筋子系统交流道遗址
	'SalmonidSmokeyard', // 鲑鱼岛
	'BonerattleArena', // 鲑鱼心脏竞技场
	'ScorchGorge', // 温泉花大峡谷
	'HammerheadBridge', // 真鲭跨海大桥
	"MuseumdAlfonsino", // 金眼鲷美术馆
	'MahiMahiResort', // 鬼头刀SPA度假区
	'InkblotArtAcademy', // 海女美术大学
	'SturgeonShipyard', // 鲟鱼造船厂
	'MakoMart', // 座头购物中心
	'WahooWorld', // 醋饭海洋世界
	'EeltailAlley', // 鳗鲶区
	'HagglefishMarket', // 烟管鱼市场
	'UndertowSpillway', // 竹蛏疏洪道
	'MincemeatMetalworks', // 鱼肉碎金属
	'BrinewaterSprings', // 臭鱼干温泉
	'FlounderHeights', // 比目鱼住宅区
	'MantaMaria', // 鬼蝠鲼玛利亚号
	'UmamiRuins', // 鱼霸遗迹
	'BarnacleDime', // 塔拉波特购物公园
	'HumpbackPumpTrack', // 昆布赛道
	'ShipshapeCargoCo', // 大比目鱼海运中心
	'CrablegCapital', // 高脚经济特区
	'BluefinDepot', // 葱鲔鱼煤矿场
	'RoboROMen', // 贝见亭
	'MarlinAirport', // 旗鱼机场
]

const weaponCloudList0 = [
	cloudId + "/weapon/52Gal.png",
	cloudId + "/weapon/96Gal.png",
	cloudId + "/weapon/AerosprayMG.png",
	cloudId + "/weapon/BallpointSplatling.png",
	cloudId + "/weapon/Bamboozler14MkI.png",
	cloudId + "/weapon/BigSwigRoller.png",
	cloudId + "/weapon/Blaster.png",
	cloudId + "/weapon/Bloblobber.png",
	cloudId + "/weapon/CarbonRoller.png",
	cloudId + "/weapon/ClashBlaster.png",
	cloudId + "/weapon/ClassicSquiffer.png",
	cloudId + "/weapon/DappleDualies.png",
	cloudId + "/weapon/DarkTetraDualies.png",
	cloudId + "/weapon/DualieSquelchers.png",
	cloudId + "/weapon/DynamoRoller.png",
	cloudId + "/weapon/Eliter4K.png",
	cloudId + "/weapon/Explosher.png",
	cloudId + "/weapon/FlingzaRoller.png",
	cloudId + "/weapon/GloogaDualies.png",
	cloudId + "/weapon/GooTuber.png",
	cloudId + "/weapon/H3Nozzlenose.png",
	cloudId + "/weapon/HeavySplatling.png",
	cloudId + "/weapon/HydraSplatling.png",
	cloudId + "/weapon/Inkbrush.png",
	cloudId + "/weapon/JetSquelcher.png",
	cloudId + "/weapon/L3Nozzlenose.png",
	cloudId + "/weapon/LunaBlaster.png",
	cloudId + "/weapon/MiniSplatling.png",
	cloudId + "/weapon/NZAP85.png",
	cloudId + "/weapon/Nautilus47.png",
	cloudId + "/weapon/Octobrush.png",
	cloudId + "/weapon/REEFLUX450.png",
	cloudId + "/weapon/RangeBlaster.png",
	cloudId + "/weapon/RapidBlaster.png",
	cloudId + "/weapon/RapidBlasterPro.png",
	cloudId + "/weapon/Slosher.png",
	cloudId + "/weapon/SloshingMachine.png",
	cloudId + "/weapon/Snipewriter5H.png",
	cloudId + "/weapon/Splashomatic.png",
	cloudId + "/weapon/SplatBrella.png",
	cloudId + "/weapon/SplatCharger.png",
	cloudId + "/weapon/SplatDualies.png",
	cloudId + "/weapon/SplatRoller.png",
	cloudId + "/weapon/SplatanaStamper.png",
	cloudId + "/weapon/SplatanaWiper.png",
	cloudId + "/weapon/Splattershot.png",
	cloudId + "/weapon/SplattershotJr.png",
	cloudId + "/weapon/SplattershotNova.png",
	cloudId + "/weapon/SplattershotPro.png",
	cloudId + "/weapon/Splooshomatic.png",
]

const weaponCloudList1 = [
	cloudId + "/weapon/Random.png", // "Random",
	cloudId + "/weapon/GoldRandom.png", // "Random",
	cloudId + "/weapon/Squeezer.png",
	cloudId + "/weapon/TentaBrella.png",
	cloudId + "/weapon/TriSlosher.png",
	cloudId + "/weapon/TriStringer.png",
	cloudId + "/weapon/UndercoverBrella.png",
	cloudId + "/weapon/Painbrush.png",
	cloudId + "/weapon/SBLAST92.png",
	cloudId + "/weapon/DreadWringer.png",
	cloudId + "/weapon/HeavyEditSplatling.png",
	cloudId + "/weapon/DouserDualiesFF.png",
	cloudId + "/weapon/RecycledBrella24MkI.png",
	cloudId + "/weapon/Blaster_Bear_Coop.webp", // 熊泡 20900
	cloudId + "/weapon/Charger_Bear_Coop.webp", // 熊狙 22900
	cloudId + "/weapon/Maneuver_Bear_Coop.webp", // 熊双 25900
	cloudId + "/weapon/Saber_Bear_Coop.webp", // 熊刀 28900
	cloudId + "/weapon/Shelter_Bear_Coop.webp", // 熊伞 26900
	cloudId + "/weapon/Slosher_Bear_Coop.webp", // 熊桶 23900
	cloudId + "/weapon/Stringer_Bear_Coop.webp", // 熊弓 27900
]

const weaponIdList0 = [
	"52Gal",
	"96Gal",
	"AerosprayMG",
	"BallpointSplatling",
	"Bamboozler14MkI",
	"BigSwigRoller",
	"Blaster",
	"Bloblobber",
	"CarbonRoller",
	"ClashBlaster",
	"ClassicSquiffer",
	"DappleDualies",
	"DarkTetraDualies",
	"DualieSquelchers",
	"DynamoRoller",
	"Eliter4K",
	"Explosher",
	"FlingzaRoller",
	"GloogaDualies",
	"GooTuber",
	"H3Nozzlenose",
	"HeavySplatling",
	"HydraSplatling",
	"Inkbrush",
	"JetSquelcher",
	"L3Nozzlenose",
	"LunaBlaster",
	"MiniSplatling",
	"NZAP85",
	"Nautilus47",
	"Octobrush",
	"REEFLUX450",
	// "Random",
	"RangeBlaster",
	"RapidBlaster",
	"RapidBlasterPro",
	"Slosher",
	"SloshingMachine",
	"Snipewriter5H",
	"Splashomatic",
	"SplatBrella",
	"SplatCharger",
	"SplatDualies",
	"SplatRoller",
	"SplatanaStamper",
	"SplatanaWiper",
	"Splattershot",
	"SplattershotJr",
	"SplattershotNova",
	"SplattershotPro",
	"Splooshomatic",
]

const weaponIdList1 = [
	"Random",
	"GoldRandom",
	"Squeezer",
	"TentaBrella",
	"TriSlosher",
	"TriStringer",
	"UndercoverBrella",
	"Painbrush",
	"SBLAST92",
	"DreadWringer",
	"HeavyEditSplatling",
	"DouserDualiesFF",
	"RecycledBrella24MkI",
	"20900",
	"22900",
	"25900",
	"28900",
	"26900",
	"23900",
	"27900",
]

const festCloudList = [
	cloudId + '/fest/chocolate.png',
	cloudId + '/fest/DarkChocolate.png',
	cloudId + '/fest/MilkChocolate.png',
	cloudId + '/fest/WhiteChocolate.png',
	cloudId + '/fest/tasteSensation.png',
	cloudId + '/fest/Spicy.png',
	cloudId + '/fest/Sweet.png',
	cloudId + '/fest/Sour.png',
	cloudId + '/fest/PokémonType.png',
	cloudId + '/fest/Grass.png',
	cloudId + '/fest/Fire.png',
	cloudId + '/fest/Water.png',
	cloudId + '/fest/desertedIsland.png',
	cloudId + '/fest/Gear.png',
	cloudId + '/fest/Grub.png',
	cloudId + '/fest/Fun.png',
	cloudId + '/fest/isReal.png',
	cloudId + '/fest/Nessie.png',
	cloudId + '/fest/Aliens.png',
	cloudId + '/fest/Bigfoot.png',
	cloudId + '/fest/youSeek.png',
	cloudId + '/fest/Power.png',
	cloudId + '/fest/Wisdom.png',
	cloudId + '/fest/Courage.png',
	cloudId + '/fest/IceCream.png',
	cloudId + '/fest/Vanilla.png',
	cloudId + '/fest/Strawberry.png',
	cloudId + '/fest/MintChip.png',
	cloudId + '/fest/MostImportantInLife.png',
	cloudId + '/fest/Money.png',
	cloudId + '/fest/Fame.png',
	cloudId + '/fest/Love.png',
]

const festIdList = [
	"RmVzdC1FVTpKVUVBLTAwMDA0", // 巧克力就要选这种！
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNDpBbHBoYQ==", // 苦甜巧克力
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNDpCcmF2bw==", // 牛奶巧克力
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNDpDaGFybGll", // 白巧克力
	"RmVzdC1FVTpKVUVBLTAwMDAz", // 喜欢的口味是什么呢？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMzpBbHBoYQ==", // 辣
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMzpCcmF2bw==", // 甜
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMzpDaGFybGll", // 酸
	"RmVzdC1FVTpKVUVBLTAwMDAy", // 要选哪种属性的搭档呢？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMjpBbHBoYQ==", // 草
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMjpCcmF2bw==", // 火
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMjpDaGFybGll", // 水
	"RmVzdC1FVTpKVUVBLTAwMDAx", // 你会带什么去无人岛？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMTpBbHBoYQ==", // 工具
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMTpCcmF2bw==", // 食物
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwMTpDaGFybGll", // 打发时间的东西
	"RmVzdC1FVTpKVUVBLTAwMDA1", //真实存在的是？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNTpBbHBoYQ==", // 尼斯湖水怪
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNTpCcmF2bw==", // 外星人
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNTpDaGFybGll", // 雪怪
	"RmVzdC1FVTpKVUVBLTAwMDA2", // 汝在追求什么？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNjpBbHBoYQ==", // 力量
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNjpCcmF2bw==", // 智慧
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNjpDaGFybGll", // 勇气
	"RmVzdC1FVTpKVUVBLTAwMDA3", // 说到冰淇淋你会想起？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNzpBbHBoYQ==", // 香草
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNzpCcmF2bw==", // 草莓
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwNzpDaGFybGll", // 薄荷巧克力
	"RmVzdC1FVTpKVUVBLTAwMDA4", // 人生中最重要的是什么？
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwODpBbHBoYQ==", // 钱
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwODpCcmF2bw==", // 利
	"RmVzdFRlYW0tRVU6SlVFQS0wMDAwODpDaGFybGll", // 爱
]

const kingCloudList = [
	// cloudId + '/king/Cohozuna.png',
	// cloudId + '/king/Horrorboros.png',
	cloudId + '/king/gameIcon/Cohozuna.png',
	cloudId + '/king/gameIcon/Horrorboros.png',
	cloudId + '/king/gameIcon/Megalodontia.png',
]

const kingIdList = [
	'SakelienGiant', // 横纲 Cohozuna
	'SakeRope', // 辰龙 Horrorboros
	'SakeJaw', // 巨颚 Megalodontia
]

const otherCloudList = [
	cloudId + '/other/bigRun.png',
	cloudId + '/other/teamSchedules.png'
]

const otherIdList = [
	'bigRun', // 大型跑
	'teamSchedules', // 团队竞赛
]

export {
	mapCloudList,
	mapIdList,
	weaponCloudList0,
	weaponIdList0,
	weaponCloudList1,
	weaponIdList1,
	festCloudList,
	festIdList,
	kingIdList,
	kingCloudList,
	otherCloudList,
	otherIdList
}