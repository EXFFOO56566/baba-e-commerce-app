import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  I18nManager,
  Platform,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appColorsType } from '../../redux/types/types';
import List, { List as ListModel } from './List';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { list } from '../data';

const listView = (
  theme: appColorsType,
  iconName: string,
  text: string,
  navigation: any,
  navigate: string,
) => (
  <TouchableOpacity
    onPress={() => {
      if (navigate !== '') {
        navigation.navigate(navigate);
      }
    }}
    style={styles.simpleList}>
    <Ionicons
      style={[
        styles.iconStyle,
        {
          color: theme.secondry,
          fontSize:
            text === 'Shop'
              ? theme.appFontSize.largeSize
              : text === 'News'
                ? theme.appFontSize.largeSize + 2
                : theme.appFontSize.largeSize + 4,
        },
      ]}
      name={iconName}
    />
    <Text
      style={[
        styles.listText,
        {
          color: theme.textColor,
          fontSize: theme.appFontSize.mediumSize + 1,
          fontFamily: theme.appFontSize.fontFamily,
        },
      ]}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default ({ theme, navigation, reduxLang }: any) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.primaryBackgroundColor,
        },
      ]}>
      <View style={[styles.header, { borderBottomColor: theme.textColor }]}>
        <Text style={[styles.title, {
          color: theme.textColor,
          fontSize: theme.appFontSize.largeSize + 2,
          fontFamily: theme.appFontSize.fontFamily,
        }]}>{reduxLang.ECommerce}</Text>
      </View>
      <View style={styles.sectionSpace} />
      {listView(theme, 'shopping-bag', reduxLang.Shop, navigation, 'Shop')}
      {listView(theme, 'rss-square', reduxLang.News, navigation, 'BlogScreen')}
      {listView(theme, 'phone', reduxLang.ContactUs, navigation, 'ContactUs')}
      {listView(theme, 'info-circle', reduxLang.AboutUs, navigation, 'AboutUs')}
      {listView(theme, 'sign-in', reduxLang.Login, navigation, 'Login')}
      <View style={styles.sectionSpace}>
        <Text style={[styles.categoryText, {
          color: theme.textColor,
          fontSize: theme.appFontSize.largeSize - 1,
          fontFamily: theme.appFontSize.fontFamily,
        }]}>
          {reduxLang.BYCATEGORY}
        </Text>
      </View>

      <List
        {...{ list }}
        theme={theme}
        navigation={navigation}
        heading={!I18nManager.isRTL ? 'MEN' : 'رجال'}
      />
      <List
        {...{ list }}
        theme={theme}
        navigation={navigation}
        heading={!I18nManager.isRTL ? 'CLOTHING' : 'ملابس'}
      />
      <List
        {...{ list }}
        theme={theme}
        navigation={navigation}
        heading={!I18nManager.isRTL ? 'WOMEN' : 'نساء'}
      />
      <List
        {...{ list }}
        theme={theme}
        navigation={navigation}
        heading={!I18nManager.isRTL ? 'SHIRTS' : 'قمصان'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  sectionSpace: {
    margin: 5,
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 13,
    paddingTop: 16,
  },
  headerImage: {
    marginRight: 10,
    marginLeft: 13,
  },
  iconStyle: {
    paddingRight: Platform.OS === 'ios' ? (!I18nManager.isRTL ? 0 : 13) : 0,
  },
  simpleList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 14,
  },
  listText: {
    paddingLeft: I18nManager.isRTL ? 0 : 13,
    paddingRight: !I18nManager.isRTL ? 0 : 13,
  },
  categoryText: {
    fontWeight: 'bold',
    padding: 8,
    paddingLeft: 1,
  },
});
