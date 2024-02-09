import React from 'react';
import Print from '../components/Print';

const Signup = (props) => {

    let [email, setEmail] = React.useState('');
    let [emailError, setEmailError] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [passwordError, setPasswordError] = React.useState('');

    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const onPasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    const onSave = ()=>{
        if(!email){
            setEmailError('Email is mandatory');
        }else{
            setEmailError(false);
        }

        if(!password){
            setPasswordError('Password is mandatory');
        }else{
            setPasswordError(false);
        }
    }

    return (    
        <div className='signup m-t-2'>
            <div className="row justify-content-md-center">
                <div className='col-lg-6'>
                    <div class="h-100 p-5 text-bg-dark rounded-3">
                        <Print />
                        <h2>SignIn</h2>
                        <div className='email'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input onKeyUp={onEmailChange} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                {emailError && <small className='danger'>{emailError}</small>}
                            </div>
                        </div>
                        <div className='password'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input onKeyUp={onPasswordChange} type="password" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                {passwordError && <small className='danger'>{passwordError}</small>}
                            </div>
                        </div>
                        <button onClick={onSave} class="btn btn-outline-light" id="save-btn" type="button">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;