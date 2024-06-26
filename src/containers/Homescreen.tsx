import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ColorSetting} from '../utils/ColorsSetting';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';
import BaseContainer from './BaseContainer';
import Messages from '../component/Messages';
import { FlatList } from 'react-native-gesture-handler';
import ProductItem from '../component/ProductsItem';

interface Homescreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'CartDetails'>;
}
interface productsState  {
  category:string,
  description:string,
  id:number,
  image:string,
  price:number,
  rating:any,
  title:string
}
const Homescreen = ({navigation}: Homescreenprops) => {
  const [products,setProducts] = useState<productsState[]>([]) 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log('This is api resonse', json);
        setProducts(json)
      });
  });
  return (
    <BaseContainer title={Messages.titleHome}>
      <View style={styles.mainViewStyle}>
        <FlatList showsVerticalScrollIndicator={false} data={products} renderItem={({item,index}:{item:productsState,index:number}) => {
          return (
            <ProductItem item={item} />
          )
        }}></FlatList>
      </View>
    </BaseContainer>
  );
};
const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    marginBottom:10,
  },
});
export default Homescreen;
