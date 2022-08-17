import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


const CategoriesMealScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
        <Text>CategoriesMealScreen</Text>
        <Button
        onPress={() => navigation.navigate("MealDetails")}
        title="MealDetails"
      />
        </View>
    );
    }

    const styles = StyleSheet.create({
        screen:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
    });

    export default CategoriesMealScreen;