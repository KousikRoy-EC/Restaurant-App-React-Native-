import React,{useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from "react-native";
import {Categories} from "../data/dummy-data";


const CategoriesScreen = ({ navigation }) => {
    const DisplayGridItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={()=>{navigation.navigate('CategoriesMealScreen')}}>
            <View>
                <Text>{item.title}</Text>
            </View>
            </TouchableOpacity>
        );
    }

  return (
   <FlatList numColumns={2} data={Categories} renderItem={DisplayGridItem}/>
  );
};


CategoriesScreen['navigationOptions'] = {
    headerTitle: "Meal Categories",
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: "#512DA8"
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
    }
});

export default CategoriesScreen;
