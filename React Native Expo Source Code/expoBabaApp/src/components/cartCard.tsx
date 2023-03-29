import React from 'react';
import {
  StyleSheet,
  Text, View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import { appColorsType } from '../redux/types/types';
import { FontAwesome } from '@expo/vector-icons';
import CounterSelection from '../components/customCounter'
import { WIDTH } from '../components/config';
import { HEADER_IOS_HEIGHT, HEADER_ANDROID_HEIGHT } from '../components/config';
import { useNavigation } from '@react-navigation/native';
import { RootHomeStackParamList } from '../router/RootParams';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenProp = StackNavigationProp<RootHomeStackParamList, 'ProductDetail'>;

interface IProps {
  theme: appColorsType;
  url: any;
  name: string;
  productDetailData: { url: any, productName: string, quantity: string }[];
}


const cartCard = ({ name, url, theme,
  productDetailData }: IProps) => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <View
      key={name}
      style={[styles.touchableOpacity, {
        backgroundColor: theme.secondryBackgroundColor,
      }]}
    >

      <TouchableOpacity
        onPress={() => navigation.push('ProductDetail', {
          dataImages: productDetailData
        })}
      >
        <Image
          source={url}
          resizeMode={'cover'}
          borderRadius={6}
          style={[styles.imageBackground, {
            backgroundColor: theme.backgroundImageColor
          }]} />
      </TouchableOpacity>
      <View>

        <View style={styles.productNameView}>

          <View style={styles.priceRowInnerContainer}>

            <Text style={[styles.productPriceText, {
              color: theme.textColor,
              fontSize: theme.appFontSize.mediumSize,
              fontFamily: theme.appFontSize.fontFamily
            }]}>
              {'US$550.62'}
            </Text>

            <Text style={[styles.discountPriceText, {
              color: theme.secondry,
              fontSize: theme.appFontSize.smallSize,
              fontFamily: theme.appFontSize.fontFamily
            }]}>
              {'US$550.62'}
            </Text>


          </View>
          <Text style={[styles.productNameText, {
            color: theme.textColor,
            fontSize: theme.appFontSize.mediumSize,
            fontFamily: theme.appFontSize.fontFamily
          }]}
            numberOfLines={1}
          >{name}</Text>

          <Text style={[styles.productNameText, {
            color: theme.secondry,
            fontSize: theme.appFontSize.smallSize,
            fontFamily: theme.appFontSize.fontFamily
          }]}
            numberOfLines={1}
          >{'small, blue'}</Text>

          <CounterSelection
            theme={theme}
            counterBackGroundColor={theme.secondryBackgroundColor}
            width={Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 0.245 :
              HEADER_ANDROID_HEIGHT * 0.375}
            height={Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 0.04 :
              HEADER_ANDROID_HEIGHT * 0.08}
            iconSize={theme.appFontSize.smallSize}
            minimumValue={1}
            initialValue={1}
            onIncrement={(value) => {
            }}
            onDecrement={(value) => {
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
        <FontAwesome
          style={
            {
              color: theme.secondry,
              fontSize: theme.appFontSize.mediumSize
            }
          }
          name={'trash'}
        />
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 6,
    marginTop: 4,
    marginBottom: 4,
    elevation: 0.2,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    padding: 8,
    paddingVertical: Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 0.1 :
      HEADER_ANDROID_HEIGHT * 0.12,
  },
  priceRowInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0
  },
  percentText: {
    textAlign: 'left',
    textDecorationLine: 'line-through',
    borderWidth: 1,
  },
  productNameText: {
    width: 200,
    paddingBottom: Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 0.05 :
      HEADER_ANDROID_HEIGHT * 0.04,
    textAlign: 'left'
  },
  productPriceText: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  discountPriceText: {
    textDecorationLine: 'line-through',
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 0.05 :
      HEADER_ANDROID_HEIGHT * 0.04,
  },
  heartIcon: {
    paddingHorizontal: 8,
    position: 'absolute',
    right: 5,
    top: 12
  },
  imageBackground: {
    height: Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 1.2 :
      HEADER_ANDROID_HEIGHT * 1.7,
    width:
      Platform.OS === 'ios' ? HEADER_IOS_HEIGHT * 1.2 :
        HEADER_ANDROID_HEIGHT * 1.7,
    margin: 0,
    marginRight: WIDTH * 0.017,
    borderRadius: 6
  },
  productNameView: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 1,
  }
});


export default cartCard;
