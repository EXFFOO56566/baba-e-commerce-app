import React, { useLayoutEffect, useState } from 'react';
import {
  I18nManager, SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { appColorsType } from '../redux/types/types';
import CartCard from '../components/cartCard';
import CustomBtn from '../components/customBtn';
import { WIDTH } from '../components/config';
import WishlistCategory from '../components/wishlistCategory';


type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
  ShippingAddress: undefined;
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
      headerTitle: reduxLang.Cart,
      headerStyle: {
        backgroundColor: theme.secondryBackgroundColor,
        shadowColor: 'transparent',
      },
      headerTintColor: theme.textColor,
    });
  }, [
    navigation,
    reduxLang.Cart,
    theme.secondryBackgroundColor,
    theme.textColor,
  ]);

  const [promoCode, onChangePromoCode] = React.useState('');

  let [data, setdata] = useState([{
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.JBL,
    quantity: '120 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Sony,
    quantity: '650 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Sony,
    quantity: '432 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Bose,
    quantity: '678 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.BeatsbyDre,
    quantity: '789 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Skullcandy,
    quantity: '120 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Beyerdynamic,
    quantity: '650 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.AKGAcoustics,
    quantity: '432 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Skullcandy,
    quantity: '678 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Beyerdynamic,
    quantity: '789 Products'
  }])

  let [cardData] = useState([{
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.JBL,
    quantity: '120 Products'
  },
  {
    url: require('../images/headPhone/CustomSize3.png'),
    productName: reduxLang.Sony,
    quantity: '650 Products'
  }
  ])

  const headerFun = (text: string) => (
    <View
      style={[styles.headerStyle, {
        backgroundColor: theme.secondryBackgroundColor
      }]}>

      <Text style={[styles.headerText, {
        color: theme.textColor,
        fontSize: theme.appFontSize.mediumSize,
        fontFamily: theme.appFontSize.fontFamily
      }]}>
        {text}
      </Text>

    </View>
  )

  const textRow = (keyText: string, valueText: string, bold?: boolean) => (
    <View
      style={[styles.rowContainer, {
        backgroundColor: theme.secondryBackgroundColor
      }]}>

      <Text style={[styles.headerText, {
        color: theme.textColor,
        fontSize: bold ? theme.appFontSize.largeSize + 1 : theme.appFontSize.mediumSize,
        fontFamily: theme.appFontSize.fontFamily,
        fontWeight: bold ? 'bold' : 'normal'
      }]}>
        {keyText}
      </Text>

      <Text style={[styles.headerText, {
        color: theme.textColor,
        fontSize: bold ? theme.appFontSize.largeSize + 1 : theme.appFontSize.mediumSize,
        fontFamily: theme.appFontSize.fontFamily,
        fontWeight: bold ? 'bold' : 'normal'
      }]}>
        {valueText}
      </Text>

    </View>
  )

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.primaryBackgroundColor },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>

        <View>

          {cardData.map((item, index) => (

            <CartCard
              productDetailData={data}
              key={index}
              url={item.url}
              name={item.productName}
              theme={theme}
            ></CartCard>
          ))}

        </View>

        <View
          style={[styles.descriptionView, { backgroundColor: theme.secondryBackgroundColor }]}>

          {headerFun(reduxLang.PromoCode)}

          <View style={{
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 14
          }}>


            <TextInput
              style={[
                styles.textInputStyle,
                {
                  backgroundColor: theme.primaryBackgroundColor,
                  color: theme.textColor,
                  fontSize: theme.appFontSize.mediumSize,
                  fontFamily: theme.appFontSize.fontFamily
                },
              ]}
              onChangeText={(text) => onChangePromoCode(text)}
              placeholder={reduxLang.EnterPromoCodeHere}
              placeholderTextColor={'gray'}
              value={promoCode}
            />


            <CustomBtn borderRadius={6} width={WIDTH * 0.188} onPressFun={() => {
            }} theme={theme} bold={true}
              textSize={theme.appFontSize.mediumSize}
              title={reduxLang.Apply} />

          </View>

        </View>

        <View style={{
          paddingVertical: 9, backgroundColor:
            theme.secondryBackgroundColor,
        }}>
          {textRow(reduxLang.SubTotal, '$6.00')}
          {textRow(reduxLang.Shipping, '$0.00')}

          {textRow(reduxLang.Tax, '$3.00')}

          {textRow(reduxLang.Discount, '$12.00')}
          <View style={{ marginVertical: 2 }} />
          {textRow(reduxLang.Total, '$12.00', true)}
        </View>

        <View style={{
          paddingVertical: 9, backgroundColor:
            theme.secondryBackgroundColor,
          marginVertical: 5
        }}>
          <CustomBtn onPressFun={() => {
            navigation.navigate('ShippingAddress')
          }} theme={theme} bold={true}
            textSize={theme.appFontSize.mediumSize}
            title={reduxLang.Checkout} />

        </View>

        <WishlistCategory
          productDetailData={data}
          theme={theme}
          reduxLang={reduxLang} />


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
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 8
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 14
  },
  textInputStyle: {
    borderColor: 'gray',
    width: '75%',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 8 : 5,
    paddingLeft: 12,
    marginRight: 17,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    alignSelf: 'center',
  },
  descriptionView: {
    paddingHorizontal: 1,
    paddingBottom: 10,
    marginVertical: 5,
  },
  headerText: {
    paddingHorizontal: 4,
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
    marginVertical: 4
  },
  marginHorr: {
    marginHorizontal: -4
  },
});

const mapStateToProps = (state: any) => ({
  theme: state.configReducer.theme,
  reduxLang: state.configReducer.lang
});


export default connect(mapStateToProps, null)(App);
