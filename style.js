import {StyleSheet, Dimensions} from 'react-native'


const {width, height} = Dimensions.get('screen')
const style = StyleSheet.create ({
    container:
    {flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:200
    },
    textinput:
    {   
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'right',
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
     },
    buttonview:
    {
        flexDirection: 'row',
        marginBottom: 10,
    },
    button:
    {
        flex: 1,
        margin: 5,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width:100},
    buttontext:{
        fontSize: 24,
        color: 'white',
        }

})
export default style;