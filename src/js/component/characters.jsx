import React, {useState,useContext, useEffect} from "react";
import { Context } from "../store/appContext";


const Characters = () => {

    const {store, actions} =useContext(Context);
    function addFavorite(fav){
        actions.addFavorite(fav)
    }
    return (
    <div>
        <h1>siu</h1>
    </div>
    )
    
};

export default Characters;