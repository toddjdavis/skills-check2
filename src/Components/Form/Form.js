import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Form extends Component {
    constructor(){
        super()
        this.state={
            image: '',
            name: '',
            price: 0,
            id: null,
            editing : false
        }
    //     this.handleImageFun=this.handleImageFun.bind(this)
    //   this.handleNameFun=this.handleNameFun.bind(this)
    //   this.handlePriceFun=this.handlePriceFun.bind(this)
    //   this.clearFun=this.clearFun.bind(this)
    //   this.createProductFun=this.createProductFun.bind(this)
    
    }
    componentDidMount(){
      if(this.props.match.params.id){
        axios.get(`/api/product/${this.props.match.params.id}`)
        .then(res => {
          console.log(res.data)
          this.setState({
          id: res.data.id,
          image: res.data.imageurl,
          price: res.data.price,
          name: res.data.name,
          editing: true
        })
      }
        )
      }
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
      console.log(this.props)
        return(
          <div className='creater'>
          <img className='new' src={this.state.image}/>
                <input placeholder='Image URL' onChange={e => this.handleImage(e.target.value)} value={this.state.image}/>
                <input  placeholder='Product Name' onChange={e => this.handleName(e.target.value)} value={this.state.name}/>
                <input  placeholder='Price' type='number' onChange={e => this.handlePrice(e.target.value)} value ={this.state.price}/>
                <div className='space'>
                  <button className='addStuff' onClick={this.clear}>Cancel</button>
                  {this.state.editing ? (
                      <button onClick={() => this.props.editFun(this.state.image, this.state.name, this.state.price, this.state.id)}>Update</button>
                    ):(
                      <button className='addStuff' onClick={() => {
                        this.props.createProductFun(this.state.image, this.state.name, this.state.price)
                        this.clear()
                        
                        
                      }} >Add to Inventory</button>
                      )}
                </div>
                
            </div>
        )
    }
}

export default withRouter(Form)