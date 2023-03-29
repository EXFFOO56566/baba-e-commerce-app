import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { appColorsType } from '../../redux/types/types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import { WIDTH } from '../config';
import { useNavigation } from '@react-navigation/native';
import { RootHomeStackParamList } from '../../router/RootParams';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenProp = StackNavigationProp<RootHomeStackParamList, 'Shop' | 'Category'>;

interface IProps {
    theme: appColorsType;
    reduxLang: any;
    backgroundColor?: string;
    iconColor?: string;
}
const App = ({
    theme,
    reduxLang,
    backgroundColor,
    iconColor
}: IProps) => {
    const navigation = useNavigation<ScreenProp>();

    const categories = [{ name: reduxLang.bed, icon: 'bed' },
    { name: reduxLang.headphones, icon: 'headphones' },
    { name: reduxLang.Books, icon: 'book' },
    { name: reduxLang.Gift, icon: 'gift' },
    { name: reduxLang.Bikes, icon: 'bicycle' },
    { name: reduxLang.Cars, icon: 'car' },
    { name: reduxLang.Calculator, icon: 'calculator' },
    { name: reduxLang.Coffee, icon: 'coffee' }]

    return (

        <FlatList
            horizontal
            keyExtractor={(item, index) => 'key' + index}
            data={categories}

            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Shop')}
                        key={index}
                        style={styles.categoryTouch}>
                        <View style={[{
                            backgroundColor:
                                backgroundColor ? backgroundColor :
                                    theme.primary,
                        }, styles.categoryView]}>
                            <FontAwesome name={item.icon} style={[{
                                color: iconColor ? iconColor :
                                    theme.primaryTextColor,
                                fontSize: theme.appFontSize.largeSize + 3,
                            }]} />
                        </View>

                        <Text style={[
                            styles.categoryText,
                            {
                                color: theme.textColor,
                                fontSize: theme.appFontSize.smallSize,
                                fontFamily: theme.appFontSize.fontFamily,
                            }
                        ]}>
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                )
            }}
            ListFooterComponent={
                <TouchableOpacity
                    onPress={() => navigation.navigate('Category')}
                    style={styles.categoryTouch}>
                    <View style={[{
                        backgroundColor: theme.secondryBackgroundColor
                    }, styles.categoryView]}>
                        <FontAwesome name={'ellipsis-h'} style={[{
                            color: iconColor ? iconColor :
                                theme.primary,
                            fontSize: theme.appFontSize.largeSize + 3,
                        }]} />
                    </View>

                    <Text style={[
                        styles.categoryText,
                        {
                            color: theme.textColor,
                            fontSize: theme.appFontSize.smallSize,
                            fontFamily: theme.appFontSize.fontFamily,
                        }
                    ]}>
                        {reduxLang.More}
                    </Text>

                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    categoryTouch: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14
    },
    categoryView: {
        borderRadius: 100,
        height: WIDTH * 0.12,
        width: WIDTH * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 1
    },
    categoryText: {
        paddingTop: 6
    }
});

const mapStateToProps = (state: any) => ({
    theme: state.configReducer.theme,
    reduxLang: state.configReducer.lang
});

export default connect(mapStateToProps, null)(App);
