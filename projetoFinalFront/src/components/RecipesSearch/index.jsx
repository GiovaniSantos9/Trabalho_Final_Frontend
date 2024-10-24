import { useState } from "react";
import Header from "../Header/index";
import "./style.css";

const RecipeSearch = () => {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [pesquisado, SetPesquisado] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null); // Estado para a refeição selecionada
    const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar a visibilidade do modal

    const searchRecipes = (searchTerm) => {
        if (searchTerm === "") {
            setFilteredRecipes([]);
            SetPesquisado(false);
        } else {
            SetPesquisado(true);

            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.meals) {
                        setFilteredRecipes(data.meals);
                    } else {
                        setFilteredRecipes([]);
                    }
                });
        }
    };

    // Função para abrir o modal com a refeição selecionada
    const handleRecipeClick = (idMeal) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedMeal(data.meals[0]);
                setIsModalOpen(true); // Abre o modal
            });
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMeal(null);
    };

    return (
        <div>
            <Header onSearch={searchRecipes} />
            <div className="recipes-container">
                {(() => {
                    if (!pesquisado) {
                        return null; 
                    }
                    if (filteredRecipes.length > 0) {
                        return (
                            <div className="search-results">
                                {filteredRecipes.map((recipe) => (
                                    <div 
                                        key={recipe.idMeal} 
                                        className="result-item" 
                                        onClick={() => handleRecipeClick(recipe.idMeal)} // Adiciona o evento de clique
                                    >
                                        <img
                                            src={recipe.strMealThumb}
                                            alt={recipe.strMeal}
                                            className="recipe-image"
                                        />
                                        <div>
                                            <h3>{recipe.strMeal}</h3>
                                            <p>{recipe.strCategory}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                    if (filteredRecipes.length === 0) {
                        return <p>Não Encontrado</p>;
                    }
                    return null; 
                })()}
            </div>

            {/* Modal para mostrar detalhes da receita */}
            {isModalOpen && selectedMeal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <h2>{selectedMeal.strMeal}</h2>
                        <img className="image-modal" src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
                        <h3>Ingredientes:</h3>
                        <ul>
                            {Array.from({ length: 20 }).map((_, index) => {
                                const ingredient = selectedMeal[`strIngredient${index + 1}`];
                                const measure = selectedMeal[`strMeasure${index + 1}`];

                                if (ingredient) {
                                    return (
                                        <li key={index}>
                                            {ingredient} - {measure}
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                        <h3>Modo de Preparo:</h3>
                        <p>{selectedMeal.strInstructions}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeSearch;
