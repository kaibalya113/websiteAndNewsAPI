import React, {Component} from "react";
import './NavStyle.css';
import {Link} from 'react-router-dom';


export default class Nav extends Component{
    
    
    render(){
        return(
            <div className='NavStyle'>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='News'>News</Link></li>
                    <li> <Link to='Contact'>Contact</Link></li>
                    <li> <Link to='About'>About</Link></li>
                    
                </ul>
            </div>
        )
    }
}