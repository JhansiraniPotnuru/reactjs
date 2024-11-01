import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './store'; // Make sure to import addToCart

function Veg() {
    const dispatch = useDispatch();
    const vegProducts = useSelector(state => state.products.veg);
    
    const items = vegProducts.map((product, index) => (
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        </li>
    ));
    
    return (
        <>
            <h2>Veg Items</h2>
            <ul>{items}</ul>
        </>
    );
}

export default Veg;
