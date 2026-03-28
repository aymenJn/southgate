import { useContext, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, SectionListComponent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMMKV } from "react-native-mmkv";
import { Menucontext } from "..";
import {produit,operation,date,SelectedProduct} from "../../../../interface/interface"
export  const GetTime = ()=>{
    const currentDate = new Date();
 const month = Number(currentDate.getMonth()) + Number(1) 
 const currentDay = new Date().getDate()
  const dateh = {hour : currentDate.getHours() , minute : currentDate.getMinutes(), seconds : currentDate.getSeconds() }

 const datej = {year:currentDate.getFullYear() ,month :month ,day : currentDay}
 const currentTime  : date = {year   : datej.year , month : datej.month , day : datej.day, hour : dateh.hour,minute : dateh.minute, second : dateh.seconds}
 return currentTime
}
const GetData = (table_Name) =>{
  const storage = useMMKV()
            const jsonMalfoufTable : string | undefined= storage.getString(table_Name)
             if(jsonMalfoufTable == undefined){
              return []
             }
             else {
               const jsObject = JSON.parse(jsonMalfoufTable)
               console.log(jsObject)

                return jsObject
             }
}
export default   function MenuB () {
  const data = useContext(Menucontext)
  const gettiem = GetTime()
 const [time, settime]  = useState(gettiem)
  const [ticket,setticket]  = useState(0);
   const [Operation , setoperation] = useState<operation>({owner:"aymen",date :"" ,selected:[],somme:0});
    const [Loclalsomme, setLocalsomme] = useState<number>(0); // operation somme 
    const [Malfoufdata,setMalfoufdata] = useState(GetData("malfouf"))
    const [chapatidata,setchapatidata] = useState(GetData("chapati"))
    const [sandwichdata,setsandwichdata] = useState(GetData("sandwich"))
useEffect(()=>{
},[setoperation])
const storage = useMMKV()
      /************************** choisir produit function ***************************************************** */
const ClickedItem  = (product : produit) =>{
  const localoperation =Operation.selected ; 
const Index = localoperation.findIndex(user => user.id === product.id);
const x = Number( product.price )+ Number(Loclalsomme)
setLocalsomme(x)
if(Index == -1){
  localoperation.push({ id : product.id , name : product.name,type : product.type,price :product.price,quantity : 1})
setoperation(olddata=>({
  ...olddata ,
  selected : localoperation
}))
}
else {
localoperation[Index].quantity++ 
setoperation(olddata=>({
  ...olddata ,
  selected : localoperation
}))
}
          }
  const Erasedata  = () => {
  setoperation(olddata=> ({
    ...olddata,
    selected : []
  }))
  setLocalsomme (0)
  }
const SaveData  = () =>{
 
  const newId = Math.random().toString();
 const Operationlist= storage.getString('Historque_Operation') 
   
 if(Operation.selected.length> 0) {
   const ticke = Number(ticket) +1
        setticket(ticke)
    const instantdate = GetTime()
 const datasaved = {id  : newId,owner : Operation.owner,date  : instantdate  , somme : Loclalsomme , selected : Operation.selected,ticket : ticke}

if(Operationlist == undefined){
   const jsObject = []
            jsObject.push(datasaved)
            storage.set('Historque_Operation', JSON.stringify(jsObject))

 }
 else {
 const jsObject = JSON.parse(Operationlist);
  jsObject.push(datasaved)
  storage.set('Historque_Operation', JSON.stringify(jsObject))
 }
 Erasedata()
 }
 else {
  alert("no data")
 }
 
} 
const removeItem = (product ) => {
   const localoperation =Operation.selected ; 
  const Index = localoperation.findIndex(user => user.id === product.id);

  if(product.quantity<=0){
localoperation[Index].quantity = 0
setoperation(olddata=>({
  ...olddata ,
  selected : localoperation
}))
  }
  else if (product.quantity >=1) {
     setLocalsomme(Loclalsomme-product.price)
    localoperation[Index].quantity--
setoperation(olddata=>({
  ...olddata ,
  selected : localoperation
}))}
  };

              const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeItem(item)} style={styles.ItemStyle}>
      <Text style  = {{fontSize  : 20}} > {item.quantity} {item.type[0]}{item.type[1]} {item.name}   {item.quantity * item.price}   </Text>
    </TouchableOpacity>
  );

      const renderMalfouf = ({ item }) => (
    <TouchableOpacity onPress={() => ClickedItem(item)} style={styles.ItemStyle}>
      <Text style  = {{fontSize  : 20, color :"white" , textAlign : "center"}} >{item.name}    </Text>
            <Text style  = {{fontSize  : 20, color :"white",textAlign : "center"}} >{item.price}    </Text>

    </TouchableOpacity>
  );
    return(
       <View  style = {styles.Main} >
     <View style = {styles.center} >
     <View style =  {styles.Itemsmenu} >
      <ScrollView style =  {{width :"100%" , height : "100%"}}>
      <Text  style ={{width :"100%" , textAlign : "center" , color  : "white",fontSize :30}} > Malfouf </Text>
      <FlatList data={Malfoufdata}   renderItem={renderMalfouf}
        keyExtractor={item => item.name}  
        contentContainerStyle =  {styles.body}
        />
         <Text  style ={{width :"100%" , textAlign : "center" , color  : "white",fontSize :30}} > Chapati </Text>
      <FlatList data={chapatidata}   renderItem={renderMalfouf}
        keyExtractor={item => item.name}  
        contentContainerStyle =  {styles.body}
        />
         <Text  style ={{width :"100%" , textAlign : "center" , color  : "white",fontSize :30}} > Sandiwch </Text>
      <FlatList data={sandwichdata}   renderItem={renderMalfouf}
        keyExtractor={item => item.name}  
        contentContainerStyle =  {styles.body}
        />
        </ScrollView>
     </View>
     
     <View style= {styles.OrderListHandler} >
                 <Image  source={require('./letterimge.jpg')}  style={styles.imagehandler} />

            <View style  = {styles.commandeItem}>
              <Text  style = {{textAlign : "center"}} >  {time.year} / {time.month} / {time.day}  </Text>
            <FlatList data={Operation.selected}   renderItem={renderItem}
        keyExtractor={item => item.name} />
       <Text style ={{fontSize :18 , textAlign : "center"}}  > a payer    {Loclalsomme} </Text>
        <TouchableOpacity style = {styles.confirmebutton}  > 
      <Text style={{color : "black",fontSize :18, textAlign : "center"}} onPress={()=> SaveData()} > confirme</Text>
   </TouchableOpacity>
       
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

  center :{
width  : "100%" , 
height : "100%" ,
display : "flex" , 
flexDirection :"row" , 
  } ,
  OrderListHandler : {
width : "20%" ,  
fontSize : 20,
height : "90%",
        boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',

},
imagehandler :  {
  height : "100%" ,
  width : "100%" ,
  borderRadius : 20,
},
Itemsmenu : {
    width : "79%" , 
    height : "100%" , 
  display : "flex" , 
  flexDirection : "column" , 
  flexWrap : "wrap" , 
},
item : {
  height : 50 , 
  minWidth : 100,
    padding : 10 ,
            boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',
            borderRadius : 20

} ,
commandeItem : {
position : "absolute" , 
top  : "5%" ,
width : "90%" , 
height : "90%" ,
left : "5%"
} , 
ItemStyle : {
fontSize : 20 , 
marginTop : 15 ,
marginLeft : 10 ,
marginRight : 20, 
marginBottom : 20,
display : "flex" ,
gap : 10,
boxShadow: '5px 5px 5px 5px rgba(28, 26, 26, 0.5)',
padding: 10,
},
confirmebutton : {
  padding : 10,
  marginTop : 20,
  textAlign : "center" ,
    borderRadius : "20%" ,
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.5)',
}
})