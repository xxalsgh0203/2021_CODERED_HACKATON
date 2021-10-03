import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Incidents(props){

    // const [workerName, equipmentName, safetyDocs, incidentInfo] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.15 }}><Text></Text></View>
            <View style={styles.workername}><Text>Created by(worker name)</Text></View>
            <View style={styles.equipmentname}><Text>Equipmet name</Text></View>
            <View style={styles.safetydocs}><Text>Safty docs</Text></View>
            <View style={styles.incidentsinfo}><Text>Describe the incidents</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    workername: {
        flex: 1,
        backgroundColor: "grey",
        fontSize: 60
    },
    equipmentname: {
        flex: 1,
        backgroundColor: "gray",
        fontSize: 60
    },
    safetydocs: {
        flex: 1,
        backgroundColor: "grey",
        fontSize: 60
    },
    incidentsinfo: {
        flex: 1,
        backgroundColor: "gray",
        fontSize: 60
    }
})