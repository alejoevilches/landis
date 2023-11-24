import { IconLetterX } from "@tabler/icons-react";
import { useContext } from "react";
import {CartContext} from "../context/cart"


// eslint-disable-next-line react/prop-types
export function CartModal({closeModal}){
    const {cart, addToCart, removeFromCart}=useContext(CartContext);
    const handleCloseModal=()=>{
        closeModal();
    }
    
    const handlePlusButton=(prod)=>{
        addToCart(prod);
    }

    const total=cart.reduce((acc, cart)=>acc+(cart.price*cart.qty),0).toFixed(2);


    return(
        <section className="modal">
            <div className="modalHeader">
                <h1>Cart</h1>
                <IconLetterX color="white" onClick={handleCloseModal} />
            </div>
            <div className="separationBar"></div>
            <ul className="favsContainer">
                {cart.map(el=>{
                    return(
                        <li key={el.id} className="modalItem">
                            <div className="itemInfo">
                                <img src={el.image} alt={el.title} />
                                <h3 className="modalItemTitle">{el.title}</h3>
                            </div>
                            <div className="qtyItems">
                                <p onClick={()=>handlePlusButton(el)}>+</p>
                                <p>{el.qty}</p>
                                <p onClick={()=>removeFromCart(el)}>--</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {total>0 && 
            <>
                <div className="separationBar"></div>
                <h2 className="totalSection">Total: <span>${total}</span></h2>
            </>
            }
        </section>
    )
}