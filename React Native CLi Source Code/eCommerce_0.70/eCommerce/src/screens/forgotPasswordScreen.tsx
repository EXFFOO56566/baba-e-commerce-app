import React, {useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import { appColorsType } from '../redux/types/types';
type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};
interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  theme: appColorsType;
  reduxLang: any;
}

const App = ({navigation, theme, reduxLang}: IProps) => {
  // Header Settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: reduxLang.Profile,
      headerStyle: {
        backgroundColor: theme.secondryBackgroundColor,
        shadowColor: 'transparent',
      },
      headerTintColor: theme.textColor,
    });
  }, [
    navigation,
    reduxLang.Profile,
    theme.secondryBackgroundColor,
    theme.textColor,
  ]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.primaryBackgroundColor},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  demoContainer: {
    padding: 40,
  },
});

const mapStateToProps = (state: any) => ({
  theme: state.configReducer.theme,
  reduxLang: state.configReducer.lang,
});


export default connect(mapStateToProps, null)(App);
