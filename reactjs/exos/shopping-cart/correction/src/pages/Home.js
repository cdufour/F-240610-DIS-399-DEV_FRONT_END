import React from 'react'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export const Home = () => {

   
    return (
        <main>
            <section className='products'>
            { products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            </section>
        </main>
    )
}