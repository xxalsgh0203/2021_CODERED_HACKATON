import { AntDesign } from '@expo/vector-icons'; 
import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { AddEquipmentToFav, fetchEquipments, isFave } from '../Api/api';

export default function Equipment(props){
    let [status, setStatus] = React.useState("available");
    let [iconName, setIconName] = React.useState("staro"); 
    EquipmentStatus(); 
    function EquipmentStatus(){
        if (!props.status){
            setStatus('unavailable')
        }
        
    }

    const toggleFave = () => {
        if(props.fave){
            setIconName("staro")
            props.toggleFavorite(props.id); 
        }
        else{

            setIconName("star")
            props.toggleFavorite(props.id); 
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipment ID: 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.id}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipment Name 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.name}
                </Text>
            </View>
            <View style={styles.row} >
                 <Text style = {status == 'available' ? {margin: 5, color: 'green'} : {margin: 5, color: 'red'}}>{status}</Text>
            </View>
            <View style={styles.isFavView}>
                <TouchableOpacity onPress = {toggleFave}>
                    <AntDesign name={iconName} size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        backgroundColor: 'lightgrey',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10, 
        width: Dimensions.get('window').width - 20,
    },
    row: {
        flexDirection: 'row', 
    },
    rowInput: {
        marginLeft: 5, 
        
    },
    rowTitle: {
        color: 'gray', 
        marginLeft: 5, 

    },
    isFavView: {
        position: 'absolute', 
        right: 10,
        top: '25%',   
    },

    
    incidentsinfo: {
        alignSelf: 'center',
        fontSize: 15,
    }
})
