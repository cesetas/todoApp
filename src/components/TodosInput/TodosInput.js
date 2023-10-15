import React, {useState} from 'react';
import {Button, TextInput, View, TouchableOpacity, Text} from 'react-native';
import styles from './TodosInput.style';

const TodosInput = ({handleTodo}) => {
  const [todo, setTodo] = useState('');

  const handleInput = text => {
    setTodo(text);
  };
  const saveTodo = () => {
    if (todo.trim() !== '') {
      handleTodo({
        id: Date.now(),
        todo: todo,
        isDone: false,
      });
      setTodo(''); // Clear the input
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleInput}
        placeholder="Yapılacak..."
        value={todo}
      />
      <TouchableOpacity style={styles.button} onPress={saveTodo}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodosInput;
