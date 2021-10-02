import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import {Route} from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';

import Incidents from './assets/pages/incidents.js';


export default function App() {

  let [incident, worker_name, equipment_name, safety_docs, incident_info] = useState();

  return (
    <Route path="/"><Incidents ></Incidents></Route>
  );
}

