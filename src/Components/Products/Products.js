import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Products extends Component {
    updateSomething = (id) => {
        this.props.history.push(`/edit/${id}`)
    }
    render(){
        const inventory = this.props.mapped
        const {name, price, imageURL, id} =this.props.mapped
        console.log(this.props)
            return(
                <div className='products'>
                    <img className='inventoryPic' src={imageURL} />
                    <h4>Name: {name}</h4>
                    <h4>Price: {price}</h4>
                    
                        <button onClick={() => this.updateSomething(id)}>Update</button>
                    
                    <button onClick={() => this.props.deletedFun(id)}>Delete</button>
                </div>
            )
        
        console.log(inventory)
        return(
            <div className='holder'>
                {inventory}
            </div>
        )
    }
}

export default withRouter(Products)