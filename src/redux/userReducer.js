import {ADD} from './userType'
import {PRODUCTS} from './userType'


const initialState = {
    myproducts: []

}

const userReducer = (state=initialState, action) => {
       switch(action.type) {
           case ADD: return{
               ...state,
               myproducts: action.payload
           }
           case PRODUCTS: return{
            ...state,
            myproducts: action.payload
        }
  
           default: return state

        }
     }


export default userReducer