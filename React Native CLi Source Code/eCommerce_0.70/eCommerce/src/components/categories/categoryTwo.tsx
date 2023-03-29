import React from 'react';
import {
  StyleSheet, ImageBackground,
  Dimensions, Text, View,
  TouchableOpacity
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
  data: { url: any, productName: string, quantity: string, textLtr: boolean }[];
}

const categoryTwo = (navigation: ScreenProp,
  index: number, theme: appColorsType, url: any,
  name: string) => (
  <TouchableOpacity
    key={index}
    onPress={() => navigation.navigate('Shop')}
    style={styles.touchableOpacity}
  >

    <ImageBackground
      key={url}
      imageStyle={{ borderRadius: 19 }}
      source={url}
      style={styles.image}>
      <View
        style={[styles.opacityStyle, {
          backgroundColor: theme.primary
        }]}
      />
      <View style={styles.productNameView}>
        <Text style={[styles.productText, {
          fontSize: theme.appFontSize.largeSize + 6,
          fontFamily: theme.appFontSize.fontFamily,
        }]}>{name}</Text>
      </View>

    </ImageBackground>
  </TouchableOpacity>
)

const App = ({ data, theme }: IProps) => {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View>
      { data.map((value, index) => (categoryTwo(navigation, index, theme, value.url, value.productName)))}
    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: HEIGHT * 0.16,
    width: WIDTH * 0.95,
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  opacityStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: HEIGHT * 0.16,
    width: WIDTH * 0.95,
    alignContent: 'center',
    opacity: 0.6,
    borderRadius: 19
  },
  productText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  productNameView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 9,
    position: 'absolute'
  }
});


export default App;
