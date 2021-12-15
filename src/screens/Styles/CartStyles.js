import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";


const styles =  StyleSheet.create({
  noCart: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin:15,
    padding:75,
    borderWidth:1,
    borderColor:colors.dark_sea_green,
    borderRadius:7,
  },
    container: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#CCC",
      flexWrap: "nowrap",
      backgroundColor: "rgba(255,255,255,255)",
      shadowColor: "#000",
      shadowOffset: {
        width: -2,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
      overflow: "hidden",
      margin:7,
      padding:3,
      width:"95%",
     height:110
    },

    rect: {
      left: 350,
      width:45,
      height:115,
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,1)",
      borderRadius: 13,
      backgroundColor: colors.black
    },
    cardBody: {
      flexDirection: "row",
      justifyContent: "space-between",
      left: 16,
      width: 231,
      top: 2,
      height: 159,
      margin: 0
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 3,
      marginTop:5
    },
    bodyContent: {
      padding: 16,
      paddingTop: 10,
      flex: 1
    },
    urun: {
      fontSize:fonts.f13,
      color: "#000",
      
    },
    urunFiyati: {
      fontSize: fonts.f12 ,
      color: "#000",
      lineHeight: 16,
      opacity: 0.5
    },
    icon: {
     position:"absolute",
      color: colors.white,
      fontSize: 30,
      right: 0,
      top: 5
    },
    icon2: {
      position:"absolute",
      color:colors.white ,
      fontSize: 30,
      right:0,
      top: 70,
    },
    adet: {
      right:13,
      position: "absolute",
      fontFamily: "roboto-regular",
      color: colors.white,
      top: 43
    }
  })

  export default styles;