const wishList = [
    {
    name: 'Mini puzzle', 
    size: 'small',
    clatter: 'yes',
    weight: 'light'
},
{
    name: 'Toy Car',
    size: 'medium',
    clatter: 'a bit',
    weight: 'medium'
},
{
    name: 'Card Game',
    size: 'small',
    clatter: 'no',
    weight: 'light'
}
]

const presents = [
    {
    size: 'medium',
    clatter: 'a bit',
    weight: 'medium'
    },

    {
    size: 'small',
    clatter: 'yes',
    weight: 'light'
    }
]



const guessTheGift = (wishList, presents) => {
    const possibleGifts = []

    for (const wishListItem of wishList) {
        for (const present of presents) {
            if (present.size === wishListItem.size && present.clatter === wishListItem.clatter && present.weight === wishListItem.weight) {
                possibleGifts.push(wishListItem.name)
            }
        }
    }
    return possibleGifts
}

const possibleGifts = guessTheGift(wishList, presents)

console.log(possibleGifts)