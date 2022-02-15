import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Text from '../Text'
import colors from '../../config/colors'

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>

          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.detailContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
          </View>

          <MaterialCommunityIcons name="chevron-right" color={colors.medium} size={25} />

        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItem;
