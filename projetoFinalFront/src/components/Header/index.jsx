import "./style.css"

function Header() {
    return (
        <div>
            <header className="header">
                <div className="middle">
                    <div className="barra-de-pesquisa">
                        <i className="fas fa-search"></i>
                        <input placeholder="Search Recipes" className="input" type="text" id="searchInput" />
                    </div>
                    <h1>Explore Recipes</h1>
                </div>
            </header>
        </div>
    )
}

export default Header