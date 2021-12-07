import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from '../../pages/Products/Products';
import ProductsDetail from '../../pages/Products/ProductsDetail';
import routes from '../routes';

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PRODUCTS_PAGE}
        component={Products}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Products',
        }}
      />
      <Stack.Screen
        name={routes.PRODUCTS_DETAİL_PAGE}
        component={ProductsDetail}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Product Detail',
        }}
      />
    </Stack.Navigator>
  );
}
