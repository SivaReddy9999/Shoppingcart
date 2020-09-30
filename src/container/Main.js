import React, { Component } from 'react'
import Loginform from '../container/Loginform'
import ProductContainer from '../container/ProductContainer'

class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false
        }
    }

    changelogin = () => {
        this.setState({
            isLoggedIn:true
        })
        
    }

    logout = () => {
        this.setState({
            isLoggedIn:false
        })
    }
    
    render() {
        return (
            <div>
                <Display logout= {this.logout} changelogin={this.changelogin} isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}


export default Main

function Display(props){
console.log(props)
 if(props.isLoggedIn) {
     return <ProductContainer logout={props.logout}/>
 } else {
    return <Loginform changelogin={props.changelogin}/>
 }
     

}