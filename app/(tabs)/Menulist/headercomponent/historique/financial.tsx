import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMMKV } from "react-native-mmkv";
import { GetTime } from "../../bodycomponent/Menubody";

const GetSomme = (jsonMalfoufTable,time,mode) => {
  if (jsonMalfoufTable == undefined) {
    return 0;
  } else {
    const jsObject = JSON.parse(jsonMalfoufTable);
    let somme = 0;
    jsObject.map((item) => {
      if(mode == "day"){
  if(item.date.month == time.month && item.date.day == time.day ){
            somme += item.somme
      }
      }
    else if (mode == "month"){
       if(item.date.month == time.month  ){
            somme += item.somme
      }
    }
    });
    return somme;
  }
};
const GetCharge = (jsonMalfoufTable,time,mode) => {
  if (jsonMalfoufTable == undefined) {
    return 0;
  } else {
    const jsObject = JSON.parse(jsonMalfoufTable);
    let somme = 0;
    jsObject.map((item) => {
      if(mode == "day") {
if(item.time.month == time.month && item.time.day == time.day ){
            somme +=Number( item.price)
      }
      }
      else if (mode == "month"){
        if(item.time.month == time.month  ){
            somme +=Number( item.price)
      }
      }
    });
    return somme;
  }
};
export default function Day() {
    const storage = useMMKV();
  const JsonOperation: string | undefined = storage.getString("Historque_Operation", );
    const JsonCharge: string | undefined = storage.getString("Charge" );
    const [MenuSelected, setMenuSelected] = useState("day");
  const currentdate = GetTime()
  const [Somme, setSomme] = useState(GetSomme(JsonOperation,currentdate,"day"));
  const [ Charge, setCharge] = useState(GetCharge(JsonCharge,currentdate,"day"));

  return (
    <View style={styles.card}>
      <View style={styles.SettingMenu}>
        <TouchableOpacity
          style={styles.ButtonOption}
          onPress={() => {setMenuSelected("day")
            setSomme(GetSomme(JsonOperation,currentdate,"day"))
             setCharge(GetCharge(JsonCharge,currentdate,"day"))
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}> day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonOption}
          onPress={() => {setMenuSelected("month")
             setSomme(GetSomme(JsonOperation,currentdate,"month"))
            setCharge(GetCharge(JsonCharge,currentdate,"month"))

          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}> month </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Bodysection}>
        <View style={styles.ItemStyle}>
          <Text style={{ color: "white", fontSize: 20 }} >
            reussite = {Somme}
          </Text>
        </View>
        <View style={styles.ItemStyle}>
          <Text style={{ color: "white", fontSize: 20 }}> charge = {Charge}</Text>
        </View>
        <View style={styles.ItemStyle}>
          <Text style={{ color: "white", fontSize: 20 }}> benfits =  {Number(Somme - Charge)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.5)",
    margin: 20,
    borderRadius: 20,
    marginRight: 20,
    display: "flex",
  },
  SettingMenu: {
    width: "100%",
    minHeight: "10%",
    marginTop: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  MenuOptions: {
    width: "100%",
    height: "12%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  ButtonOption: {
    padding: "2%",
    borderRadius: 20,
    boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.5)",
  },
  Bodysection: {
    width: "100%",
    display: "flex",
    justifyContent : "center" , 
    alignItems : "center" , 
    height : "60%",
  },
 ItemStyle : {
fontSize : 20 , 
marginTop : 15 ,
marginLeft : 10 ,
marginRight : 20, 
marginBottom : 20,
display : "flex" ,
gap : 10,
boxShadow: '5px 5px 5px 5px rgba(28, 26, 26, 0.5)',
padding: 20,
color :"white", 
borderRadius : 20
},
});
