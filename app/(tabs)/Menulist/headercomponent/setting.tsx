import { View ,Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Setting (){

    return(
        <View style = {styles.Maincontainer}>
                 <View style  = {styles.SettingMenu} >
                   <TouchableOpacity style = {styles.ButtonOption}   > 
                             <Text style={{color : "white",fontSize :20}} > add product</Text>
                          </TouchableOpacity>
                           <TouchableOpacity style = {styles.ButtonOption}   > 
                                     <Text style={{color : "white",fontSize :20}} > malfouf</Text>
                                  </TouchableOpacity>
                                   <TouchableOpacity style = {styles.ButtonOption}   > 
                                             <Text style={{color : "white",fontSize :20}} > malfouf</Text>
                                          </TouchableOpacity>
                 </View>
                 
                 </View> 
    )
}
const styles = StyleSheet.create({
  Maincontainer : {
    width  :"100%" ,
     paddingBottom : 100 , 
     display : 'flex',
 
  } ,
  SettingMenu : {
    width : "100%" , 
    minHeight  : "10%" , 
    marginTop : 50 , 
    display : "flex" , 
    justifyContent : "space-around" , 
     alignItems : "center",
     flexDirection : "row"
  },
    MenuOptions : {
    width : "100%" ,
    height : "12%" ,
      display : "flex" ,
    justifyContent : "space-around" , 
    flexDirection : "row" ,
  },
   ButtonOption :  {

    padding :"2%", 
    borderRadius : 20 ,
        boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',

  },
})