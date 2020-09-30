import React, { Component } from 'react'
import Login from '../components/Login/Login'
import {userinfo} from '../Data'


class Loginform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userdata:{...userinfo},
             
    }}
    
    onChange = (e) => {
        const {target} = e
        this.setState({
            userdata:{
                ...this.state.userdata,
                [target.name]:target.value
            }
        })
    }

 

    onSubmit = (e) => {
       this.setState({
           ...this.state,
           loggedin:true
       })
       console.log(this.state.userdata)
    }
    render() {
        console.log(this.props)
        const {changelogin} = this.props
        return (
            <div>
                <Login {...this.props} userdata={this.state.userdata} inputChange={this.onChange} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default Loginform
