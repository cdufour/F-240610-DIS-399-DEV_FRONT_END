import { useState, useEffect } from 'react'

const ProductList = () => {

    // json-server -p 3500 db.json
    const api = 'http://localhost:3500/products';

    useEffect(() => {
        
       fetch(api)
        .then(res => res.json())
        .then(products => {
            console.log(products)
        })

    }, [])

    return (
        <div>ProductList</div>
    )
}

export default ProductList