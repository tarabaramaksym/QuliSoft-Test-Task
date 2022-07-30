import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fonts from '../styles/Fonts'

const BaseText = props => {
  return <Text style={{ ...Fonts.baseFont, ...props.style }}>{props.children}</Text>
}

export default BaseText

