import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';

interface ProductItemprops {
  item: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: any;
    title: string;
  };
}
const ProductItem: FC<ProductItemprops> = ({item}: ProductItemprops) => {
  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
      }}>
      <Image source={{uri: item.image}} style={{width: 60, height: 60}} />
      <View
        style={{
          marginLeft: 10,
          padding: 10,
          width: '90%',
          overflow: 'hidden',
          paddingTop: 0,
        }}>
        <Text style={{fontSize: 16, fontWeight: '800'}}>{item.title}</Text>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};
export default ProductItem;
