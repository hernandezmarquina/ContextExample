import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../AppContext';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import darkTheme from '../themes/DarkTheme';
import lightTheme from '../themes/lightTheme';

const SettingsScreen = () => {
  const context = useContext(AppContext);

  const avatars = [avatar1, avatar2, avatar3, avatar4];
  //const colors = ['#336EFF', '#FF5733', '#C70039', '#900C3F', '#581845'];
  const themes = [
    {id: 0, theme: lightTheme},
    {id: 1, theme: darkTheme},
  ];

  return (
    <View
      style={[styles.container, {backgroundColor: context.theme.primaryColor}]}>
      <View
        style={[
          styles.cardContainer,
          {backgroundColor: context.theme.alterColor},
        ]}>
        <Text style={[styles.title, {color: context.theme.alterTextColor}]}>
          Selecciona tu avatar
        </Text>
        <View style={styles.horizontalContainer}>
          {avatars.map((avatar, index) => {
            return (
              <Avatar
                key={`avatar_${index}`}
                isSelected={avatar === context.avatar}
                content={avatar}
                onPress={() => {
                  context.changeAvatar(avatars[index]);
                }}
              />
            );
          })}
        </View>
      </View>
      <View
        style={[
          styles.cardContainer,
          {backgroundColor: context.theme.alterColor},
        ]}>
        <Text style={[styles.title, {color: context.theme.alterTextColor}]}>
          Elige tu color favorito
        </Text>
        <View style={styles.horizontalContainer}>
          {themes.map((theme, index) => {
            return (
              <ColorView
                key={`color_${index}`}
                //isSelected={color === context.color}
                isSelected={theme.id === context.theme.id}
                content={theme.theme.secondaryColor}
                onPress={() => {
                  context.changeTheme(theme.theme);
                  //context.changeColor(colors[index]);
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
  const context = useContext(AppContext);
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        styles.avatarItemContainer,
        {
          borderColor: props.isSelected
            ? context.theme.secondaryColor
            : context.theme.alterColor,
        },
      ]}
      onPress={props.onPress}>
      <Image style={styles.avatar} source={props.content} />
    </TouchableOpacity>
  );
};
const ColorView = (props: ItemProps) => {
  const context = useContext(AppContext);
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        styles.colorItemContainer,
        {
          borderColor: props.isSelected
            ? context.theme.secondaryColor
            : context.theme.alterColor,
        },
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
