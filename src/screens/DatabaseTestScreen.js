import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'

export default function DatabaseTestScreen() {

    const [items,setItems]=useState([])
    const [isLoading,setLoading]=useState(false)

    async function res(){
          try {
        const response = await fetch("http://192.168.0.113/barcode_scanner/products.php")
        const responseJson = await response.json()   
        console.log(responseJson);  
    } catch (error) {
        console.log(error);
    } 
   }
   const fetchItem =async (id)=>{
       setLoading(true)
        const getItem = await axios.get(`http://192.168.0.113/barcode_scanner/products.php/${id}`)
        .then(res=>res.data)
        .catch(err=>alert(err))
        setItems(getItem)
        setLoading(false)

   }

/*    useEffect(() => {
    setLoading(true)
     const timer = setTimeout(() => {
        fetchItem()
    }, 1000);
    return () => clearTimeout(timer);
  }, []); */

   useEffect(() => {
       setLoading(true)
       fetchItem()
       setLoading(false)
   }, [])


   FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "gray",
        }}
      />
    );
  }
    

    return (
        <View style={styles.MainContainer}>
      
      
        <Text style={styles.Header}>En İyi Filmler</Text>

        {isLoading ?         <Text style={styles.Header}>Yükleniyor..</Text>
        :items?
        <FlatList
          data={items}
          ItemSeparatorComponent = { FlatListItemSeparator }
          renderItem={({item}) =>
           <Text style={styles.FlatListItemStyle}> {item.name} - {item.price} TL
           </Text>}
          keyExtractor={ dataSource => dataSource.id }
        /> :<Text style={styles.Header}>Ürünler bulunamadı.</Text>  }

      </View>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex:1,
      margin: 10
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
      fontWeight: 'bold'
    }
  });