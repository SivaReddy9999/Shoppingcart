import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

function Shoppingcart(props) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <Link to="/payment"><i className="fas fa-shopping-cart"></i></Link>
           
            <h1>---------</h1>
            <Button onClick={() => props.logout()} variant="contained" color="primary">
                Logout
            </Button>
        </div>
    )
}

export default Shoppingcart
