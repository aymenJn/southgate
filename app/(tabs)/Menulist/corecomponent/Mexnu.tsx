import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menucontext } from "..";
import Historuqe from "../headercomponent/historque";
import Setting from "../headercomponent/setting";
import MenuB from "../bodycomponent/Menubody";

export default function Menu  (){
  const data = useContext(Menucontext)

    return(
      <View style = {styles.body} >
        {
            data.OpenHistorique ?
            <Historuqe />
            : data.OpenSetting && 
            <Setting />
        }
  <MenuB />
        </View>
    )
}

const styles = StyleSheet.create({
  body : {
 
  width : "100%" ,
  minHeight : "70%",
  display : "flex" ,
    justifyContent : "flex-start" , 
    flexDirection : "row" ,
height : "90%" ,
  },
    Main : {
width : "100%" , 
display : "flex" , 
  } , 
  MenuOptions : {
    width : "100%" ,
    height : "12%" ,
      display : "flex" ,
    justifyContent : "space-around" , 
    flexDirection : "row" ,
  },
   ButtonOption :  {

    padding :"1%", 
    borderRadius : 20 ,
        boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',

  },
  center :{
width  : "100%" , 
height : "100%" ,
display : "flex" , 
flexDirection :"row" , 
marginTop:20
  } ,
  OrderListHandler : {
width : "20%" ,  
fontSize : 20,
height : "90%",
        boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',

},
imagehandler :  {
  height : "90%" ,
  width : "100%" ,
  borderRadius : 20,
},
Itemsmenu : {
    width : "79%" , 
    height : "100%" , 

}
})