import { useState, useEffect, useCallback } from 'react'

const ProductList = () => {

    // json-server -p 3500 db.json
    //const api = 'http://localhost:3500/products';

    const [products, setProducts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [url, setUrl] = useState('http://localhost:3500/products');

    /*
    Approche n°3 - useCallback
    */
    const fetchProducts = useCallback(async () => {
        const res = await fetch(url);
        const products = await res.json();
        setProducts(products);
    }, [url])

    useEffect(() => {
        fetchProducts();
        console.log('-');
    }, [fetchProducts])


    /* 
    Approche n°2
    Problème: boucle infinie
    */

    // const fetchProducts = async () => {
    //     const res = await fetch(url);
    //     const products = await res.json();
    //     setProducts(products);
    // }

    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts])

    /* 
        Approche n°1
    */
    // useEffect(() => {    
    //     console.log('-');
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(products => {
    //             setProducts(products);
    //         })
    // }, [url])

    useEffect(() => {
        //console.log(counter);
    }, [counter])

    return (
        <section>
            <div className='filter'>
                <button onClick={() => setCounter(counter + 1)}>{counter}</button>
                <button onClick={() => setUrl('http://localhost:3500/products')}>Tous les produits</button>
                <button onClick={() => setUrl('http://localhost:3500/products?in_stock=true')}>Produits disponibles</button>
            </div>

            { products.map(product => (
                <div className='card' key={product.id}>
                    <p className='id'>{product.id}</p>
                    <p className='name'>{product.name}</p>
                    <p className='info'>
                        <span>${product.price}</span>
                        <span className={product.in_stock ? 'instock' : 'unavailable'}>
                            {product.in_stock ? 'En stock' : 'Non disponible'}
                        </span>
                    </p>
                </div>
            )) }
        </section>
    )
}

export default ProductList