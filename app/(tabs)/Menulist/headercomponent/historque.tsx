import { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menucontext } from "..";
import { useMMKV } from "react-native-mmkv";


export default function Historuqe (){
const data = useContext(Menucontext)
const storage = useMMKV()
 const Operationlist= storage.getString('Historque_Operation') 
  const jsObject = JSON.parse(Operationlist);
 console.log(data)
       const renderItem = ({ item }) =>(
     <TouchableOpacity style={styles.ItemStyle} onPress={()=>{
      data.setOpenHistorique(false) 
      data.setdatatransfert(item)
     }} >
       <Text style  = {{fontSize  : 20}} >  NO {item.ticket} </Text>
     </TouchableOpacity>
   );
    return(
        <View style = {styles.Maincontainer}>
                <FlatList data={jsObject}   renderItem={renderItem}
                      keyExtractor={item => item.id}   
                      contentContainerStyle = {styles.ListHandler} />
                  <TouchableOpacity style={styles.ItemStyle} onPress={()=> {
                       const jsObject = []
            storage.set('Historque_Operation', JSON.stringify(jsObject))
                  }  } >
       <Text style  = {{fontSize  : 20}} >  delete </Text>
     </TouchableOpacity>
                 </View> 
    )
}
const styles  = StyleSheet.create({
  Maincontainer  : {
    width : "100%" , 
    height  : "100%" , 
    display  : "flex" ,
    justifyContent : "space-around" , 
    flexDirection : "row" ,
    gap : 3, 
  
  } ,
  ListHandler  :  {
        display  : "flex" ,
    flexDirection : "row" ,
    gap : 30, 
    margin : 30
  } ,
  ItemStyle:  {
    color : "white" , 
    backgroundColor  : "white" ,
    boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',
    maxWidth : 200
  }
})