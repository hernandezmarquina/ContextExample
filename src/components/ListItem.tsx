import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../AppContext';

interface IListItemProps {
  title: string;
  subtitle: string;
}

const ListItem = (props: IListItemProps) => {
  const context = useContext(AppContext);

  return (
    <View
      style={[styles.container, {backgroundColor: context.theme.alterColor}]}>
      <View
        style={[
          styles.indicator,
          {backgroundColor: context.theme.secondaryColor},
        ]}
      />
      <Text style={[styles.title, {color: context.theme.alterTextColor}]}>
        {props.title}
      </Text>
      <Text style={{color: context.theme.alterTextColor2}}>
        {props.subtitle}
      </Text>
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
    height: 10,
    width: 10,
  },
});

export default ListItem;
