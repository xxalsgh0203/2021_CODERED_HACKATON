import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Incidents(props){
    return (
        <View style={{ flex: 1 }}>
            <View style={{flex: 1, backgroundColor: "grey"}}><Text>Incident show page</Text></View>
            <View style={{flex: 1, backgroundColor: "tomato"}}><Text>Created by(worker name)</Text></View>
            <View style={{flex: 1, backgroundColor: "grey"}}><Text>Equipmet name</Text></View>
            <View style={{flex: 1, backgroundColor: "tomato"}}><Text>Safty docs</Text></View>
            <View style={{flex: 1, backgroundColor: "grey"}}><Text>Describe the incidents</Text></View>
        </View>
    );
}