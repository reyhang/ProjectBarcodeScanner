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
      borderRadius: 5,
      borderColor: "#CCC",
      flexWrap: "nowrap",
      backgroundColor: "rgba(255,255,255,1)",
      shadowColor: "#000",
      shadowOffset: {
        width: -2,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
      overflow: "hidden",
      margin:13,
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
      backgroundColor: colors.dark_salmon
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
      backgroundColor: "#ccc",
      height: 80,
      width: 80,
      borderRadius: 3,
      marginTop:5
    },
    bodyContent: {
      padding: 16,
      paddingTop: 24,
      flex: 1
    },
    urun: {
      fontSize:fonts.f20,
      color: "#000",
      paddingBottom: 12
    },
    urunFiyati: {
      fontSize: fonts.f17 ,
      color: "#000",
      lineHeight: 16,
      opacity: 0.5
    },
    undefined: {},
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