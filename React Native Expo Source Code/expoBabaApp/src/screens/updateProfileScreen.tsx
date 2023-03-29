import React, { useLayoutEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  I18nManager,
} from 'react-native';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomBtn from '../components/customBtn';
import { appColorsType } from '../redux/types/types';
type RootStackParamList = {
  Settings: undefined;
};
interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  theme: appColorsType;
  reduxLang: any;
}

const App = ({ navigation, theme, reduxLang }: IProps) => {
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

  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  let secondTextInput: any = '';
  let thirdTextInput: any = '';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.primaryBackgroundColor },
      ]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainerStyle}
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          // behavior="height"
          keyboardVerticalOffset={5}
          behavior={'position'}
          style={styles.container}>
          <Image
            resizeMode={'cover'}
            style={[
              styles.drawerImageStyle
            ]}
            source={require('../images/maleAvatar.png')}
          />

          <View style={styles.userNameTextView}>
            <Text style={[styles.nameText, {
              color: theme.textColor,
              fontSize: theme.appFontSize.mediumSize,
              fontFamily: theme.appFontSize.fontFamily,
            }]}>
              {reduxLang['Dr. Mark White']}
            </Text>
            <Text style={[styles.emailText, {
              color: theme.textColor,
              fontSize: theme.appFontSize.mediumSize,
              fontFamily: theme.appFontSize.fontFamily,
            }]}>
              DrMarkWhite@gmail.com
            </Text>
          </View>

          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: theme.secondryBackgroundColor,
                color: theme.textColor,
                fontSize: theme.appFontSize.mediumSize,
                fontFamily: theme.appFontSize.fontFamily
              },
            ]}
            onChangeText={(text) => onChangeName(text)}
            placeholder={reduxLang.Name}
            placeholderTextColor={'gray'}
            value={name}
            onSubmitEditing={() => {
              secondTextInput.focus();
            }}
            blurOnSubmit={false}
          />

          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: theme.secondryBackgroundColor,
                color: theme.textColor,
                fontSize: theme.appFontSize.mediumSize,
                fontFamily: theme.appFontSize.fontFamily
              },
            ]}
            keyboardType={'email-address'}
            onChangeText={(text) => onChangeEmail(text)}
            placeholder={reduxLang.Email}
            placeholderTextColor={'gray'}
            value={email}
            ref={(input) => {
              secondTextInput = input;
            }}
            onSubmitEditing={() => {
              thirdTextInput.focus();
            }}
            blurOnSubmit={false}
          />

          <TextInput
            style={[
              styles.textInput,
              styles.marginBot,
              {
                backgroundColor: theme.secondryBackgroundColor,
                color: theme.textColor,
                fontSize: theme.appFontSize.mediumSize,
                fontFamily: theme.appFontSize.fontFamily
              },
            ]}
            onChangeText={(text) => onChangePhone(text)}
            placeholder={reduxLang.PhoneNo}
            placeholderTextColor={'gray'}
            keyboardType={'number-pad'}
            value={phone}
            ref={(input) => {
              thirdTextInput = input;
            }}
          />

          <CustomBtn onPressFun={() => { }} theme={theme} title={reduxLang.Save}></CustomBtn>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  demoContainer: {
    padding: 40,
  },
  marginBot: {
    marginBottom: 16
  },
  drawerImageStyle: {
    backgroundColor: 'transparent',
    height: 75,
    width: 75,
    margin: 20,
    alignSelf: 'center',
  },
  userNameTextView: {
    alignItems: 'center',
    marginBottom: 12,
  },
  emailText: {
    textAlign: 'center',
    marginTop: 5,
  },
  nameText: {
    textAlign: 'center',
    fontWeight: '700',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    width: '93%',
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
    marginBottom: 6,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainerStyle: {
    paddingBottom: 5
  },
});

const mapStateToProps = (state: any) => ({
  theme: state.configReducer.theme,
  reduxLang: state.configReducer.lang
});


export default connect(mapStateToProps, null)(App);
