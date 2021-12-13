import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '../Task';
import moment from 'moment';

export default function App() {
  const [task, setTask] = useState();
  const [currentDate, setCurrentDate] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    var date = moment().utcOffset('+05:30').format('MMM DD YYYY');
    setCurrentDate(date);
  }, []);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>{currentDate}</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index) }>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: { 
      fontSize: 15,
      fontWeight: 'bold',
       
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'relative',
      bottom: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginLeft: 2,
      backgroundColor: '#FFF',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 0.5,
      width: 270,
    },
    addWrapper: {
      width: 60,
      height: 60,
      marginLeft: -10,
      backgroundColor: '#4B9E94',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 0.5,
    },
    textOpaque: {
        opacity: 0.5,
    },
    addText: {
        color: 'white',
        fontSize: 30,
    },
})