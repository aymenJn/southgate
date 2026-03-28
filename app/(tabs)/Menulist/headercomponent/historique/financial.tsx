import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMMKV } from "react-native-mmkv";
import { GetTime } from "../../bodycomponent/Menubody";

const GetSomme = (jsonMalfoufTable,time) => {
  if (jsonMalfoufTable == undefined) {
    return 0;
  } else {
    const jsObject = JSON.parse(jsonMalfoufTable);
    let somme = 0;
    jsObject.map((item) => {
      if(item.date.month == time.month && item.date.day == time.day ){
            somme += item.somme
      }
    });
    return somme;
  }
};
export default function Day() {
    const storage = useMMKV();
  const JsonOperation: string | undefined = storage.getString("Historque_Operation", );
  const [MenuSelected, setMenuSelected] = useState("financial");
  const currentdate = GetTime()
  const [Somme, setSomme] = useState(GetSomme(JsonOperation,currentdate));

  return (
    <View style={styles.card}>
      <View style={styles.SettingMenu}>
        <TouchableOpacity
          style={styles.ButtonOption}
          onPress={() => setMenuSelected("financial")}
        >
          <Text style={{ color: "white", fontSize: 20 }}> day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonOption}
          onPress={() => setMenuSelected("operation")}
        >
          <Text style={{ color: "white", fontSize: 20 }}> week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonOption}
          onPress={() => setMenuSelected("stock")}
        >
          <Text style={{ color: "white", fontSize: 20 }}> month </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Bodysection}>
        <View style={styles.section}>
          <Text >
            Somme = {Somme}
          </Text>
        </View>
        <View style={styles.section}>
          <Text> Somme = {Somme}</Text>
        </View>
        <View style={styles.section}>
          <Text> {Somme}</Text>
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
    marginTop: 30,
  },
  section: {
  },
});
