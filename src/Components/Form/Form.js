import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state={
            image: '',
            name: '',
            price: null
        }
    //     this.handleImageFun=this.handleImageFun.bind(this)
    //   this.handleNameFun=this.handleNameFun.bind(this)
    //   this.handlePriceFun=this.handlePriceFun.bind(this)
    //   this.clearFun=this.clearFun.bind(this)
    //   this.createProductFun=this.createProductFun.bind(this)
    
    }
    handleImage = value => {
        this.setState({image: value})
      }
      handleName = value => {
        this.setState({name: value})
      }
      handlePrice(value){
        this.setState({price: value})
      }
      clear(){
          // document.getElementById('inputs').reset()
        this.setState({image: '', name: '', price: 0})
      }
    
    render(){
        return(
          <div className='creater'>
          <img className='new' src={this.state.image}/>
                <input placeholder='Image URL' onChange={e => this.handleImage(e.target.value)} value={this.state.image}/>
                <input  placeholder='Product Name' onChange={e => this.handleName(e.target.value)} value={this.state.name}/>
                <input  placeholder='Price' type='number' onChange={e => this.handlePrice(e.target.value)} value ={this.state.price}/>
                <div className='space'>
                  <button className='addStuff' onClick={this.clear}>Cancel</button>
                  <button className='addStuff' onClick={this.props.createProductFun} >Add to Inventory</button>
                </div>
                
            </div>
        )
    }
}

export default Form