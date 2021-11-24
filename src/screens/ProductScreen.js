import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from '../constants';
import { RemoveIcon } from '../components/Icons';
import { ADD_TO_CART } from '../redux/actionTypes';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CartScreen() {
  const url = 'https://fakestoreapi.com/products/?limit=20';
  const [data, setData] = useState([]);

  const dispatch = useDispatch()

  const addToCart = item => 
  dispatch({type:ADD_TO_CART,payload:item})

  async function fetchData() {
    const res = await axios.get(url).then(res => res.data);
    setData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function Item({image, title, price}) {
    return (
      <SafeAreaView style={styles.safeareaview}>
        <View style={{marginVertical: 3}}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.icon}>
          <RemoveIcon name="md-close" color={colors.white} size={20} />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price} </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => addToCart(item)}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const renderItem = ({item}) => (
    <Item image={item.image} title={item.title} price={item.price}></Item>
  );

  const ListEmptyComponent = () => {
    return <Text>Sepetinizde Ürün Bulunmamaktadır.</Text>;
  };

  const ListHeaderComponent = () => {
    return (
      <View>
        <Text></Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <FlatList
        refreshing={true}
        data={data}
        showsVerticalScrollIndicator={true} //False yaparsak yandaki çubuk gizlenir.
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 10,
    borderWidth: 1.5,
    borderColor: colors.peachy_pluff,
    padding: 4,
    width: 65,
    height: 65,
    marginVertical: 1,
    position: 'absolute',
  },
  title: {
    fontSize: fonts.f13,
    color: colors.black,
    width: 200, alignSelf: 'center'
  },
  priceContainer: {
    borderWidth: 1,
    borderColor: colors.light_blue,
    borderRadius: 5,
    backgroundColor: colors.light_blue,
    width: 55,
    height: 30,
    padding: 5,
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
icon:{
  borderRadius:3,
  backgroundColor:colors.dark_salmon,
  width:22,
  height:22,
  margin:4,
  padding:1,
  alignSelf:"flex-end"
},
  price: {
    color: colors.white,
  },
  separator: {
    borderBottomColor: colors.gainsboro,
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
  },
  safeareaview: {
    backgroundColor: colors.white,
  },
});
