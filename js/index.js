const loadMeals = (search) =>{
  const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(Url)
  .then(response => response.json())
  .then(allData => ShowInDisplay(allData.meals))
}

const ShowInDisplay = meals =>{
  // console.log(meals)
  const MealContainer = document.getElementById('MealContainer');
  MealContainer.innerHTML ='';
  meals.forEach(meal =>{
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('col');
  mealDiv.innerHTML = `
  <div class="card" onclick ="showDetails(${meal.idMeal})">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p> ${meal.strInstructions.slice(0, 200)}</p>
      </div>
    </div>
  `;
  MealContainer.appendChild(mealDiv)
  })
}
const showDetails =(meal) =>{
  const Url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
  fetch(Url)
  .then(respone => respone.json())
  .then(data => showDetailsInDisplay(data))
}

const showDetailsInDisplay = detailsDiplay =>{
  const ShowingInDisplay = document.getElementById('showDetailsDisplay');
  ShowingInDisplay.innerHTML = '';
  const displayDiv = document.createElement('div');
  displayDiv.innerHTML = `
  <div class="card m-auto" style="width: 18rem; heigth: 300px">
  <img src="${detailsDiplay.meals[0].strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Order ID : ${detailsDiplay.meals[0].idMeal}</h5>
    <p class="card-text">strCategory : ${detailsDiplay.meals[0].strCategory}</p>
    <p class="card-text">strArea : ${detailsDiplay.meals[0].strArea}</p>
    <p class="card-text">strInstructions : ${detailsDiplay.meals[0].strInstructions.slice(0, 40)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
  ShowingInDisplay.appendChild(displayDiv)
}

const searchfood = () =>{
  const searchInputField = document.getElementById('SearchIputField');
  const searchInputValue = searchInputField.value;
  loadMeals(searchInputValue);
  searchInputField.value = '';
}
loadMeals('');