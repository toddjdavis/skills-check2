import React, {Component} from 'react'
import Products from '../Products/Products'

class Dashboard extends Component {
    render(){
        console.log(this.props.invt)
        const inventory = this.props.invt.map((el) => {
            return(
                <Products mapped={el} deletedFun={this.props.deleteFun}/>
            )
        })
        return(
            <div>
                {inventory}
            </div>
        )
    }
}

export default Dashboard