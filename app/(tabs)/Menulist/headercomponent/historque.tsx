import { useContext } from "react";
import { Text, View } from "react-native";
import { Menucontext } from "..";


export default function Historuqe (){
const data = useContext(Menucontext)
console.log(data)
    return(
        <View style = {{width  :"100%" , paddingBottom : 100 , display : 'flex', justifyContent: "center", alignItems : "center" }}>
                   <Text>
                     hello historque
                   </Text>
                 
                 </View> 
    )
}