import React, { useContext, useState } from "react";
import { View ,Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { useMMKV } from "react-native-mmkv";
import { Menucontext } from "../..";
export default function AddItem (){
  const ContextValue = useContext(Menucontext)
  const storage = useMMKV()
    const [selected, setSelected] = useState("");
const [productName,setProductname] = useState('')
const [priceProduct,setPriceProduct] = useState('')
console.log(selected)
  const data = [
    { key: '1', value: 'malfouf' },
    { key: '2', value: 'chapati' },
    { key: '3', value: 'supplement' },
    { key: '4', value: 'sandwich' },
  ];
  const savedata = ()=>{
    if(productName.length>3 && priceProduct.length >3  ) {
                  if(selected == "malfouf"){
                    const jsonMalfoufTable= storage.getString('malfouf_table')
                    if(jsonMalfoufTable == undefined){
             const jsObject = []
            const newId = Math.random().toString();
        
                    jsObject.push({id  : newId,name : productName ,type  : "malfouf" , price : priceProduct})
                    storage.set('malfouf_table', JSON.stringify(jsObject))
                      ContextValue.setOpenSetting(false)
                    }
                    else {
                                  const jsObject = JSON.parse(jsonMalfoufTable);
        
                    jsObject.push({id  : jsObject.lenght +1,name : productName ,type : "malfouf" , price : priceProduct})
                    storage.set('malfouf_table', JSON.stringify(jsObject))
                      ContextValue.setOpenSetting(false)
                    }
                   
                  }
                
              }
  }
    return(
           <View style = {styles.card}>
        
                          <View style = {styles.inputSection} >
                          <TextInput style ={styles.input} placeholder="product name" onChangeText={(e)=>{setProductname(e)}} />
                          <TextInput style ={styles.input} placeholder="product price" onChangeText={(e)=>{setPriceProduct(e)}} />
           <SelectList
                setSelected={setSelected}
                data={data}
                save="value" // You can save the 'key' or 'value'
                placeholder="Select option"
              />
              <TouchableOpacity style = {styles.ButtonOption} onPress={()=>{ savedata()
              }}   > 
                                                     <Text style={{color : "white",fontSize :20,textAlign : "center"}} > save product </Text>
                                                  </TouchableOpacity>
                          </View>
                         </View>
    )
}
export const styles = StyleSheet.create({
  card : {
    width : "100%" , 
    height : "85%" , 
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.5)', 
         margin  : 20 , 
         borderRadius : 20 , 
         marginRight : 20

  }, 
  inputSection : {
    width : "20%" , 
    height : "100%" , 
    marginTop : 40 , 
    display : "flex" , 
    marginLeft :30,
    gap : 20  ,
  },
  input : {
       height: 40, // Required for visibility on Android
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16, // Font size can be set here
    color: '#fff',
    textAlign : "center"
  }
})