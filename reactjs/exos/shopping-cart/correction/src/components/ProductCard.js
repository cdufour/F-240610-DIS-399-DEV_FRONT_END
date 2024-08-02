import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProductCard.css'
import { add, remove } from '../store/cartSlice'

export const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartState.cartList);
    const [isInCart, setIsInCart] = useState(false);

    const {id, name, price, image} = product;

    useEffect(() => {
        const productInCart = cartList.find(product => product.id === id);

        if (productInCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }

    }, [cartList, id])

    return (
        <div className="productCard">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <div className="action">
                <p>${price}</p>
                { isInCart
                    ? (<button onClick={() => dispatch(remove(product))} className="remove">Remove</button>)
                    : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)
                }
            </div>
        </div>
    )
}