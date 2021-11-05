import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IListItemProps {
  title: string;
  subtitle: string;
}

const ListItem = (props: IListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  indicator: {
    position: 'absolute',
    top: 12,
    right: 12,
    borderRadius: 5,
    backgroundColor: '#336EFF',
    height: 10,
    width: 10,
  },
});

export default ListItem;
