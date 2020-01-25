import React, {Component} from 'react'
import Products from '../Products/Products'

class Dashboard extends Component {
    render(){
        console.log(this.props.invt)
        const inventory = this.props.invt
        return(
            <div>
                <Products mapped={inventory} deletedFun={this.props.deleteFun}/>
                
            </div>
        )
    }
}

export default Dashboard