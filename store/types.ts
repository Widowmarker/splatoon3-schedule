interface Image {
	url: string
}

interface GearPower {
	image: Image,
	name: string,
	__splatoon3ink_id: string
}

interface GearInfo {
	id: string
	price: number,
	saleEndTime: string,
	gear: {
		name: string,
		image: Image,
		__typename: string
		__splatoon3ink_id: string,
		primaryGearPower: GearPower
		additionalGearPowers: GearPower[],
		brand: {
			name: string,
			id: string,
			image: Image
		},
	}
}

interface GearData {
	limitedGears: GearInfo[]
	pickupBrand: {
		saleEndTime: string
		image: Image
		brand: {
			name: string;
			usualGearPower: {
				__splatoon3ink_id: string
				name: string
				desc: string
				image: {
					url: string
				}
				isEmptySlot: boolean
			}
			id: string
		}
		brandGears: GearInfo[]
		nextBrand: {
			name: string
			image: Image
			id: string
		}
	}
}

export default GearData