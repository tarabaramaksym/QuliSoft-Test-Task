import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import BaseText from '../components/BaseText'
import Fonts from '../styles/Fonts'

const ImageScreen = ({ navigation, route }) => {

  return (
    <View style={styles.screenContainer}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, padding: 15 }}>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: route.params.urls.regular }}></Image>
        </View>

        <BaseText style={{ color: Colors.primary, ...Fonts.boldText, ...Fonts.largeText }}>
          by:
          <BaseText style={{ color: Colors.linkColor, ...Fonts.boldText, ...Fonts.largeText }}> {route.params.user.username}</BaseText>
        </BaseText>
      </View>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    marginBottom: 10
  },
  image: {
    flex: 6,
    resizeMode: 'center',
    width: null,
    height: null
  }
})