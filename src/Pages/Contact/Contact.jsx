import React from 'react';
import contact from '../../assets/contact-us-banner.jpg'
import contact2 from '../../assets/R.jpeg'
import { Link } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';


const Contact = () => {

    UseTitle('Contact')





    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password,);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }



    const handleGoogleSignIn = event => {
        event.preventDefault();
          signInWithPopup(auth,googleProvider)
          .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUsers(loggedInUser)
            Navigate(from,{replace:true})
          })
          .catch(error =>{
            console.log('error',error.message);
          })
      }




    return (
        <div>
            <div className='mt-5'>
                <h2 className='text-5xl text-center text-gray-300 font-bold'>Contact Us</h2>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={contact2} alt="Album" /></figure>
                <div className="card-body">
            



                    <div>
                    <div className="hero min-h-screen">
                            <div className="hero-content flex-col ">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-3xl font-bold">Connect With Us</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <form onSubmit={handleLogIn}>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control mt-6">

                                                <input className="btn btn-base-100" type="submit" value="Login" />
                                            </div>

                                            <button onClick={handleGoogleSignIn} className="btn btn-outline mt-5">Google SignIn</button>
                                        </form>
                                        <p>Don't Have an account <Link className='text-yellow-600' to="/register">Register</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>






{/* <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>
</div> */}
</div>


                
                </div>
            </div>
        </div>
    );
};

export default Contact;