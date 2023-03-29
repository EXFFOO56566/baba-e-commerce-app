import React from 'react';
import {
  StyleSheet,
  Text, View,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { appColorsType } from '../redux/types/types';
import { useNavigation } from '@react-navigation/native';
import { RootHomeStackParamList } from '../router/RootParams';

interface IProps {
  theme: appColorsType;
  reduxLang: any;
  index: number;
  setaddtoCartModalVisible: (arg: boolean) => void;
  addtoCartmodalVisible: boolean;
  productDetailData: { url: any, productName: string, quantity: string }[];
}

type productDetailScreenProp = StackNavigationProp<RootHomeStackParamList, 'ProductDetail'>;

const CategoryThree = ({
  theme,
  index,
  setaddtoCartModalVisible,
  addtoCartmodalVisible,
  productDetailData,
  reduxLang
}: IProps) => {
  const navigation = useNavigation<productDetailScreenProp>();

  return (
    <TouchableOpacity
      key={index}
      onPress={() => {
        setaddtoCartModalVisible(!addtoCartmodalVisible)
        navigation.push('ProductDetail', {
          dataImages: productDetailData
        })

      }}
      style={[styles.touchableOpacity, {
        backgroundColor: theme.primaryBackgroundColor,
        borderBottomColor: theme.secondryBackgroundColor,
      }]}
    >

      <Image
        source={productDetailData[0].url}
        resizeMode={'cover'}
        borderRadius={6}
        style={styles.imageBackground} />
      <View style={styles.productNameView}>
        <View style={{ flexDirection: 'row', marginBottom: 6 }}>
          <Text style={{
            color: theme.textColor, fontSize: theme.appFontSize.largeSize,
            fontFamily: theme.appFontSize.fontFamily,
            fontWeight: 'bold',
            paddingRight: 10
          }}>{'US$699.00'}</Text>

          <Text
            style={{
              color: theme.secondry,
              fontSize: theme.appFontSize.mediumSize,
              fontFamily: theme.appFontSize.fontFamily,
              fontWeight: 'bold',
              textDecorationLine: 'line-through'
            }}>{'US$869.00'}</Text>
        </View>

        <Text style={{
          color: theme.primary,
          fontSize: theme.appFontSize.smallSize - 2,
          fontFamily: theme.appFontSize.fontFamily,
          borderWidth: 1,
          padding: 3,
          marginBottom: 6,
          borderColor: theme.primary
        }}>{'20% ' + reduxLang.Off}</Text>


        <Text style={[styles.productCountText, {
          color: theme.secondry, fontSize: theme.appFontSize.smallSize,
          fontFamily: theme.appFontSize.fontFamily
        }]}>{reduxLang.SelectedCosmicBlackOther}</Text>

        <Text style={[styles.productCountText, {
          color: theme.secondry, fontSize: theme.appFontSize.smallSize,
          fontFamily: theme.appFontSize.fontFamily
        }]}>{'Area Version'}</Text>
      </View>

    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  touchableOpacity: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 6,
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1
  },
  productCountText: {
    paddingTop: 3,
  },
  imageBackground: {
    height: 90,
    width: 90,
    margin: 6,
    borderRadius: 6
  },
  productNameView: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});


export default CategoryThree;
