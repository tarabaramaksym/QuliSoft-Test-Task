import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';
import BaseText from './BaseText';

const ImageCard = ({ navigation, image }) => {

  return (

    <TouchableOpacity style={styles.imageContainer} onPress={() => { navigation.navigate('Image', image); }}>

      <View style={styles.image}>
        <Image source={{ uri: image.urls.regular }}
          style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
      </View>

      <View style={styles.imageInfoContainer}>
        <BaseText style={{ ...styles.boldCenterText, color: Colors.primary, }}>by:</BaseText>
        <BaseText style={{ ...styles.boldCenterText, color: Colors.linkColor }}> {image.user.name}</BaseText>
      </View>

    </TouchableOpacity >
  );
}

export default ImageCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: '32%',
    height: 250,
    backgroundColor: Colors.white,
    padding: 2,
    marginBottom: 12
  },
  image: {
    flex: 5, justifyContent: 'center'
  },
  imageInfoContainer: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8
  },
  boldCenterText: {
    ...Fonts.boldText, textAlign: 'center'
  }
});