/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const FavsContext=createContext();

export function FavsProvider({children}){
    const [favs, setFavs]=useState([]);
    
    const addToFavs=(prod)=>{
            setFavs(prevState=>[
                ...prevState,
                {
                    ...prod
                }
            ])
        }

    const removeFromFavs=(prod)=>{
        setFavs((prevState)=>{
            const index=favs.findIndex(p=>p.id==prod.id);
            if (index!=-1){
                const newFavs=[...prevState];
                newFavs.splice(index, 1);
                return newFavs
            }
        })
    }

        const isFavorite = (prod) => (favs ? favs.some((p) => p.id === prod.id) : false);

        return (
            <FavsContext.Provider value={{favs, addToFavs, removeFromFavs, isFavorite}}>
                {children}
            </FavsContext.Provider>
        )
}


