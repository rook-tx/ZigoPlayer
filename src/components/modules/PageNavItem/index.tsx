import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type PageNavItemProps = {
  item: {
    title: string
    to: string
  }
  color: string
}

function PageNavItem({ item, color }: PageNavItemProps) {
  return (
    <View style={styles.item}>
      <Pressable
        // to={{ name: item.to }}
        style={{
          ...styles.link,
        }}>
        <Text
          style={{
            color: color,
          }}>
          {item.title}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {},
  link: {},
})

export default PageNavItem
