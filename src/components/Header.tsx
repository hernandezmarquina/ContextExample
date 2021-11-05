import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/avatar1.png')} style={styles.avatar} />
      <Text style={styles.name}>Duis aute irure</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 60,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#336EFF',
  },
  name: {
    marginLeft: 8,
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
  },
  avatar: {height: 40, width: 40, borderRadius: 20, backgroundColor: 'red'},
});

export default Header;
