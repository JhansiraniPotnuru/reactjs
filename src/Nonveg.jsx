import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './store'; // Make sure to import addToCart

function Nonveg() {
    const dispatch = useDispatch();
    const nonvegProducts = useSelector(state => state.products.nonveg);
    const items = nonvegProducts.map((product, index) => (
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        </li>
    ));

    return (
        <>
            <h2>NonVeg Items</h2>
            <ul>{items}</ul>
        </>
    );
}

export default Nonveg;
