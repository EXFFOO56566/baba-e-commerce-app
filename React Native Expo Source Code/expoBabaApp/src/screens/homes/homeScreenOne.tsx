import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, FlatList, TouchableOpacity, View,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import AddtoCartPopUpModal from '../../components/addtoCartPopUpModal';
import { appColorsType } from '../../redux/types/types';
import { FontAwesome } from '@expo/vector-icons';
import BannerOne from '../../components/banners/bannerOne';
import HeaderOne from '../../components/homeHeaders/headerOne';
import HorizontalCategory from '../../components/homeComponents/horizontalCategory';
import FlashCategory from '../../components/homeComponents/flashCategory';
import HotCategory from '../../components/homeComponents/hotCategory';
import DailyFeatured from '../../components/homeComponents/dailyFeatured';
import Card from '../../components/cardStyles/card';
import renderFooter from '../../components/renderFooter';
import { bannersTwo } from '../../components/data';
import ThemeChangeIcon from '../../components/themeChangeIcon';

interface IProps {
  theme: appColorsType;
  reduxLang?: any;
}


const App = ({
  theme,
  reduxLang
}: IProps) => {

  const categories = [{
    name: reduxLang.Armchair, icon: 'graduation-cap',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Wingchair, icon: 'headphones',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Woodchair, icon: 'book',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Foldingchair, icon: 'gift',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Studentchair, icon: 'bicycle',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Sofa, icon: 'car',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Gardenchair, icon: 'car',
    image: require('../../images/furniture/CustomSize19.png')
  },
  {
    name: reduxLang.Salonchair, icon: 'car',
    image: require('../../images/furniture/CustomSize19.png')
  }]



  let [data, setdata] = useState([{
    url: require('../../images/furniture/CustomSize19.png'),
    productName: 'Armchair',
    quantity: '120 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Sofa,
    quantity: '650 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Woodchair,
    quantity: '432 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Wingchair,
    quantity: '678 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Foldingchair,
    quantity: '789 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Studentchair,
    quantity: '120 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Gardenchair,
    quantity: '650 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Salonchair,
    quantity: '432 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: 'Desk chair',
    quantity: '678 Products'
  },
  {
    url: require('../../images/furniture/CustomSize19.png'),
    productName: reduxLang.Studentchair,
    quantity: '789 Products'
  }])

  const [loader, setLoader] = useState(true)
  const [fab, setFab] = useState(false)
  let scrollRef = useRef<FlatList | null>(null);
  let onEnDReachedCalledDuringMomentum

  const [addtoCartmodalVisible, setaddtoCartModalVisible] = useState(false);

  const handleScroll = (event: any) => {
    if (
      fab &&
      event.nativeEvent.contentOffset.y >= 0 &&
      event.nativeEvent.contentOffset.y < 300
    ) {
      setFab(false)
    }
  }

  const onEndReached = () => {
    handleLoadMore()
    onEnDReachedCalledDuringMomentum = true
  }

  const handleLoadMore = () => {
    if (data.length > 9) {
      setFab(true)
    }
    if (data.length < 20) {
      setLoader(true)
      const delay = setInterval(function () {
        setLoader(false)
        let temp = data.concat(data)
        setdata(temp)
        clearInterval(delay)
      }, 3000)
    }
  }


  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.primaryBackgroundColor },
      ]}>
      <StatusBar barStyle={theme.barStyle} backgroundColor={theme.StatusBarColor} />

      {/* //fab Button */}

      {fab ? (
        <TouchableOpacity
          style={[styles.fabStyle, {
            backgroundColor: theme.primary,
          }]}
          onPress={() => {
            scrollRef?.current?.scrollToOffset({
              animated: true,
              offset: 0
            })
            setFab(false)
          }}>
          <FontAwesome
            name={'chevron-up'}
            style={[styles.fabIcon, {
              color: theme.secondryBackgroundColor,
              fontSize: theme.appFontSize.largeSize
            }]}
          />
        </TouchableOpacity>
      ) : null
      }

      {/* // Modal  start */}

      <AddtoCartPopUpModal
        productDetailData={data}
        theme={theme}
        reduxLang={reduxLang}
        addtoCartmodalVisible={addtoCartmodalVisible}
        setaddtoCartModalVisible={setaddtoCartModalVisible}
      />

      <HeaderOne
        theme={theme}
        reduxLang={reduxLang} />

      <ThemeChangeIcon theme={theme} />

      <FlatList
        windowSize={50}
        initialNumToRender={3}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        removeClippedSubviews={true}
        legacyImplementation={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={10}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        columnWrapperStyle={styles.colWrapper}
        renderItem={(item) =>
          <Card
            data={item.item}
            productDetailData={data}
            index={item.index}
            theme={theme}
            addToCartFun={() => setaddtoCartModalVisible(!addtoCartmodalVisible)}
          />
        }
        ref={scrollRef}
        ListFooterComponent={renderFooter(theme, loader)}
        onScroll={handleScroll}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        onMomentumScrollBegin={() => {
          onEnDReachedCalledDuringMomentum = false
        }}

        ListHeaderComponent={<View>


          <BannerOne images={bannersTwo}
            theme={theme}
            autoMove={false}
          />

          <HorizontalCategory
            theme={theme}
            reduxLang={reduxLang} />

          <FlashCategory
            productDetailData={data}
            categories={categories}
            theme={theme}
            reduxLang={reduxLang} />

          <DailyFeatured
            categories={categories}
            productDetailData={data}
            theme={theme}
            reduxLang={reduxLang} />


          <HotCategory
            categories={categories}
            theme={theme}
            reduxLang={reduxLang} />


          <Text style={[styles.headingText,
          {
            color: theme.textColor,
            fontSize: theme.appFontSize.smallSize,
            fontFamily: theme.appFontSize.fontFamily
          }
          ]}>
            {reduxLang.YouMayLike}
          </Text>
        </View>}

      />

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 23,
    paddingVertical: 15
  },
  fabIcon: {
    paddingBottom: 2
  },
  fabStyle: {
    zIndex: 5,
    position: 'absolute',
    right: 25,
    bottom: 50,
    alignItems: 'center',
    height: 46,
    width: 46,
    borderRadius: 400,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  colWrapper: {
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 0,
    marginBottom: 0
  }
});

const mapStateToProps = (state: any) => ({
  reduxLang: state.configReducer.lang
});

export default connect(mapStateToProps, null)(App);
