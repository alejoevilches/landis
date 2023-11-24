import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { IconShoppingCartPlus, IconHeartPlus, IconHeartMinus, IconShoppingCartMinus } from "@tabler/icons-react";
import "./Products.css";
import { useContext } from "react";
import { FavsContext } from "../context/favs";
import { CartContext } from "../context/cart";

export function Products(){
    const location=useLocation();
    const decodedPath=decodeURIComponent(location.pathname);
    const cat=decodedPath.split("/")[2]
    const { data } = useFetch(`https://fakestoreapi.com/products/${location.pathname}`);
    const {addToFavs, isFavorite, removeFromFavs}=useContext(FavsContext);
    const {addToCart, isInCart, removeFromCart}=useContext(CartContext);
    return(
        <>
            <Navbar />
            <main>
                <h1 className="productsTitle">Welcome to the {cat} section</h1>
                <ul>
                    {data && data.map((prod)=>{
                        const isProductInFavs=isFavorite(prod);
                        const isProductInCart=isInCart(prod);
                        return(
                            <li key={prod.id} className="product">
                                <img src={prod.image} alt={prod.title} />
                                <div className="productInfo">
                                    <h3>{prod.title}</h3>
                                    <p>${prod.price.toFixed(2)}</p>
                                    <section className="buttons">
                                        <div className="favButtons" onClick={()=>isProductInFavs ? removeFromFavs(prod) : addToFavs(prod)}>
                                            {isProductInFavs ? <IconHeartMinus /> : <IconHeartPlus />} 
                                        </div>
                                        <div className="cartButtons" onClick={() => isProductInCart ? removeFromCart(prod) : addToCart(prod)}>
                                          {isProductInCart ? <IconShoppingCartMinus /> : <IconShoppingCartPlus />} 
                                        </div>
                                    </section>                                
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}