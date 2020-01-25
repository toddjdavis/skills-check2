module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_products().then(products => {
            res.status(200).send(products)
        }).catch(err => res.status(500).send(err))
    },
    createProduct: (req,res) => {
        const db = req.app.get('db')
        const {name, imageURL, price} = req.body
        db.create_product(name, imageURL, price).then(product => {
         res.status(200).send(product)   
        }).catch(err => res.status(500).send(err))
    },
    updateProduct: (req,res) => {
        const db = req.app.get('db')
        const {name, imageURL, price} = req.body
        const {id} = req.params
        db.update_product({name: name, imageURL: imageURL, price: price, id: +id }).then(product => {
            res.status(200).send(product)
        }).catch(err => res.status(500).send(err))
    },
    sellProduct: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then(product => {
            res.status(200).send('Product Deleted') 
        }).catch(err => res.status(500).send(err))
    }
}