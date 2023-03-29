import React, { useState } from 'react';
import {
  StyleSheet,
  Text, View,
  TouchableOpacity
} from 'react-native';
import { appColorsType } from '../redux/types/types';
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
  theme: appColorsType;
  onIncrement: (org: number) => void;
  onDecrement: (org: number) => void;
  width: any;
  height: any;
  minimumValue: number;
  initialValue: number;
  counterBackGroundColor: string;
  iconSize: number;
}

const Counter = ({ theme,
  onIncrement, onDecrement, width, height,
  minimumValue, initialValue, counterBackGroundColor,
  iconSize }: IProps) => {

  const [count, setCount] = useState<number>(1)

  function increment() {
    setCount(count + 1)
    return count + 1
  }

  function decrement() {
    setCount(minimumValue < count
      ? count - 1
      : count)

    return minimumValue < count
      ? count - 1
      : count
  }

  function resetValue() {
    setCount(initialValue)
  }

  function setValue(value: number) {
    setCount(value)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.counterStyle, {
          width,
          paddingVertical: height,
          backgroundColor: theme.primaryBackgroundColor,
        }]}
        onPress={() => {
          if (minimumValue < count) { onDecrement(decrement()) }
        }}>
        <FontAwesome
          name={'minus'}
          style={[{
            color: minimumValue < count ?
              theme.primary : theme.secondry,
            fontSize: iconSize,
          }]}
        />
      </TouchableOpacity>
      {/* //////////////////// */}
      <View
        style={[styles.counterDisplay, {
          width: width + 3,
          backgroundColor: counterBackGroundColor
        }]}>
        <Text
          style={{
            color: theme.textColor,
            fontSize: theme.appFontSize.mediumSize
          }}>
          {count}
        </Text>
      </View>
      {/* /////////////////// */}
      <TouchableOpacity
        style={[styles.counterStyle, {
          width,
          paddingVertical: height,
          backgroundColor: theme.primaryBackgroundColor,
        }]}
        onPress={() => {
          onIncrement(increment())
        }}>
        <FontAwesome
          name={'plus'}
          style={[{
            color: theme.primary,
            fontSize: iconSize
          }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  counterStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    elevation: 3
  },
  counterDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});


export default Counter;
