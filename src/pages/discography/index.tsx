import React from 'react'
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { StackParamsList } from '../../navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import albums from '../../content/disco'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = NativeStackScreenProps<StackParamsList, 'Discography'>

export const albumKeys = ['tihie', 'persuasive', 'foal', 'fox']

function DiscographyScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets()
  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.screen,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      {albumKeys.map((album, idx) => (
        <View key={idx}>
          <Pressable onPress={() => navigation.navigate('Album', { album })}>
            <View style={styles.cover}>
              <Image source={albums[album].cover} style={styles.image} />
            </View>
            <Text>{albums[album].title}</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  cover: {
    aspectRatio: 1,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
})

export default DiscographyScreen
