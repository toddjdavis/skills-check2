import React, {Component} from 'react'

class Products extends Component {
    render(){
        const inventory = this.props.mapped.map((el)=>{
            const {id} = el
            return(
                <div className='products'>
                    <img className='inventoryPic' src={el.imageURL} />
                    <h4>Name: {el.name}</h4>
                    <h4>Price: {el.price}</h4>
                    <button>Update</button>
                    {/* <button onClick={this.props.deletedFun()}>Delete</button> */}
                </div>
            )
        })
        console.log(inventory)
        return(
            <div className='holder'>
                {inventory}
            </div>
        )
    }
}

export default Products