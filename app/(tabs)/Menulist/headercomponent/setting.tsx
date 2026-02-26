import React, { useContext, useState } from "react";
import { View ,Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { useMMKV } from "react-native-mmkv";
import { Menucontext } from "..";
import { underDampedSpringCalculations } from "react-native-reanimated/lib/typescript/animation/spring";


export default function Setting (){
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
    return(
        <View style = {styles.Maincontainer}>
                 <View style  = {styles.SettingMenu} >
                   <TouchableOpacity style = {styles.ButtonOption}   > 
                             <Text style={{color : "white",fontSize :20}} > add product</Text>
                          </TouchableOpacity>
                           <TouchableOpacity style = {styles.ButtonOption}   > 
                                     <Text style={{color : "white",fontSize :20}} > add charge</Text>
                                  </TouchableOpacity>
                                   <TouchableOpacity style = {styles.ButtonOption}   > 
                                             <Text style={{color : "white",fontSize :20}} > modify stock </Text>
                                          </TouchableOpacity>
                 </View>
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
      <TouchableOpacity style = {styles.ButtonOption} onPress={()=>{
        if(productName.length>3 && priceProduct.length >3  ) {
          if(selected == "malfouf"){
            const jsonMalfoufTable= storage.getString('malfouf_table')
            if(jsonMalfoufTable == undefined){
     const jsObject = []

            jsObject.push({id  : 1,name : productName ,type  : "malfouf" , price : priceProduct})
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
      }}   > 
                                             <Text style={{color : "white",fontSize :20,textAlign : "center"}} > save product </Text>
                                          </TouchableOpacity>
                  </View>
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
    marginTop : 20 , 
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