import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MenuStack from './MenuStack';
import TablesStack from './TablesStack';
import ProductsStack from './ProductsStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name={routes.PRODUCTS_STACK}
          component={ProductsStack}
          options={{
            drawerLabel: 'Products',
            drawerIcon: ({size, color}) => (
              <Icon name="food-croissant" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
        <Drawer.Screen
          name={routes.MENU_STACK}
          component={MenuStack}
          options={{
            drawerLabel: 'Menu',
            drawerIcon: ({size, color}) => (
              <Icon name="book-open-page-variant" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
        <Drawer.Screen
          name={routes.TABLES_STACK}
          component={TablesStack}
          options={{
            drawerLabel: 'Tables',
            drawerIcon: ({size, color}) => (
              <Icon name="table-furniture" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
