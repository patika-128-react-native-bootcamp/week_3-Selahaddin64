import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import styles from './Tables.styles';
import TableCard from '../../../components/cards/TableCard';
import mock_data from '../../../MOCK_DATA.json';
import routes from '../../../navigation/routes';

export default function Tables({navigation, route}) {

  const [tables, setTables] = useState(mock_data.tables);

  function handleNavigateTableDetail(selectedTable) {
    navigation.navigate(routes.TABLES_UPDATE_PAGE, {table: selectedTable});
  }

  const renderTables = ({item}) => (
    <TableCard item={item} onSelect={() => handleNavigateTableDetail(item)} />
  );

  useEffect(() => {
    if (!route.params) {
      return;
    }

    const {updatedTable} = route.params;
    const updatedTableIndex = tables.findIndex(t => t.id === updatedTable.id);
    const newTables = [...tables];
    newTables[updatedTableIndex] = updatedTable;
    setTables(newTables);
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={tables} renderItem={renderTables} numColumns={2} />
    </SafeAreaView>
  );
}
