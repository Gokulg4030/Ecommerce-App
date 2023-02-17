
// import express 
const express = require('express');



// connecting frontend and backend = angular and node     (for this install cors)
 const cors=require('cors')

 const dataservice=require('./services/dataservice')    // linking dataservice and index

 const app = express();     // creating an application using express

 // to parse json request using app.use from dataservice.js  (parse is used to convert json file)

 app.use(express.json());


app.listen(3000,()=>{                           // port
    console.log('listening on port 3000')
})

app.use(cors({
    origin:'http://localhost:4200'       //(connecting frontend and backend)              // path of frontend  (integration)
}))


// connecting with mongodb     (install mongoose)


// api to get all products

app.get('/all-products',(req,res)=>{
    dataservice.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addtowishlist',(req,res)=>{
    dataservice.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getwishlist',(req,res)=>{
    dataservice.getWishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to delete wishlist product

app.delete('/deletewish/:id',(req,res)=>
{
    dataservice.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
