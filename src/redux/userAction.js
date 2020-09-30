import {PRODUCTS} from './userType'
import {ADD} from './userType'
import {products} from '../Data' 

export const fetchproducts = (res) => {

    return{
        type: PRODUCTS,
        payload:res
         }
}

export const addItem = (newproduct) => {

    return{
        type: ADD,
        payload:newproduct
         }
}





export function loadData() {
    return(dispatch) => {
        var product =  products()
        product.then(res => {
            dispatch(fetchproducts(res))
        })
      
        
    }
  
}

export function addQuantity(myproducts,index) {
    return(dispatch) => {
      const newproduct = [...myproducts]
      newproduct[index].count = 1
      console.log(newproduct)
      dispatch(addItem(newproduct))
    }
}






