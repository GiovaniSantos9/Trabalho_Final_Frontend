import { useEffect, useState } from "react";
import "./style.css";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => response.json())
            .then((data) => setCategories(data.categories));
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => response.json())
            .then((data) => setMeals(data.meals));
    };

    const handleMealClick = (idMeal) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedMeal(data.meals[0]);
                setIsModalOpen(true);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMeal(null);
    };

    let content;
    if (selectedCategory) {
        content = (
            <div>
                <div className="meals-container">
                    {meals.map((meal) => (
                        <div
                            key={meal.idMeal}
                            className="meal-card"
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                            <h3>{meal.strMeal}</h3>
                            <p className="meal-info">Categoria: {selectedCategory}</p>
                            <div className="card_botton">
                                <i className="fa-regular fa-heart"></i>
                                <p>{meal.strArea}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="recipes">
            <ul className="categories-container">
                {categories.map((category) => (
                    <li
                        key={category.idCategory}
                        onClick={() => handleCategoryClick(category.strCategory)}
                    >
                        {category.strCategory}
                    </li>
                ))}
            </ul>

            {content}

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

export default Categories;

