import "./Navbar.css";
import { IconHeart, IconShoppingCart } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavsContext } from "../context/favs";
import { FavsModal } from "./FavsModal";
import { CartModal } from "./CartModal";
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const [active, setActive]=useState(null);
    const [query, setQuery]=useState("");
    const navigate=useNavigate();
    const closeModal=()=>{
        setActive(null);
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        navigate(`/search/${query}`)
    }
    return (
        <nav>
            <Link to={"/"}>
                <img src="public/img/logo.jpeg" alt="Landis Store logo" />
                <img src="./public/img/herobackground.jpg" alt="" />
            </Link>
            <form onSubmit={handleSearch}>
                <input name="q" type="text" placeholder="Search" value={query} onChange={(e)=>setQuery(e.target.value)} />
            </form>
            <section className="icons">
                <IconHeart color="white" onClick={()=>setActive("favs")}/>
                <IconShoppingCart color="white" onClick={()=>setActive("cart")}/>
            </section>
            {active=="favs" ? <FavsModal closeModal={closeModal} /> : null}
            {active=="cart" ? <CartModal closeModal={closeModal} /> : null}
        </nav>
    )
}