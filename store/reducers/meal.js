import {MEALS} from '../../data/dummy-data';

const initialState = {
  meal: MEALS,
  filteredMeals: MEALS,
  favoritedMeals: [],
};

const mealReducer = (state = initialState, action) => {
  return state;
};

export default mealReducer;
