import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 17,
    borderRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  itemText: {
    maxWidth: '100%',
  },
  circular: {
    width: 18,
    height: 18,
    borderColor: '#4B9E94',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default Task;