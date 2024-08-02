import { useSelector } from 'react-redux'
import { CartCard } from '../components/CartCard';

export const Cart = () => {

    const cartList = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);

    return (
        <main>
            <section className='cart'>
                <h1>Cart Items: {cartList.length} / ${total}</h1>
                { cartList.map(product => (
                    <CartCard key={product.id} product={product} />
                )) }
            </section>
        </main>
    )
}