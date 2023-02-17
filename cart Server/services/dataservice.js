
//  dataservice is the logic
// create a file for database here that is db.js


const db=require('./db')

// get all the products from db.js

const getProducts=()=>{
 return  db.Product.find().then(
 
  (result)=>
    {
        if(result)
        {
            return{ 
                status:true,
                statusCode:200,
                Products:result
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'No products Found'
            }
        }
    })

    }

    const addtowishlist=(id,title,price,description,image)=>{

        // data added to mongodb 

        return db.wishlist.findOne({id}).then(
            (result)=>
            {
                if(result)
                {
                    return{
                        status:true,
                        statusCode:200,
                        message:"product already exist"
                    }
                }

                else{
                    const newProduct=new db.wishlist({id,title,price,description,image})
                    newProduct.save()
                    return{
                        status:false,
                        statusCode:400,
                        message:"Product Added to Wishlist"
                    }
                }
            })
        }

        const getWishlist =()=>{
            return db.wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            status:true,
                            statusCode:200,
                            products:result
                        }
                    }
                    else{
                        return{
                            status:false,
                            statusCode:404,
                            message:'Your wishlist is Empty'
                        }
                    }
                }
            )
        }

        deletewish=(id)=>{
            return db.wishlist.deleteOne({id}).then(
                (result)=>{
                    if(result){
                    // return{
                    //     status:true,
                    //     statusCode:200,
                    //     products:result,
                    //     message:"product removed"
                    // }
                    return db.wishlist.find().then(
                        (result)=>{
                            if(result){
                                return{
                                    status:true,
                                    statusCode:200,
                                    wishlist:result,
                                    message:'product removed sucessfully'
                                }
                            }
                            else{
                                return{
                                    status:true,
                                    statusCode:404,
                                    message:"product not found"
                                }
                            }
                        }
                    )
                }
                 else{
                     return{
                         status:false,
                         statusCode:404,
                         message:"your wishlist is empty"
                     }
                }
            }
            )
           
           }

    


module.exports={
    getProducts,
    addtowishlist,
    getWishlist,
    deletewish
}