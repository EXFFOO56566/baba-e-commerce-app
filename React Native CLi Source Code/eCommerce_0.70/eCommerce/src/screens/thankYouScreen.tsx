import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import CustomBtn from '../components/customBtn';
import { appColorsType } from '../redux/types/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { HEIGHT } from '../components/config';
type RootStackParamList = {
  Home: undefined;
};
export interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  theme: appColorsType;
  reduxLang: any;
}

const AddAddressScreen = ({ navigation, theme, reduxLang }: IProps) => {
  /////////////////// Header Settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: reduxLang.ThankYou,
      headerStyle: {
        backgroundColor: theme.secondryBackgroundColor,
        shadowColor: 'transparent',
      },
      headerTintColor: theme.textColor,
    });
  }, [navigation, theme.secondryBackgroundColor, theme.textColor]);
  ///////////////////

  return (

      <ScrollView
        style={[styles.scrollView,{backgroundColor: theme.primaryBackgroundColor}]}
        contentContainerStyle={styles.scrollViewContainerStyle}
        showsVerticalScrollIndicator={false}>

        <Image
          resizeMode={'contain'}
          style={[
            styles.drawerImageStyle,
          ]}
          source={require('../images/thankyou.png')}
        />

        <Text style={[styles.headingText, {
          color: theme.primary,
          fontSize: theme.appFontSize.largeSize + 5,
          fontFamily: theme.appFontSize.fontFamily,
        }]}>
          {reduxLang.ThankYou}
        </Text>

        <Text style={[styles.headingText, {
          color: theme.textColor,
          fontSize: theme.appFontSize.largeSize,
          fontFamily: theme.appFontSize.fontFamily,
          fontWeight: 'normal'
        }]}>
          {reduxLang.Yourorderwillbeshippedverysoon}
        </Text>


        {/* /////////////////////////////////////////////////// */}
        <View style={styles.marginBot} />
        <CustomBtn 
        onPressFun={() => { 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Tabs' }
              ],
            })
          );
        }} 
        theme={theme} title={reduxLang.BackToHomePage}></CustomBtn>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  drawerImageStyle: {
    backgroundColor: 'transparent',
    height: HEIGHT * 0.3,
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    marginBottom: 40
  },
  marginBot: {
    marginBottom: 12
  },
  headingText: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center'
  },
  scrollView: {
    flex: 1,
    paddingTop: HEIGHT * 0.1
  },
  scrollViewContainerStyle: {
    paddingBottom: 5
  }
});

const mapStateToProps = (state: any) => ({
  theme: state.configReducer.theme,
  reduxLang: state.configReducer.lang,
});


export default connect(mapStateToProps, null)(AddAddressScreen);
