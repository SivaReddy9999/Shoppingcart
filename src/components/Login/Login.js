import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));

function Login(props) {
    const classes = useStyles();
    console.log(props)  
    return (
      <div>  
      <h1>Shopping Cart Login</h1>    
      <form className={classes.root} >
            
            <TextField id="standard-basic" name="username" value={props.userdata.username} onChange={props.inputChange} label="Please enter your user name" /><br/>
            <TextField id="standard-basic" name="password" value={props.userdata.password} onChange={props.inputChange} label="Please enter your password" /><br/>
            <Button onClick={props.changelogin} variant="contained" color="primary">
                Login
            </Button>
      </form>
      </div>
    )
}

export default Login
