import * as React from "react";
// import styles from "../StyleSheet";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';

function HomeScreen() {
  return (
    <View>
      <Text style={styles.bigBold}>
          {'INCIDENTS'}
      </Text>

      <Searchbar
          placeholder="Search for Incidents"
          // onChangeText={query => { this.setState({ firstQuery: query }); }}
          // value={firstQuery}
        />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Equipments!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function FirstScreen(props) {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Incidents" component={HomeScreen} />
          <Tab.Screen name="Equipments" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}