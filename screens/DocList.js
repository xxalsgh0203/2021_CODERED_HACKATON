import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, ScrollView, Modal, TouchableHighlightBase, StyleSheet } from "react-native"
import {  fetchSafetyDocs } from "../Api/api";
import Document from '../components/document';

class DocList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            docs : [], 
        };
    }

    RetrievedDocs = (recievedData) => {
        this.setState((prevState)=>({
            docs: (prevState.docs = recievedData), 
        }));  
    }
    async componentDidMount(){
        await fetchSafetyDocs(this.RetrievedDocs); 
    }
    render(){
        return(
            <View  style = {styles.container}>
                <ScrollView style = {styles.scrollList} >
                    {this.state.docs.map(
                        (item, index)=>{
                            return(
                                <View key = {index}>
                                    <Document id = {item.id} 
                                    name = {item.name}/>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 100,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default DocList; 