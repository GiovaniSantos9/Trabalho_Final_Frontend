/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.css";

function Header({ onSearch }) {
    const [ProcurarReceita, setProcurarReceita] = useState("");

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setProcurarReceita(value);
        onSearch(value);  
    };

    return (
        <header className="header">
            <div className="middle">
                <div className="barra-de-pesquisa">
                    <i className="fas fa-search"></i>
                    <input
                        placeholder="Search Recipes"
                        className="input"
                        type="text"
                        value={ProcurarReceita}
                        onChange={handleSearchChange} 
                    />
                </div>
                <h1>Explore Recipes</h1>
            </div>
        </header>
    );
}

export default Header;

