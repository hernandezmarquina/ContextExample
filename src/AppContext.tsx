/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState, useEffect} from 'react';
import avatar1 from './images/avatar1.png';

interface IAppContext {
  avatar: any;
  color: string;
  changeAvatar: (avatar: any) => void;
  changeColor: (color: string) => void;
}

const defaultContext: IAppContext = {
  avatar: avatar1,
  color: '#336EFF',
  changeAvatar: (avatar: any) => {},
  changeColor: (color: string) => {},
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

  return (
    <AppContext.Provider
      value={{
        changeAvatar: changeAvatarValue,
        changeColor: changeColorValue,
        avatar: state.avatar,
        color: state.color,
      }}>
      {children}
    </AppContext.Provider>
  );
};
