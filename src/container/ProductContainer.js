import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import {loadData, addQuantity} from '../redux/userAction'
import Products from '../components/Products'
import Paymentgateway from '../components/Paymentgateway'
import Shoppingcart from '../components/Shoppingcart'

function ProductContainer({loadData,myproducts,addQuantity,logout}) {

 useEffect(() => {
     loadData()
 })

 console.log(myproducts)
  
 const addQ = (index) => {
    addQuantity(myproducts,index)
    console.log(index)
    
    }

        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                          <Shoppingcart logout={logout}/>  
                          <Products myproducts = {myproducts} addQ={addQ}/>
                        </Route>
                        <Route path="/payment" exact>
                            <Paymentgateway myproducts = {myproducts}/>
                        </Route>
                    </Switch>
                </Router>
                
                
            </div>
        )
    }


const mapStateToProps = (state) => {
    return {
        myproducts:state.myproducts,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData:() => dispatch(loadData()),
        addQuantity:(myproducts,index) => dispatch(addQuantity(myproducts,index))
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (ProductContainer)
