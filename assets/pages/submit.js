import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Button, onPress } from "react-native";

export default function SubmitEquipment(props){

    // const [workerName, equipmentName, safetyDocs, incidentInfo] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.title}><Text style={styles.titletext}>User's Equipments</Text></View>
            <View style={styles.equip1}><Text style={{fontSize: 18, marginTop: 10}} >Equipment1</Text></View>
            <View style={styles.equip2}><Text style={{fontSize: 18, marginTop: 10}}>Equipmet2</Text></View>
            <View style={styles.equip3}><Text style={{fontSize: 18, marginTop: 10}}>Equipmet3</Text></View>
            <View style={styles.equip4}><Text style={{fontSize: 18, marginTop: 10}}>Equipmet4</Text></View>
            <Button title="Submit" backgroundColor="blue" color="orange" accessibilityLabel="Tap to Decrypt Data" onPress={() => {Alert.alert('Successfully submitted!');}}/>  
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 0.4
    },
    titletext: {
        marginTop: 70,
        marginLeft: 75,
        alignItems: "center",
        fontSize: 30,

    },
    equip1: {
        flex: 0.5,
        backgroundColor: "#E6E6FA",
        fontSize: 60,
        alignItems: "center",
    },
    equip2: {
        flex: 0.5,
        backgroundColor: "#FFF0F5",
        fontSize: 60,
        alignItems: "center"
    },
    equip3: {
        flex: 0.5,
        backgroundColor: "#E6E6FA",
        fontSize: 60,
        alignItems: "center"
    },
    equip4: {
        flex: 0.5,
        backgroundColor: "#FFF0F5",
        fontSize: 60,
        alignItems: "center"
    },
    submitbutton: {
        color: "black"
    }
})