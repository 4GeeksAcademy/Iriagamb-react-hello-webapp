import React from "react";
import Characters from "../component/characters";
import "../../styles/home.css";

export const Home = () => {
	return(
	<div className="stars container-fliud">
            <div className="container">
                <div className="lista shadow-lg p-3 rounded-3">
                    <h1 className="text-center pt-5 mt-5 yellow">Characters</h1>
                    	<div className="d-flex overflow-auto">
                        	<Characters />
						</div>	
				</div>
			</div>
    </div>
					);
};
