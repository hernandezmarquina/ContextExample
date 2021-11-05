import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';

const SettingsScreen = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4];
  const colors = ['#336EFF', '#FF5733', '#C70039', '#900C3F', '#581845'];

  const onAvatarPress = (image: string) => {};
  const onColorPress = (image: string) => {};

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Selecciona tu avatar</Text>
        <View style={styles.horizontalContainer}>
          {avatars.map((avatar, index) => {
            return (
              <Avatar
                isSelected={index === 0}
                content={avatar}
                onPress={() => {
                  onAvatarPress(avatars[index]);
                }}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Elige tu color favorito</Text>
        <View style={styles.horizontalContainer}>
          {colors.map((color, index) => {
            return (
              <ColorView
                isSelected={index === 0}
                content={color}
                onPress={() => {
                  onColorPress(colors[index]);
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
interface ItemProps {
  content: any;
  onPress: () => void;
  isSelected: boolean;
}
const Avatar = (props: ItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        styles.avatarItemContainer,
        {borderColor: props.isSelected ? 'blue' : 'white'},
      ]}
      onPress={props.onPress}>
      <Image style={styles.avatar} source={props.content} />
    </TouchableOpacity>
  );
};
const ColorView = (props: ItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        styles.colorItemContainer,
        {borderColor: props.isSelected ? 'blue' : 'white'},
      ]}
      onPress={props.onPress}>
      <View style={[styles.colorView, {backgroundColor: props.content}]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  horizontalContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  avatarItemContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  cardContainer: {
    padding: 16,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
  },
  colorView: {
    height: 30,
    width: 30,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  colorItemContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default SettingsScreen;
