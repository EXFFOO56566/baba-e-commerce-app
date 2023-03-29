import React, { useLayoutEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import CustomBtn from '../components/customBtn';
import MethodPicker from '../components/methodPicker';
import { appColorsType } from '../redux/types/types';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenIndicator from '../components/screenIndicator';
type RootStackParamList = {
  ShippingMethod: undefined;
  OrderPage: undefined;
};
export interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  theme: appColorsType;
  reduxLang: any;
  route: any;
}

const AddAddressScreen = ({ navigation, theme, reduxLang, route }: IProps) => {
  /////////////////// Header Settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: reduxLang.ShippingMethod,
      headerStyle: {
        backgroundColor: theme.secondryBackgroundColor,
        shadowColor: 'transparent',
      },
      headerTintColor: theme.textColor,
    });
  }, [navigation, theme.secondryBackgroundColor, theme.textColor]);
  ///////////////////

  const [shippingData, setshippingData] = useState([
    { value: reduxLang.FreeShipping + ' $0.00', status: false, index: 0 },
    { value: reduxLang.Localpickup + ' $0.00', status: true, index: 1 },
    { value: reduxLang.ExpressShipping + ' $10.00', status: true, index: 2 }
  ]);

  function selectMethod(index: number) {
    let newArr = [...shippingData];
    newArr.forEach((item) => {
      if (index !== item.index) {
        item.status = true
      } else {
        item.status = false

      }
    })
    setshippingData(newArr);
  }

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

        <View style={styles.deviderStyleView}>

          <ScreenIndicator theme={theme} text={'1'} label={reduxLang.Shipping}
            selectedValue={true} />
          <ScreenIndicator theme={theme} text={'2'} label={reduxLang.ShippingMethod}
            selectedValue={true} />
          <ScreenIndicator theme={theme} text={'3'} label={reduxLang.PlaceOrder}
            selectedValue={false} />

        </View>

        <Text style={[styles.headingText, {
          color: theme.textColor,
          fontSize: theme.appFontSize.largeSize,
          fontFamily: theme.appFontSize.fontFamily,
        }]}>
          {reduxLang.SelectShippingMethod}
        </Text>

        {shippingData.map((item, index) => (
          <View key={index}>
            <MethodPicker
              index={index}
              item={item}
              selectMethod={selectMethod}
              theme={theme}
            />
          </View>

        ))}

        {/* /////////////////////////////////////////////////// */}
        <View style={styles.marginBot} />
        <CustomBtn onPressFun={() => { navigation.navigate('OrderPage') }} theme={theme} title={reduxLang.Next}></CustomBtn>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  },
  marginBot: {
    marginBottom: 12
  },
  deviderStyleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    width: '100%',
    alignSelf: 'center'
  },
  headingText: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'flex-start'
  },
  scrollView: {
    flex: 1
  },
  scrollViewContainerStyle: {
    paddingBottom: 5,
  }
});

const mapStateToProps = (state: any) => ({
  theme: state.configReducer.theme,
  reduxLang: state.configReducer.lang,
});


export default connect(mapStateToProps, null)(AddAddressScreen);
