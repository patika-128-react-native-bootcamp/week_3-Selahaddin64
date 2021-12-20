import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';
import routes from '../../../navigation/routes';

export default function CreateMenu({navigation, route}) {
  
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  function handleNavigateDetail() {
    
    if(name=='' || description=='' || ingredients=='' || price=='')
    {
      return;
    }
    const fd = {
      name,
      description,
      ingredients,
      price,
    };

    navigation.navigate(routes.MENU_DETAİL_PAGE, {fd});
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{route.params.menu.name}</Text>
      <Input label="Name" onChangeText={value => setName(value)} />
      <Input
        label="Description"
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Ingredients"
        onChangeText={value => setIngredients(value)}
      />
      <Input label="Price" onChangeText={value => setPrice(value)} />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
