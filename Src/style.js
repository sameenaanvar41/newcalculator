import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')
const style = StyleSheet.create ({
   button :{
    padding: width * 0.02,
     borderRadius: 15,
     borderRadius: 8,
     justifyContent: 'center',
     alignItems: 'center',
     marginVertical: width * 0.025,
     flexDirection: 'row'
   },
icon: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: width * 0.025
}
})
export default style;