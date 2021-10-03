import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

const Screen_3 = () => (
  <View style={styles.container}>
    <Text style={styles.title}>User's Equipments</Text>
    <ImageBackground source={{
          uri: 'https://s3-symbol-logo.tradingview.com/conocophillips--600.png',
        }} style={styles.logo}>
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>Equipment 1</Text>
                <Text style={styles.txt}>Equipment 2</Text>
                <Text style={styles.txt}>Equipment 3</Text>
                <Text style={styles.txt}>Equipment 4</Text>
                <Text style={styles.btn}>+</Text>
            </View>
            
        </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 420,
    paddingTop: 26,
  },
  title: {
    marginTop: 36,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'black'
  },
  logo: {
    flex: 1,
   width: null,
   height: null,
  },
  txtContainer: {
      padding: 30,
      margin: 20,
  },
  txt: {
      color: 'white',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 6,
  },
  btn: {
      color: 'white',
      borderColor: 'red',
      borderRadius: 50,
      fontSize: 70,
      textAlign: 'center',
  }
});

export default Screen_3;