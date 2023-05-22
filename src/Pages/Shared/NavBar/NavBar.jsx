import React, { useContext } from 'react';
import logo from '../../../assets/logo2.jpg'
import pImage from '../../../assets/user-2.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {

  const {user,logOut} = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
}
 





    return (
        <div>
            <div>
              <h1 className='text-center text-5xl text-gray-300 font-bold'> <a className="btn btn-ghost normal-case text-6xl font-extrabold">Rhythmic Melody Studio</a></h1>
              </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Home</a></li>
                        <li><a href="/alltoys"> All Toys</a></li>
                        <li><a href="/mytoys"> My Toys</a></li>
                        <li><a href=""> Add a Toy</a></li>
                        <li><a href=""> Blog</a></li>
                         */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to="/addtoy">Add a Toy</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/login">Login</Link></li>

                        
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
             
                    <img className="w-20 h-20 rounded-full" src={logo} alt="" />
                           <a className="btn btn-ghost normal-case text-xl">Rhythmic Melody Studio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                  


                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to="/addtoy">Add a Toy</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/login">Login</Link></li>
                       
                    </ul>
                </div>
      
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {/* <div className="w-10 rounded-full flex-grow">
                            <img src={pImage}/>
                        </div> */}
                    </label>
                    {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul> */}
                </div>
                <div className="navbar-end">


            { user&&
                  <img   className="w-10 h-10 rounded-full" src={pImage}/>
            }
              
                 {user?
                    //  <a className="btn">Log in</a>
                     <button onClick={handleLogOut}  className="btn btn-active" href="/login">Logout</button>:
                    <Link to="/login">
                     <button className="btn btn-active"  href="/login">Login</button>
                     
                     </Link>
                 }
                </div>
            </div>





            {/* background-color: #B68C5A; */}



            {/* 
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}








        </div>

    );
};

export default NavBar;