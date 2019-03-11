import React from 'react';
import {Link,NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
//    console.log(props);
//    setTimeout(()=>{
//                props.history.push('/About');
//                },2000)
    return(
        <nav className='nav-wrapper blue darken-4'>
            <Link to='/' className='brand-logo left'>MERN Masters</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><NavLink to='/Contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}
export default withRouter (Navbar);

// navbar props are empty
// navbar route component ka part nhi h usse koi properties nhi milti but baki 3 pages ko milti hai like history.push
// withRouter supercharged compnent and ye higher order component bn jata hai to receive props of router
