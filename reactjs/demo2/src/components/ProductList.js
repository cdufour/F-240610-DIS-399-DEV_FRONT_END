import { useState, useEffect } from 'react'

const ProductList = () => {

    useEffect(() => {
        console.log('effect')
    }, [])

    return (
        <div>ProductList</div>
    )
}

export default ProductList