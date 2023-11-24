import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { FavsContext } from "../context/favs";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import { IconHeartMinus, IconHeartPlus, IconShoppingCartMinus, IconShoppingCartPlus} from "@tabler/icons-react";
import { Navbar } from "./Navbar";

export function SearchResults(){
    const location=useLocation();
    const decodedPath=decodeURIComponent(location.pathname);
    const q=decodedPath.split("/")[2]
    const {data}=useFetch('https://fakestoreapi.com/products');
    const filteredData=data?.filter(p=>p.title.toLowerCase().includes(q));
    const {isFavorite, removeFromFavs, addToFavs}=useContext(FavsContext);
    const {isInCart, removeFromCart, addToCart}=useContext(CartContext);
    return(
        <>
            <Navbar />
            <main>
                <h1 className="productsTitle">Search results:</h1>
                <ul>
                    {filteredData && filteredData.map((prod)=>{
                        const isProductInFavs=isFavorite(prod);
                        const isProductInCart=isInCart(prod);
                        return(
                            <li key={prod.id} className="product">
                                <img src={prod.image} alt={prod.title} />
                                <h3>{prod.title}</h3>
                                <p>${prod.price}</p>
                                <section className="buttons">
                                    <div className="favButtons" onClick={()=>isProductInFavs ? removeFromFavs(prod) : addToFavs(prod)}>
                                        {isProductInFavs ? <IconHeartMinus /> : <IconHeartPlus />} 
                                    </div>
                                    <div className="cartButtons" onClick={() => isProductInCart ? removeFromCart(prod) : addToCart(prod)}>
                                      {isProductInCart ? <IconShoppingCartMinus /> : <IconShoppingCartPlus />} 
                                    </div>
                                </section>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}