import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";

export default function Incident(props){

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Incident ID:
                </Text>
                <Text style = {styles.rowInput}>
                    {props.id}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Created by:
                </Text>
                <Text style = {styles.rowInput}>
                    {props.created_by}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipmet id:
                </Text>
                <Text style = {styles.rowInput}>
                    {props.equipement_id}
                </Text>
            </View>
            <View style={styles.statusView}>
               <Text style = {props.status == 'pending' ? {color: 'green', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}}>{props.status}</Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.incidentsinfo}>"{props.content}"</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        width: Dimensions.get('window').width - 20,
        shadowColor: 'tomato',
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    row: {
        flexDirection: 'row',
        color: 'white'
    },
    rowInput: {
        margin: 7,
        color: 'white',
        fontSize: 14
    },
    rowTitle: {
        color: 'white',
        margin: 7,
        fontWeight: 'bold',
        fontSize: 16
    },
    statusView: {
        position: 'absolute',
        right: 5,
        top: '40%',
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'aliceblue',

    },
    incidentsinfo: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
        marginLeft: 5
    },
})
