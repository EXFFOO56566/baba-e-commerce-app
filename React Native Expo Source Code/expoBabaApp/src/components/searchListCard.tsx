import React from 'react';
import {
  StyleSheet,
  Text, View,
  TouchableOpacity,
  Image
} from 'react-native';
import { appColorsType } from '../redux/types/types';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootHomeStackParamList } from '../router/RootParams';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenProp = StackNavigationProp<RootHomeStackParamList, 'ProductDetail'>;

interface IProps {
  theme: appColorsType;
  data: { url: any, productName: string, quantity: string };
  index: number;
  backgroundColor?: string;
  icon?: string;
  productDetailData: { url: any, productName: string, quantity: string }[];

}

const CategoryThree = ({ data, theme,
  index, backgroundColor, icon, productDetailData }: IProps) => {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View
      key={index}
      style={[styles.touchableOpacity, {
        backgroundColor: backgroundColor ? backgroundColor : theme.secondryBackgroundColor,
      }]}
    >

      <TouchableOpacity onPress={() => navigation.navigate('Wishlist', {
        dataImages: productDetailData
      })}>
        <Image
          source={data.url}
          resizeMode={'contain'}
          style={[styles.imageBackground,{
            backgroundColor: theme.backgroundImageColor
          }]} />
      </TouchableOpacity>
      <View style={styles.productNameView}>
        <Text style={[styles.productNameText, {
          color: theme.textColor,
          fontSize: theme.appFontSize.mediumSize,
          fontFamily: theme.appFontSize.fontFamily
        }]}
          numberOfLines={1}
        >{data.productName}</Text>

        <Text style={[styles.productCountText, {
          color: theme.primary, fontSize: theme.appFontSize.smallSize + 1,
          fontFamily: theme.appFontSize.fontFamily
        }]}>{data.quantity}</Text>

      </View>
      <TouchableOpacity style={styles.heartIcon}>
        <FontAwesome
          style={
            {
              color: theme.secondry,
              fontSize: icon ? theme.appFontSize.largeSize : theme.appFontSize.mediumSize
            }
          }
          name={icon ? icon : 'heart'}
        />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 6,
    marginTop: 5,
    marginBottom: 5,
    elevation: 0.2,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  productNameText: {
    width: 200,
    paddingBottom: 3,
    textAlign: 'left'
  },
  heartIcon: {
    paddingHorizontal: 8,
    position: 'absolute',
    right: 5,
    top: 12
  },
  productCountText: {
    paddingTop: 3,
    paddingBottom: 8
  },
  imageBackground: {
    height: 90,
    width: 92,
    margin: 6,
    borderRadius: 8
  },
  productNameView: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
    alignSelf: 'center'
  }
});


export default CategoryThree;
