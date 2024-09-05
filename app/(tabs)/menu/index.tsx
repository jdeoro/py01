import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import ListProduct from '@/components/ListProduct';
import products from '@/data/products';
import { Product } from '@/types/types';

export type Typeitem = {
    item : Product
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        key={1}
        data={products}
        renderItem={ ({item} ) => <ListProduct item={item}  /> }
        numColumns={2}
        contentContainerStyle={{ gap:10, padding:10}}
        columnWrapperStyle={{ gap:10}}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'space-between',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
