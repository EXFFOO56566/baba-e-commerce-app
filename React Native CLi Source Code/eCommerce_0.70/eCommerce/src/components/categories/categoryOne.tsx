import React from 'react';
import {
  StyleSheet, ImageBackground,
  Dimensions, Text, View,
  TouchableOpacity,
  I18nManager
} from 'react-native';
import { appColorsType } from '../../redux/types/types';
import { HEIGHT } from '../config';
import { useNavigation } from '@react-navigation/native';
import { RootHomeStackParamList } from '../../router/RootParams';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenProp = StackNavigationProp<RootHomeStackParamList, 'Shop'>;
const WIDTH = Dimensions.get('window').width;
interface IProps {
  theme: appColorsType;
  reduxLang: any;
  data: { url: any, productName: string, quantity: string, textLtr: boolean }[];
}

const categoryOne = (reduxlang: any, navigation: ScreenProp,
  index: number, theme: appColorsType, url: any, align: boolean,
  name: string, counting: string) => (
  <TouchableOpacity
    key={index}
    onPress={() => navigation.navigate('Shop')}
    style={styles.touchableOpacity}
  >
    <ImageBackground
      key={url}
      imageStyle={{ borderRadius: 6 }}
      source={url}
      style={[styles.image, {
        alignItems: !I18nManager.isRTL ? align ? 'flex-start' : 'flex-end' :
          align ? 'flex-end' : 'flex-start',
      }]}>


      <View style={styles.productNameView}>
        <Text style={[styles.productNameText, {
          fontSize: theme.appFontSize.largeSize + 4,
          fontFamily: theme.appFontSize.fontFamily
        }]}>{name}</Text>

        <Text style={[styles.productCountText, {
          fontSize: theme.appFontSize.smallSize,
          fontFamily: theme.appFontSize.fontFamily
        }]}>{counting + ' ' + reduxlang.Products}</Text>

      </View>
    </ImageBackground>
  </TouchableOpacity>
)

const CategoryCardOne = ({ data, theme, reduxLang }: IProps) => {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View>
      { data.map((value, index) => (categoryOne(reduxLang, navigation, index, theme, value.url, value.textLtr, value.productName, value.quantity)))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: HEIGHT * 0.15,
    width: WIDTH * 0.95,
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  touchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    opacity: 0.3,
    borderRadius: 20,
  },
  productNameView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 25
  },
  productNameText: {
    color: '#ffffff',
  },
  productCountText: {
    paddingTop: 3,
    color: '#ffffff',
  }
});
export default CategoryCardOne;
