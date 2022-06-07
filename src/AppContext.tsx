/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState, useEffect} from 'react';
import avatar1 from './images/avatar1.png';
import lightTheme from './themes/lightTheme';
import {ITheme} from './themes/theme';

interface IAppContext {
  avatar: any;
  color: string;
  theme: ITheme;
  changeAvatar: (avatar: any) => void;
  changeColor: (color: string) => void;
  changeTheme: (theme: ITheme) => void;
}

const defaultContext: IAppContext = {
  avatar: avatar1,
  color: '#336EFF',
  theme: lightTheme,
  changeAvatar: (avatar: any) => {},
  changeColor: (color: string) => {},
  changeTheme: (theme: ITheme) => {},
};

export const AppContext = createContext<IAppContext>(defaultContext);

export const AppProvider = ({children}) => {
  const [state, setState] = useState<IAppContext>(defaultContext);

  const changeAvatarValue = (avatar: any) => {
    setState({...state, avatar});
  };

  const changeColorValue = (color: string) => {
    setState({...state, color});
  };

  const changeThemeValue = (theme: ITheme) => {
    setState({...state, theme});
  };

  return (
    <AppContext.Provider
      value={{
        changeAvatar: changeAvatarValue,
        changeColor: changeColorValue,
        changeTheme: changeThemeValue,
        avatar: state.avatar,
        color: state.color,
        theme: state.theme,
      }}>
      {children}
    </AppContext.Provider>
  );
};
