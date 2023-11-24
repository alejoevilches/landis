import "./Modal.css";
import { IconLetterX, IconHeartMinus } from "@tabler/icons-react";
import {FavsContext} from "../context/favs"
import { useContext } from "react";

export function FavsModal({closeModal}){
    const {favs, removeFromFavs}=useContext(FavsContext);
    const handleCloseModal=()=>{
        closeModal();
    }
    return(
        <section className="modal">
            <div className="modalHeader">
                <h1>Favs</h1>
                <IconLetterX color="white" onClick={handleCloseModal} />
            </div>
            <div className="separationBar"></div>
            <ul className="modalContainer">
                {favs.map(el=>{
                    return(
                        <li key={el.id} className="modalItem">
                            <div className="itemInfo">
                                <img src={el.image} alt={el.title} />
                                <h3 className="modalItemTitle">{el.title}</h3>
                            </div>
                            <IconHeartMinus onClick={()=>removeFromFavs(el)}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}