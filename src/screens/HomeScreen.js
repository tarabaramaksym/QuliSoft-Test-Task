import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fonts from '../styles/Fonts'
import { useSelector, useDispatch } from 'react-redux'
import { selectSelectedImage, setSelectedImage } from '../redux/slices/imagesSlice'
import ImageList from '../components/ImageList'
import Header from '../components/Header'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.screenContainer}>
      <Header navigation={navigation} showBackBtn={false} />
      <View>
        <ImageList navigation={navigation} />
      </View >
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  }
})