import React, { useState } from 'react';
import {
    I18nManager,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';
import AddtoCartPopUpModal from '../components/addtoCartPopUpModal';
import { appColorsType } from '../redux/types/types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import Card from './cardStyles/cardTwo';
import { WIDTH } from './config';
import { useNavigation } from '@react-navigation/native';
import { RootHomeStackParamList } from '../router/RootParams';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenProp = StackNavigationProp<RootHomeStackParamList, 'Wishlist'>;

interface IProps {
    theme: appColorsType;
    reduxLang: any;
    fontSize?: number;
    backgroundColor?: string;
    productDetailData: { url: any, productName: string, quantity: string }[];
}
const App = ({
    theme,
    reduxLang,
    fontSize,
    backgroundColor,
    productDetailData
}: IProps) => {

    const navigation = useNavigation<ScreenProp>();

    const [addtoCartmodalVisible, setaddtoCartModalVisible] = useState(false);

    return (
        <View style={[styles.wishContainer, {
            backgroundColor: backgroundColor ?
                backgroundColor :
                theme.secondryBackgroundColor

        }]}>
            <AddtoCartPopUpModal
                theme={theme}
                productDetailData={productDetailData}
                reduxLang={reduxLang}
                addtoCartmodalVisible={addtoCartmodalVisible}
                setaddtoCartModalVisible={setaddtoCartModalVisible}
            />
            <View style={styles.wishRow}>
                <Text style={[styles.bold,
                {
                    color: theme.textColor,
                    fontSize: fontSize ? fontSize : theme.appFontSize.smallSize,
                    fontFamily: theme.appFontSize.fontFamily
                }
                ]}>
                    {reduxLang.WishList}
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Wishlist', {
                        dataImages: productDetailData
                    })}
                    style={styles.rowTag}>
                    <Text style={[styles.bold,
                    {
                        color: theme.primary,
                        fontSize: theme.appFontSize.smallSize,
                        fontFamily: theme.appFontSize.fontFamily
                    }]
                    }>
                        {reduxLang.ViewMore}
                    </Text>
                    <FontAwesome name={!I18nManager.isRTL ? 'angle-right' :
                        'angle-left'} style={[styles.paddingHot, {
                            color: theme.primary,
                            fontSize: theme.appFontSize.smallSize
                        }]} />
                </TouchableOpacity>

            </View>

            <FlatList
                horizontal
                keyExtractor={(item, index) => 'key' + index}
                data={productDetailData}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) =>
                    <View style={{ width: WIDTH * 0.43 }}>
                        <Card
                            productDetailData={productDetailData}
                            data={item.item}
                            index={item.index}
                            theme={theme}
                        />
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    paddingHot: {
        paddingHorizontal: 5
    },
    rowTag: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wishContainer: {
        width: '100%',
        alignSelf: 'center',
        padding: 1
    },
    bold: {
        fontWeight: 'bold'
    },
    wishRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        paddingBottom: 5
    }
});

export default connect(null, null)(App);
