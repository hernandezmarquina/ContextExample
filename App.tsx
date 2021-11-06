import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {AppProvider} from './src/AppContext';
import TabsContainer from './src/TabsContainer';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppProvider>
        <TabsContainer />
      </AppProvider>
    </SafeAreaView>
  );
}
