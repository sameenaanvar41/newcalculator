import React from "react";
import { View,Text,TouchableOpacity, Image } from "react-native";
import style from "./style";

const CustomBotton =props =>{
    const {type,handleButtonpress,buttonText,icon}=props;
    return(
        <View>
   <TouchableOpacity 
           onPress={handleButtonpress}
           style={[style.button,
        {
            backgroundColor:
            type ==='primary' ? 'gray':
            'secondaryGreen',
        },
        ]}>
            {type !== 'primary' ? <Image source={icon} 
            style={style.icon}/>  :null}
            <Text style={
         {
            colors:type==='primary' ?  'white' : 'black',
            fontFamily:type==='primary' ? 'Bold' : 'Italic',
            fontSize: type === 'primary' ? 20 : 16,
   }}>
            {buttonText}</Text>
   </TouchableOpacity>
   </View>
    );
}

export default CustomBotton;