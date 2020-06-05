import {createAppContainer} from 'react-navigation'; //react-navigataion
import {createStackNavigator} from 'react-navigation-stack'; //react-navigation-stack
// ! attention path !
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#EDE84A' : 'white',
        },
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#EDE84A' : 'white',
          //bunu da categoryMealsdaki gibi dinamik bir şekilde aynı renk ile yapmayı deneyebiliriz.
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTintColor: Platform.OS === 'android' ? 'black' : 'black',
    },
  },
);

export default createAppContainer(MealsNavigator);
