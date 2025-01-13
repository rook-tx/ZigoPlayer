import React, { useMemo } from 'react'
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { StackParamsList } from '../../navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import albums from '../../content/disco'

type Props = NativeStackScreenProps<StackParamsList, 'Album'>

function AlbumScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets()
  const { params } = route
  const renderAlbum = useMemo(() => albums[params.album], [params.album])

  return (
    <ImageBackground source={renderAlbum.bgImage} blurRadius={12}>
      <ScrollView
        contentContainerStyle={{
          ...styles.screen,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}>
        <Pressable onPress={() => navigation.popTo('Home')}>
          <Text>Home</Text>
        </Pressable>
        <View style={styles.content}>
          <View style={styles.cover}>
            <Image source={renderAlbum.cover} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
  },
  content: {
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

export default AlbumScreen
