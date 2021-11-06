import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../AppContext';

const Header = () => {
  const context = useContext(AppContext);
  return (
    <View style={[styles.container, {backgroundColor: context.color}]}>
      <Image source={context.avatar} style={styles.avatar} />
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
