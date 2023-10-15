import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './TodosList.style';

const TodosList = ({todos, handleDone, handleDeleteTodo}) => {
  return (
    <View style={styles.container}>
      {todos.map(todo => {
        return (
          <TouchableOpacity key={todo.id} style={styles.button}>
            <Text
              style={todo.isDone ? styles.completed : styles.todos}
              onLongPress={() => {
                handleDeleteTodo(todo.id);
              }}
              onPress={() => {
                console.log('sedat');
                handleDone(todo.id);
              }}>
              {todo.todo}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TodosList;
