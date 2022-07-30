import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';


const Header = ({ navigation, showBackBtn = true }) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        {showBackBtn ? <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <Text style={styles.headerTitle}>{'<'}</Text>
        </TouchableOpacity> : null}
      </View>
      <Text
        style={styles.headerTitle}>
        theGallery.
      </Text>

    </View>
  )
}

export default Header;

const styles = StyleSheet.create({

  headerContainer: {
    backgroundColor: Colors.secondary,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    ...Fonts.logoFont,
    color: Colors.primary,
    textAlign: 'right'
  }
});
