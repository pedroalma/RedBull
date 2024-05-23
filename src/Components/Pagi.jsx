import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity, ImageBackground} from "react-native"; 

export default props => {
    return(
        <>
        <View style={style.vies}>
    <View style={style.Ima}>
        <Image
        source={require('../img/redbull.png')}
        style={style.Img}
        />
    </View>
    </View>
    </>
    )
}
const style = StyleSheet.create({
    Ima:{
        alignItems:'center',
        marginTop:100,
    },
    vies:{

        backgroundColor:'#001A30',
    }
})