import React, {Component} from 'react'
import Routes from './Routes'
import './App.css';
// import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
// import Dashboard from './Components/Dashboard/Dashboard'
import axios from 'axios';
import { withRouter} from 'react-router-dom'


class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: [],
      index: null
      // imageURL: '',
      // productName: '',
      // price: null
    }
      this.createProduct=this.createProduct.bind(this)
      this.deleteProduct=this.deleteProduct.bind(this)
      this.editProduct=this.editProduct.bind(this)
   }


createProduct(imageURL, productName, price){
    // const {imageURL, productName, price} = this.state
    axios.post('/api/products', {name: productName, imageURL: imageURL, price: price})
    .then(res => {
        this.setState({
           inventory: res.data
        })
    }).catch(err => console.log(err))
}
editProduct(imageURL, productName, price, id){
  console.log({name: productName, imageURL: imageURL, price: price})
  axios.put(`/api/products/${id}`, {name: productName, imageURL: imageURL, price: price}).then(res => {
    console.log(res.data)
    this.setState({
       inventory: res.data
    })
    this.props.history.push('/products')
    // this.props.history.push()
  }).catch(err => console.log(err))
}
  deleteProduct = id => {
    // console.log(id)
    axios.delete(`/api/products/${id}`).then(res => {
      this.setState({inventory: res.data})
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    axios.get('/api/products')
    .then(res => {this.setState({inventory: res.data})})
    .catch(err => console.log(err))
  }
  render(){
    console.log(this.state.inventory)
    return (
      
        <div className="App">
          <Header />
          <div className='everything'>
            {/* <Dashboard invt={this.state.inventory} deleteFun={this.deleteProduct}/>
            <Form createProductFun={this.createProduct} clearFun={this.clear} handlePriceFun={this.handlePrice} handleImageFun={this.handleImage} handleNameFun={this.handleName}  image={this.state.imageURL}  price={this.state.price}  /> */}
            <Routes invt={this.state.inventory} deleteFun={this.deleteProduct} createProductFun={this.createProduct} image={this.state.imageURL}  price={this.state.price} name={this.state.name} editFun={this.editProduct}/>
          </div>
            
        </div>
      
    );
  }
}

export default withRouter(App);
