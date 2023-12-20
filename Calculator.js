import React, { useState } from "react";
import { View,Text ,TouchableOpacity, Alert } from "react-native";
import style from "./style";
import { TextInput } from "react-native";
const Calculator = () => {
const [display,setdispaly] = useState('');
  const handleNumber = (item) => {
  setdispaly((prevDisplay) => prevDisplay + item);
  }
const handleclear = () => {
  setdispaly('');
}
const handlepress = () =>{
   if(display=='1+3+9')
  {
  Alert.alert(
    'HELLO WORLD.',
  )
  }else{
   const result = eval(display);
   setdispaly(String(result));
  }
}
return (
 <View style={style.container}>
<TextInput
        value={display}
        style={style.textinput}   
        placeholder="0"
        keyboardType="numeric"
        editable={false}

      />
<View style={style.buttonview}>
  <TouchableOpacity onPress={() => handleclear('c')} style={style.button}>
  <Text style={style.buttontext}>c</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleNumber('+')} style={style.button}>
  <Text style={style.buttontext}>+/-</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleNumber('%')} style={style.button}>
  <Text style={style.buttontext}>%</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleNumber('/')} style={style.button}>
  <Text style={style.buttontext}>/</Text>
  </TouchableOpacity>
</View>

<View style={style.buttonview}>
  <TouchableOpacity onPress={() => handleNumber(7)} style={style.button}>
  <Text style={style.buttontext}>7</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleNumber(8)} style={style.button}>
  <Text style={style.buttontext}>8</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleNumber(9)} style={style.button}>
  <Text style={style.buttontext}>9</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleNumber('*')} style={style.button}>
  <Text style={style.buttontext}>*</Text>
  </TouchableOpacity>
</View>

<View style={style.buttonview}>
   <TouchableOpacity onPress={() => handleNumber(4)} style={style.button}>
   <Text style={style.buttontext}>4</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber(5)} style={style.button}>
   <Text style={style.buttontext}>5</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber(6)} style={style.button}>
   <Text style={style.buttontext}>6</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber('-')} style={style.button}>
   <Text style={style.buttontext}>-</Text>
   </TouchableOpacity>
</View>
<View style={style.buttonview}>
   <TouchableOpacity onPress={() => handleNumber(1)} style={style.button}>
   <Text style={style.buttontext}>1</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber(2)} style={style.button}>
   <Text style={style.buttontext}>2</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber(3)} style={style.button}>
   <Text style={style.buttontext}>3</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber('+')} style={style.button}>
   <Text style={style.buttontext}>+</Text>
   </TouchableOpacity>
</View>
<View style={style.buttonview}>
   <TouchableOpacity onPress={() => handleNumber('.')} style={style.button}>
   <Text style={style.buttontext}>.</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber(0)} style={style.button}>
   <Text style={style.buttontext}>0</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handleNumber('00')} style={style.button}>
   <Text style={style.buttontext}>00</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => handlepress(display)} style={style.button}>
   <Text style={style.buttontext}>=</Text>
   </TouchableOpacity>
</View>
</View>
);
};
export default Calculator;