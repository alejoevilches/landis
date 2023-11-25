/* eslint-disable react/no-unescaped-entities */
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Hero.css";

function HeroError(){
    return (
        <>
            <h1>We're sorry!</h1>
            <h2>Our store is currently unavailable. Please try in a few minutes</h2>
        </>
    )
}

export function Hero(){
    const {data, loading}=useFetch('https://fakestoreapi.com/products/categories');
    return (
        <section className="hero">
            {loading && <h1>Loading</h1>}
            {data &&  
            <section className="heroMessage">
                <h1>Welcome to our online store!</h1>
                <h2>Please select a category:</h2>
                <ul className="buttonsContainer">
                    {data.map(cat => (
                      <button key={cat}>
                        <Link to={`/category/${cat}`}>{cat}</Link>
                      </button>
                    ))}
                </ul>
            </section>}
        </section>
    )
}

