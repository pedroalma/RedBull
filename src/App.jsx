import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";
import Pagi from "./Components/Pagi";

export default props=>{
    return(
        <SafeAreaView style={style.con}> 
            <Pagi/>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    con:{
        backgroundColor:'#001A30',
    }
})