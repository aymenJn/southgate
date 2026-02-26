import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Menucontext } from "..";

export  default function Header ()  {
const data = useContext(Menucontext)
    return(
  <View style = {styles.header}>
<TouchableOpacity onPress={()=>{
if(data.OpenHistorique) {
  data.setOpenHistorique(false)
} 
data.setOpenSetting(!data.OpenSetting)
}}  >
  <Image
                      style={styles.imageleft}
                      source={require('./setting.png')}
                    />
  </TouchableOpacity>
 <TouchableOpacity  onPress={()=>{
if(data.OpenSetting) {
  data.setOpenSetting(false)
} 
data.setOpenHistorique(!data.OpenHistorique)
}}  >
   <Image 
                      style={styles.imageright}
                      source={ require('./clock.png')}
                    />
 </TouchableOpacity>
                   
  </View>
    )
} 

const styles = StyleSheet.create({
    Maincontaniner :{
    color : "#E5E4E2",
    flex : 1 , 
    height : "100%" ,
    backgroundColor : "#36454F",
    display : "flex" ,
    justifyContent : "flex-start" , 
    alignItems : "center",

 } ,
 header : {

 display : "flex" ,
    justifyContent : "space-between" , 
    alignItems : "center" , 
    flexDirection : "row" , 
    width : "100%" , 
    marginTop : 40 , 
    height : 60,
 },
 imageleft  : {
height : 45 , 
width : 45,
marginLeft : 10
} , 
 imageright  : {
height : 45 , 
width : 45,
marginRight  : 10

}
})