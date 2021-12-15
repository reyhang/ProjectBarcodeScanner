import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../constants';
import { createCart } from '../redux/actions';


export default function DatabaseTestScreen({navigation}) {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const createCarts = async () => await dispatch(createCart());

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'gray',
        }}
      />
    );
  };

  

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Header}>En İyi Filmler</Text>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="Sepet oluştur" onPress={() => createCarts()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
  },
  Header: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  touchableContainer: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.light_blue,
    width: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    marginTop: 15,
  },
});
