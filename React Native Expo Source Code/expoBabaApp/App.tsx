import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import StartApp from './src/router/index';
import {store, persistor} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <View style={styles.container}>
          <StartApp />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
