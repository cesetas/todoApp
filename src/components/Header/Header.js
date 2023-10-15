import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './Header.style';

const Header = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.counter}>{count}</Text>
    </View>
  );
};

export default Header;
