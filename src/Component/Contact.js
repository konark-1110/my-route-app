import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

const Contact = (props) => {
//    console.log(props);
//    setTimeout(()=>{
//                props.history.push('/about');
//                }, 2000);
    return(
        <div className='center'>
            <h4 className='container center'>Contact page</h4>
            <p> This is our Contact page </p>
        </div>
    )
}

export default ColorChanger(Contact);
