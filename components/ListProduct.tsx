import React from 'react'
import { View, Text, StyleSheet, Image  } from 'react-native'
import { Product } from '@/types/types'
import Colors from '@/constants/Colors'
import { Link, Tabs } from 'expo-router'
import producto from '@/app/(tabs)/producto'

type Typeitem =  {
    item : Product
}

const defaultImg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'


const ListProduct = ( {item} : Typeitem ) => {
  return (
    <Link href={'(Tabs)/producto'} style={style.container}>

      <Image style={style.image}
       source={{ uri: item.image || defaultImg }}
        />
      <Text>{item.name}</Text>
    </Link>
  );
}

export default ListProduct

export const style = StyleSheet.create( {
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
 
})