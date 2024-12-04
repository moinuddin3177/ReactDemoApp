import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { clearCart } from "../../../Redux/cartSlice";

const Cart = () => {

    // ! Make sure that you use useSelector subscribe to exact slice from the store rather than complete store
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleclearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4 ">
            <div className="flex  justify-between  mx-20 px-20" >
            <h1 className="text-2xl font-bold">Cart</h1>
            <button 
                className="bg-black text-white p-2 m-2 rounded-lg shadow-lg"
                onClick={handleclearCart}
            >
                Clear Cart
            </button>
            </div>
           { cartItems  == 0 ? <div><h3>Cart is Empty, please add items to Cart</h3></div> : ""}
            <div className="w-6/12 m-auto">
                <RestaurantCategoryItems items = {cartItems}/>
            </div>
        </div>
    )
}
export default Cart;