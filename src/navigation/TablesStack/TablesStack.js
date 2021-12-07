import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tables from '../../pages/Tables/Tables';
import TablesUpdate from '../../pages/Tables/TablesUpdate';
import routes from '../routes';

export default function TablesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.TABLES_PAGE}
        component={Tables}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu',
        }}
      />
      <Stack.Screen
        name={routes.TABLES_UPDATE_PAGE}
        component={TablesUpdate}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu',
        }}
      />
    </Stack.Navigator>
  );
}
