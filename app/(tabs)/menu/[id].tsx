import Colors from '@/constants/Colors'
import { Stack, useLocalSearchParams, usePathname } from 'expo-router'
import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import products from '@/data/products'
import { defaultImg } from '@/components/ListProduct'

const producto = () => {
  const { id } = useLocalSearchParams();

  const item = products.find((ele) => ele.id.toString() === id);
  const sizes = ["Grande", "Chica", "Porcion"];
  const [sizesel, setSizesel] = useState(sizes[0]);

  
  if (!item) return null;

  return (
    <View style={style.container}>
      <Stack.Screen options={{ title: item.name }} />
      <Image
        style={style.image}
        source={{ uri: item.image || defaultImg }}
        resizeMode="contain"
      />
      <Text style={{marginBottom:10, marginLeft:10}}>Seleccionar tamaño</Text>

      <View style={style.sizeMatriz}>
        {sizes.map((size) => (
          <Pressable onPress={() => setSizesel(size)} key={size}>
              <Text style={[ style.size, {fontSize:15, backgroundColor: sizesel === size ? "#DBDBDB" : "white" }]}>
                {size}
              </Text>
          </Pressable>
        ))}
      </View>

      <View>
        <Text>${item.price}</Text>
      </View>

    </View>
  );
}

export const style = StyleSheet.create( {
  container: {
    backgroundColor: 'white',
    flex:1,
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
 sizeMatriz : {
     backgroundColor:'white',
     flexDirection:'row',
     justifyContent:'space-around',
     padding:10,
     marginVertical:10,
 },
 size: {
   backgroundColor:'white',
   width:50,
   aspectRatio:1,
   borderRadius :45,
   justifyContent:'center',

 }
 
})
export default producto

