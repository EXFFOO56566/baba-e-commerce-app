import React from 'react';
import {
  StyleSheet,
  Text, View,
  Image
} from 'react-native';
import { appColorsType } from '../redux/types/types';

interface IProps {
  theme: appColorsType;
  url: any;
  name: string;
}

const CategoryThree = ({ name, url, theme }: IProps) => {

  return (
    <View
      key={1}
      style={[styles.touchableOpacity, {
        backgroundColor: theme.primaryBackgroundColor,
      }]}
    >

      <Image source={url}
        resizeMode={'cover'}
        style={[styles.imageBackground, {
          backgroundColor: theme.backgroundImageColor
        }]} />

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


      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 6,
    marginTop: 0,
    marginBottom: 0
  },
  priceRowInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'flex-start'
  },
  productNameText: {
    width: 200,
    paddingBottom: 8,
    textAlign: 'left'
  },
  productPriceText: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  discountPriceText: {
    textDecorationLine: 'line-through',
    textAlign: 'left',
    paddingHorizontal: 10
  },
  imageBackground: {
    height: 80,
    width: 85,
    margin: 6,
    marginTop: 10,
    borderRadius: 8
  },
  productNameView: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});


export default CategoryThree;
