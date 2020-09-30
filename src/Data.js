export const userinfo = {
    username:"",
    password:""
}

const productinfo = [
    {
        productid:1,
        productName:"TV",
        price:10000,
        count:0
    },
    {
        productid:2,
        productName:"Fridge",
        price:15000,
        count:0
    },
    {
        productid:3,
        productName:"Washing machine",
        price:12000,
        count:0
    },
    {
        productid:4,
        productName:"Bike",
        price:100000,
        count:0
    }
 
]

export function products() {
    return new Promise((resolve) => {
        resolve(productinfo)
    })
}

