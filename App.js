import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import Incidents from './assets/pages/incidents.js';
import SubmitEquipment from './assets/pages/submit.js';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  let [incident, worker_name, equipment_name, safety_docs, incident_info] = useState();

  return (
    // <Incidents></Incidents>
    <SubmitEquipment></SubmitEquipment>
  );
}