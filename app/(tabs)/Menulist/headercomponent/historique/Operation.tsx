import { useState } from "react";
import { StyleSheet, TouchableOpacity, View ,Text} from "react-native";
import { GetTime } from "../../bodycomponent/Menubody";
import { useMMKV } from "react-native-mmkv";
const GetSomme = (jsonMalfoufTable,time,mode) => {
  if (jsonMalfoufTable == undefined) {
    return 0;
  } else {
    const jsObject = JSON.parse(jsonMalfoufTable);
    let somme = [];
    jsObject.map((item) => {
        if(mode =="day"){
  if(item.date.month == time.month && item.date.day == time.day ){
           somme.push(item)
      }}
      else if (mode == "month"){
        console.log(item)
        if(item.date.month == time.month ){
           somme.push(item)
      }
      }
        
    
    });
    return somme;
  }
};
export default function Month (){
        const storage = useMMKV();
      const JsonOperation: string | undefined = storage.getString("Historque_Operation", );
const [MenuSelected, setMenuSelected] = useState("day");
  const currentdate = GetTime()
  const [Somme, setSomme] = useState(GetSomme(JsonOperation,currentdate,"day"));
    return(
        <View style = {styles.card}>
          <View style={styles.SettingMenu}>
                <TouchableOpacity
                  style={styles.ButtonOption}
                  onPress={() => {setMenuSelected("day")
                    setSomme(GetSomme(JsonOperation,currentdate,"day"))
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}> day</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ButtonOption}
                  onPress={() => {setMenuSelected("month")
                setSomme(GetSomme(JsonOperation,currentdate,"month"))
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}> month </Text>
                </TouchableOpacity>
              </View> 
              <View style = {styles.Bodysection}>
                {Somme.map((item)=>{
                    return(
                          <TouchableOpacity style = {styles.confirmebutton} onPress={()=> { alert(item.somme)}} > 
                              <Text style={{color : "white",fontSize :18, textAlign : "center"}}  > {item.ticket}</Text>
                           </TouchableOpacity>
                    )
                })}
              </View>
        </View>
    )
}
const styles = StyleSheet.create({
      card : {
    width : "100%" , 
    height : "85%" , 
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.5)', 
         margin  : 20 , 
         borderRadius : 20 , 
         marginRight : 20 , 
         display : "flex" , 
         textAlign : "center",
         paddingTop : 0,

  }, 
  ButtonOption: {
    padding: "2%",
    borderRadius: 20,
    boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.5)",
  },
    SettingMenu: {
    width: "100%",
    minHeight: "10%",
    marginTop: 10,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
    Bodysection: {
    width: "100%",
    display: "flex",
    height : "60%",
    flexDirection : "row" , 
    flexWrap : "wrap" ,
    marginTop : 20 , 
    gap : 20
  },
  confirmebutton : {
  padding : 10,
    borderRadius : 20 ,
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.5)',
        height  : 50,
         minWidth  : 100 , 
         marginLeft : 20
}
})