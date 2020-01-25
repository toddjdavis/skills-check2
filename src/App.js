import React, {Component} from 'react'
import './App.css';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import axios from 'axios';
import {HashRouter} from 'react-router-dom'


class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: [],
      imageURL: '',
      productName: '',
      price: null
    }
      this.createProduct=this.createProduct.bind(this)
      // this.deleteProduct=this.deleteProduct.bind(this)
   }


createProduct(){
    const {imageURL, productName, price} = this.state
    axios.post('/api/products', {name: productName, imageURL: imageURL, price: price})
    .then(res => {
        this.setState({
          imageURL: '', productName: '', price: 0, inventory: res.data
        })
    }).catch(err => console.log(err))
}
  // deleteProduct = id => {
  //   axios.delete(`/api/products/${id}`).then(res => {
  //     this.setState({inventory: res.data})
  //   })
  //   .catch(err => console.log(err))
  // }

  componentDidMount(){
    axios.get('/api/products')
    .then(res => {this.setState({inventory: res.data})})
    .catch(err => console.log(err))
  }
  render(){
    console.log(this.state.inventory)
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <div className='everything'>
            <Dashboard invt={this.state.inventory} deleteFun={this.deleteProduct}/>
            <Form createProductFun={this.createProduct} clearFun={this.clear} handlePriceFun={this.handlePrice} handleImageFun={this.handleImage} handleNameFun={this.handleName}  image={this.state.imageURL} nameApp={this.state.name} price={this.state.price}  />
          </div>
            
        </div>
      </HashRouter>
    );
  }
}

export default App;
