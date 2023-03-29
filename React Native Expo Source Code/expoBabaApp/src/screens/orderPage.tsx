import React, { useLayoutEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  I18nManager,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import CustomBtn from '../components/customBtn';
import { appColorsType } from '../redux/types/types';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenIndicator from '../components/screenIndicator';
import OrderProductCard from '../components/orderProductCard';
import MethodPicker from '../components/methodPicker';

import { HEIGHT } from '../components/config';

type RootStackParamList = {
  ShippingMethod: undefined;
  ThankYouScreen: undefined;
};
export interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  theme: appColorsType;
  reduxLang: any;
  route: any;
}

const OrderPage = ({ navigation, theme, reduxLang, route }: IProps) => {
  /////////////////// Header Settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: reduxLang.Order,
      headerStyle: {
        backgroundColor: theme.secondryBackgroundColor,
        shadowColor: 'transparent',
      },
      headerTintColor: theme.textColor,
    });
  }, [navigation, theme.secondryBackgroundColor, theme.textColor]);
  ///////////////////

  const [heightValue, setHeight] = React.useState(40);
  const [phone, onChangePhone] = React.useState('');

  const [paymentMethods, setpaymentMethods] = useState([
    { value: reduxLang.Stripe, status: false, index: 0 },
    { value: reduxLang.Paypal, status: true, index: 1 },
    { value: reduxLang.Razorpay, status: true, index: 2 },
    { value: reduxLang.Visa, status: true, index: 3 },
    { value: reduxLang.CashOnDelivery, status: true, index: 4 }
  ]);

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

  function selectMethod(index: number) {
    let newArr = [...paymentMethods];
    newArr.forEach((item) => {
      if (index !== item.index) {
        item.status = true
      } else {
        item.status = false

      }
    })
    setpaymentMethods(newArr);
  }


  const textRow = (keyText: string, valueText: string, bold?: boolean) => (
    <View
      style={[styles.rowContainer, {
        backgroundColor: theme.primaryBackgroundColor
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

  const bodyRowText = (text: string) => (
    <View style={styles.bodyView}>
      <Text style={{
        fontSize: theme.appFontSize.mediumSize,
        color: theme.textColor, fontFamily: theme.appFontSize.fontFamily,
      }}>{text}</Text>
    </View>
  )

  const headingText = (heading: string) => (
    <View style={[
      styles.headingView
      , {
        backgroundColor: theme.secondryBackgroundColor,
      }]}>
      <Text style={{
        fontSize: theme.appFontSize.largeSize,
        color: theme.textColor, fontFamily: theme.appFontSize.fontFamily,
        fontWeight: 'bold',
        textAlign: 'left'

      }}>{heading}</Text>
    </View>
  )

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
            selectedValue={true} />

        </View>

        {headingText(reduxLang.BillingAddress)}

        {bodyRowText(reduxLang['2084 Forest Drive,Chantilly,Virginia,22021'])}


        {headingText(reduxLang.ShippingAddress)}

        {bodyRowText(reduxLang['4122  Jennifer Lane,Durham,North Carolina,27703'])}


        {headingText(reduxLang.SelectPaymentMethod)}

        {paymentMethods.map((item, index) => (
          <View key={index}>
            <MethodPicker
              index={index}
              item={item}
              selectMethod={selectMethod}
              theme={theme}
            />
          </View>
        ))}

        {headingText(reduxLang.MyProducts)}

        {cardData.map((item, index) => (

          <OrderProductCard
            key={index}
            url={item.url}
            name={item.productName}
            theme={theme}
          ></OrderProductCard>
        ))}

        <View style={[styles.totalPriceContainer, {
          backgroundColor: theme.primaryBackgroundColor,
          borderBottomColor: theme.secondryBackgroundColor,
          borderTopColor: theme.secondryBackgroundColor
        }]}>
          {textRow(reduxLang.SubTotal, '$6.00')}
          {textRow(reduxLang.Shipping, '$0.00')}
          {textRow(reduxLang.Tax, '$3.00')}
          {textRow(reduxLang.Discount, '$12.00')}
          {textRow(reduxLang.Total, '$12.00', true)}
        </View>


        {headingText(reduxLang.OrderNote)}

        <TextInput
          style={[
            styles.textInput,
            styles.marginBot,
            {
              backgroundColor: theme.secondryBackgroundColor,
              color: theme.textColor,
              height: HEIGHT * 0.1 + heightValue,
              fontSize: theme.appFontSize.mediumSize,
              fontFamily: theme.appFontSize.fontFamily
            },
            styles.textAlignVertical,
          ]}
          onChangeText={(text) => onChangePhone(text)}
          placeholder={reduxLang.WriteNote}
          placeholderTextColor={'gray'}
          value={phone}
          editable={true}
          multiline={true}
          onContentSizeChange={(e) =>
            setHeight(e.nativeEvent.contentSize.height)
          }
        />

        {/* /////////////////////////////////////////////////// */}

        <CustomBtn
          onPressFun={() => { navigation.navigate('ThankYouScreen') }}
          theme={theme}
          title={reduxLang.ConfirmOrder} />
        <View style={styles.marginBot} />


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
  headingView: {
    justifyContent: 'flex-start', width: '100%',
    padding: 10,
    margin: 6,
    marginLeft: 0,
    marginRight: 0,
  },
  bodyView: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    paddingTop: 8,
    paddingBottom: 8
  },
  textInput: {
    borderColor: 'gray',
    width: '93%',
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
    marginBottom: 6,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    alignSelf: 'center',
  },
  headerText: {
    paddingHorizontal: 4,
    textAlign: 'left',
  },
  deviderStyleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    width: '100%',
    alignSelf: 'center'
  },
  totalPriceContainer: {
    borderTopWidth: 6,
    paddingVertical: 9,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 14
  },
  textAlignVertical: {
    textAlignVertical: 'top',
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
  reduxLang: state.configReducer.lang
});


export default connect(mapStateToProps, null)(OrderPage);
