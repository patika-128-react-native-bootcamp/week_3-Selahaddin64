import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Button from '../../../components/Button';
import routes from '../../../navigation/routes';

import styles from './TablesUpdate.styles';

const mapOrders = (order, i) => (
  <View key={i} style={styles.order_container}>
    <Text style={styles.order_name}>⏺ {order.name}</Text>
    <Text key={i} style={styles.order_price}>
      {order.price} TL
    </Text>
  </View>
);

export default function TableUpdate({navigation, route}) {

  const {table} = route.params;

  const {price: total} = table.orders.reduce((p, c) => ({
    price: p.price + c.price,
  }));

  function handleCloseTable() {
    navigation.navigate(routes.TABLES_PAGE, {
      updatedTable: {...table, isActive: false},
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.name_label}>{table.name}</Text>
        {table.orders.map(mapOrders)}
        <Text style={styles.total}>Total {total} TL</Text>
      </View>
      {table.isActive && (
        <Button title="Close Table" onPress={handleCloseTable} />
      )}
    </SafeAreaView>
  );
}
