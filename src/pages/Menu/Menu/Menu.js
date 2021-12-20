import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import styles from './Menu.styles';
import MenuCard from '../../../components/cards/MenuCard';

import mockData from '../../../MOCK_DATA.json';
import routes from '../../../navigation/routes';

export default function Menu({navigation}) {
  function handleNavigateMenuCreate(selectedMenu) {
    navigation.navigate(routes.CREATE_MENU_PAGE, {menu: selectedMenu});
  }

  const renderMenu = ({item}) => (
    <MenuCard item={item} onSelect={() => handleNavigateMenuCreate(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={mockData.menu}
          renderItem={renderMenu}
          keyExtractor={mockData.menu.id}
        />
      </View>
    </SafeAreaView>
  );
}
