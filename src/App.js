import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodosList from './components/TodosList';
import TodosInput from './components/TodosInput';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodo = newTodo => {
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };
  const handleDone = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isDone: !todo.isDone};
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  const handleDeleteTodo = id => {
    console.log('todos', todos);
    const newTodos = todos.filter(todo => todo.id !== id);
    console.log('newtodos', newTodos);
    setTodos(newTodos);
  };
  const todosCounter = todos.filter(todo => todo.isDone == false).length;
  // const todosCounter2 = todos.filter(todo => todo.isDone == false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header count={todosCounter} />
        <TodosList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleDone={handleDone}
        />
      </View>
      <View style={styles.footer}>
        <TodosInput handleTodo={handleTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',

    backgroundColor: '#102027',
  },
  header: {
    flex: 1,
    padding: 5,
  },
  footer: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // backgroundColor: 'orange', //'#001803',
  },
});
export default App;
