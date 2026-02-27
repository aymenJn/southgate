import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore"; 
import { db } from "@/firebase/firebase";
import { View , Text, TouchableOpacity ,Image ,StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useMMKV } from "react-native-mmkv";


export default   function MenuB () {
  const [malfoufData , setmalfoufData] = useState()
  const [commandeList, setCommandeList] = useState([])
  const displayList  = commandeList.map((item)=>{
    return(
           <View> 

                    <Text> {item.name}</Text>
                  </View>
    )
  })
const storage = useMMKV()
            const jsonMalfoufTable= storage.getString('malfouf_table')
             const jsObject = JSON.parse(jsonMalfoufTable);

         
           const malfoufJsx = jsObject.map((item)=>{
              return(
                    <TouchableOpacity style = {styles.item} onPress={()=>{const local = commandeList 
                      local.push(item)
                                     console.log(commandeList)

                     setCommandeList(local)}}   > 
           <Text style={{color : "white",fontSize :20}} > {item.name}  {item.price}  </Text>
        </TouchableOpacity>
              )
            })
    return(
       <View  style = {styles.Main} >
             <View style = {styles.MenuOptions} >
      <TouchableOpacity style = {styles.ButtonOption}   > 
           <Text style={{color : "white",fontSize :20}} > malfouf</Text>
        </TouchableOpacity>
         <TouchableOpacity style = {styles.ButtonOption}  > 
           <Text style={{color : "white",fontSize :20}} > chapati</Text>
        </TouchableOpacity>
         <TouchableOpacity style = {styles.ButtonOption} > 
           <Text style={{color : "white",fontSize :20}} > sandwich</Text>
        </TouchableOpacity>
       <TouchableOpacity style = {styles.ButtonOption}   > 
           <Text style={{color : "white",fontSize :20}} > supplment</Text>
        </TouchableOpacity>
     </View>
     <View style = {styles.center} >
     <View style =  {styles.Itemsmenu} >
      {malfoufJsx}
     </View>
     
     <View style= {styles.OrderListHandler} >
                 <Image  source={require('./letterimge.jpg')}  style={styles.imagehandler} />
            <View style  = {styles.commandeItem}>
            {displayList}
            </View>
     
     </View>
     
     </View>
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
  display : "flex" , 
  flexDirection : "row" , 
  gap : 30 , 
  flexWrap : "wrap" , 
  marginTop : 20, 

},
item : {
  height : 50 , 
  minWidth : 100,
    padding : 10 ,
            boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',
            borderRadius : 20

} ,
commandeItem : {
  height : "100%" , 
  width : "100%" , 
  zIndex : 100 ,
  position : "absolute"  , 
  top  : 0 , 
  left : 0
}
})