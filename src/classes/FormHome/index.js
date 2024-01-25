import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

function FormHome ({navigation}) {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodoData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const handleBottomButtonPress = () => {
    // Navigate to another screen when the bottom button is pressed
    navigation.navigate('FormAdd');
  };
  return (
    <ScrollView
    contentContainerStyle={{alignItems:'center', justifyContent:'center'}} 
    style={styles.container}>
      {todoData.map((todo) => (
        <View key={todo.id} style={styles.todoBox}>
          <Text style={styles.todoTitle}>{todo.title}</Text>
          <Text>{`Status: ${todo.completed ? 'Completed' : 'Not Completed'}`}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('FormAdd')}
      >
        <Text style={styles.bottomButtonText}>AddPost Screen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  bottomButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16
  },
  bottomButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  todoBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default FormHome;