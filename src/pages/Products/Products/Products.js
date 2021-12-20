import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';
import routes from '../../../navigation/routes';

export default function Products({navigation}) {

  function navigate(selectedProduct) {
    navigation.navigate(routes.PRODUCTS_DETAİL_PAGE, {product: selectedProduct});
  }

  const renderProduct = ({item, index}) => (
    <ProductCard item={item} onSelect={() => navigate(item)} />
  );
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item,index)=>item.p_id.toString()}
        data={mockData.products}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}
