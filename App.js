import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Keyboard,  } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState();
  const [addTask , setAddTask] = useState([]);
  const handleTask = () => {
    Keyboard.dismiss()
    setAddTask([...addTask,task]);
    setTask(null);
  }
  const completeTask = (index) =>{
    let copyTask = [...addTask];
    copyTask.splice(index,1)
    setAddTask(copyTask)
  }
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* Tasks Here */}
          {
            addTask.map((task, index) => <TouchableOpacity key={index} onPress={()=>completeTask(index)}><Task  task={task}></Task></TouchableOpacity> )
          }
        </View>
      </View>
      {/* Write Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={(task)=>setTask(task)} />
        <TouchableOpacity onPress={()=> handleTask()}>
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
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: { paddingTop: 80, paddingHorizontal: 20 },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingRight:10,
    paddingLeft:30,
    width: 250,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderWidth:1,
    borderColor: '#C0C0C0',
  },
  addWrapper: {
    width: 60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor: '#C0C0C0'
  },
  addText: {},
});
