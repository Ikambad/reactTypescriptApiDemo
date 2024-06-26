import React from 'react';
import Rootnavigator from './src/utils/Rootnavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Rootnavigator />
    </NavigationContainer>
  );
}
export default App;
