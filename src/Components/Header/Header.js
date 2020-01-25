import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <header>
                <Link to='/create'>Add Product </Link>
                <Link to='/products'>products</Link>
            </header>
        )
    }
}

export default Header