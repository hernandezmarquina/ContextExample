import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const DATA = [
  {
    id: 'bd7acbea',
    title: 'Lorem ipsum dolor sit amet',
    subtitle:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3ac68afc',
    title: 'Sed ut perspiciatis unde',
    subtitle:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
  },
  {
    id: '58694a0f',
    title: 'At vero eos et accusamus',
    subtitle:
      'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
  {
    id: 'bd7acbei',
    title: 'Lorem ipsum dolor sit amet',
    subtitle:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3ac68afo',
    title: 'Sed ut perspiciatis unde',
    subtitle:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
  },
  {
    id: '58694a0n',
    title: 'At vero eos et accusamus',
    subtitle:
      'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
];

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <ListItem title={item.title} subtitle={item.subtitle} />
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
