import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Lottie from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={styles.animationContainer}>

      <Lottie
        source={require("../assets/lottie/loader.json")}
        style={styles.animation}

        autoPlay
      />
    </View>
  );
}

export default Loader

const styles = StyleSheet.create({
  animationContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  animation: {

    width: 100,
    height: 100,
    marginTop: -75,

  },
});