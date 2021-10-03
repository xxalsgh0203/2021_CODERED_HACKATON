import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Incidents(props){

    // const [workerName, equipmentName, safetyDocs, incidentInfo] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.15 }}><Text></Text></View>
            <View style={styles.workername}><Text style={{fontSize: 18, marginTop: 10}} >Created by (worker name)</Text></View>
            <View style={styles.equipmentname}><Text style={{fontSize: 18, marginTop: 10}}>Equipmet name</Text></View>
            <View style={styles.safetydocs}><Text style={{fontSize: 18, marginTop: 10}}>Safty docs</Text></View>
            <View style={styles.incidentsinfo}><Text style={{fontSize: 18, marginTop: 10}}>Describe the incidents</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    workername: {
        flex: 0.5,
        backgroundColor: "#E6E6FA",
        fontSize: 60,
        alignItems: "center",
    },
    equipmentname: {
        flex: 0.5,
        backgroundColor: "#FFF0F5",
        fontSize: 60,
        alignItems: "center"
    },
    safetydocs: {
        flex: 0.8,
        backgroundColor: "#E6E6FA",
        fontSize: 60,
        alignItems: "center"
    },
    incidentsinfo: {
        flex: 1,
        backgroundColor: "#FFF0F5",
        fontSize: 60,
        alignItems: "center"
    }
})