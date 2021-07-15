import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import "../css/login.css"
import { Context } from '../store/appContext'

const Login = props => {
    const { store, actions} = useContext(Context);
    
    return (
        <>
        {store.currentUser !== "" ? (
            <>

            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Easyt-App</h1>
                    </div>
                
                    <form onSubmit={e => actions.login(e, props.history)}>
                        <div className="control-group">
                            <input type="text" className="form-control" placeholder="Usuario" id="username" name="username" aria-label="default input example"
                            value={store.username}
                            onChange={actions.handleChange}
                            />
                            <label className="login-field-icon fui-user" for="login-name"></label>
                        </div>

                        <div className="control-group">
                            <input className="form-control" type="password"  id="email" name="password" placeholder="Password" 
                            value={store.password}
                            onChange={actions.handleChange}

                            />
                            <label className="login-field-icon fui-lock" for="login-pass"></label>
                        </div>

                        <button className="btn btn-primary btn-large btn-block" href="">Login</button>
                        <Link className="login-link" type="submit" to="/signup">Sign Up</Link>
                    </form>
                </div>
            </div>
            </>
        ) : null}

</>
)
}

{/* 
                    <Form className="login-form" onSubmit={e => actions.login(e, props.history)}>
                        <Form.Group controlId="formEmail" className="control-group">
                            <Form.Label className="login-field-icon fui-user" for="login-name"></Form.Label>
                            <Form.Control type="email" className="login-field" value={store.username} onChange={actions.handleChange} placeholder="Usuario" id="username" />
                        </Form.Group> */}
export default Login;