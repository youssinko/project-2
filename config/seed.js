require('dotenv').config()
require('./database')
const Category = require('../models/category')
const Item = require('../models/item')
(async function (){
    await Category.deleteMany({})
    const categories = await Category.create([
        {name:'Shirts', sortOrder:10},
        {name:'Tumbler', sortOrder:20},
        {name:'Stickers' , sortOrder:30}
    ])
    await Item.deleteMany({})
    const items = await Item.create([

   { name:'T-shirt', img: 'https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/d591fc74_ca50.jpg' , categories:[0],price:18},
   { name:'Long Sleeve shirt', img: 'https://i.ebayimg.com/images/g/NnAAAOSw~flcHOLV/s-l1600.jpg' , categories:[0],price:20},

   { name:'Changing-color Tumbler', img: 'https://i5.walmartimages.com/asr/e1951e95-2054-4662-93fa-7a76e22cff59.8d9388ead7b066b7a551165a79bf4089.jpeg' , categories:[1],price:25},
   { name:'Vacuum Insulated Tumbler', img: 'https://res.cloudinary.com/forallpromos/image/fetch/f_auto/https://www.4allpromos.com/sites/default/files/imagecache/420x420/images/products/744330/430-MG687b.jpg' , categories:[1],price:15},
   { name:'black print stickers 2x2', img: 'https://cdn.makestickers.com/templates/large/3cir_BasicBlack_8.jpg' , categories:[2],price:15},
   { name:'clear foil stickers 2x2', img: 'https://m.media-amazon.com/images/I/41x8x8DH8JL.jpg' , categories:[2],price:30}

    ])
    console.log(items)
    process.exit()
})()
