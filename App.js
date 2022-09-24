import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,KeyboardAvoidingView, TextInput,TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React,{useState} from 'react';
import { Keyboard } from 'react-native-web';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const HandleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

          <View style={styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item,index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}  />

                </TouchableOpacity>
              )
              
            })
          }
            {/* <Task text={'Task 1'} />
            <Task text={'Task 2'} /> */}
          </View>
      </View>
      
        {/* Write a task */}
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write a task'} onChangeText={text => setTask(text)} value={task} />
        
          <TouchableOpacity onPress={() => HandleAddTask()}> 
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
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'
  },
  items: {
    marginTop: 30,
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth:1,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: "#FFF",
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth:1,
},
addText:{},
  
});
