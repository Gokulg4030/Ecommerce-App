

// import mongoose
const mongoose = require('mongoose')

// define connection string
mongoose.connect('mongodb://localhost:27017/cart', () => {     // path is from mongodb(copy connection string)

    console.log('connected to mongodb')
})

// model creation

const Product = mongoose.model('product', {      // creating schema
    id: Number,
    title: String,                                // schema is from mongodb
    price: Number,
    description: String,
    Category: String,
    image: String,
    rating: {                            /* using curlybrace for rating bcz in db rating is created 
                                          as an object containing rate and count*/
        rate: Number,
        count: Number
    }

})

const wishlist = mongoose.model('wishlist',{


id: Number,
title: String,                                // schema is from mongodb
price: Number,
description: String,
image: String,
})

// export 

module.exports={
    Product,wishlist
}
