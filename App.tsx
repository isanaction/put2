import React from 'react';
import { activateKeepAwake } from 'expo-keep-awake';
import RootNav from './components/RootNav';
import { UserContextProvider } from './contexts/UserContext';
import { TrashContextProvider } from './contexts/TrashContext';


const App: React.FC = () => {

  if (__DEV__) {
    activateKeepAwake();
  }

  return (
    <UserContextProvider>
      <TrashContextProvider>
      <RootNav />
      </TrashContextProvider>
    </UserContextProvider>
  );
};

export default App;
