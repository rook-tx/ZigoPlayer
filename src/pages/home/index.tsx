import React from 'react'
import { Button, ImageBackground, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamsList } from '../../navigation'

type Props = NativeStackScreenProps<StackParamsList, 'Home'>

function HomeScreen({ navigation }: Props) {
  return (
    <ImageBackground
      source={require('../../assets/tracks/naam-bg.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View style={styles.screen}>
        <Button
          onPress={() => navigation.navigate('Discography')}
          title="Discography"
        />
        <Button
          onPress={() => navigation.navigate('Album', { album: 'tihie' })}
          title="Album"
        />
        <Button onPress={() => navigation.navigate('Player')} title="Player" />
        <Button onPress={() => navigation.navigate('Band')} title="Band" />
      </View>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
