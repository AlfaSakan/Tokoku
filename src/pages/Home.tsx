import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {RootStackParamList} from '../../App';
import {ArrowDown2Icon} from '../assets/images/svg';
import FlexContainer from '../components/atoms/FlexContainer';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TypographyText from '../components/atoms/TypographyText';

import {useAppDispatch, useAppSelector} from '../config/redux/app/hooks';
import {incremented} from '../config/redux/features/counter/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const {counter} = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView>
      <PaddingContainer>
        <View>
          <Text>{counter.value}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(incremented());
              if (counter.value > 5) {
                navigation.navigate('Profile');
              }
            }}>
            <Text>To Profile Page</Text>
          </TouchableOpacity>
          <View style={{backgroundColor: 'red', zIndex: 1}}>
            <FlexContainer>
              <TypographyText text="texstkljeflae" />
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <ArrowDown2Icon />
              </TouchableOpacity>
            </FlexContainer>
            {isVisible && (
              <View
                style={{
                  width: 150,
                  backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 0,
                  top: 25,
                }}>
                <TypographyText text="test text" />
                <TypographyText text="test text" />
                <TypographyText text="test text" />
                <TypographyText text="test text" />
                <TypographyText text="test text" />
              </View>
            )}
          </View>
          <Margin margin={15} />
          <View style={{backgroundColor: 'red', zIndex: 0}}>
            <FlexContainer>
              <TypographyText text="texstkljeflae" />
              <TouchableOpacity onPress={() => setIsVisible2(!isVisible2)}>
                <ArrowDown2Icon />
              </TouchableOpacity>
            </FlexContainer>
            {isVisible2 && (
              <View
                style={{
                  width: 150,
                  backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 0,
                  top: 25,
                }}>
                <TypographyText text="test text" />
                <TypographyText text="test text" />
                <TypographyText text="test text" />
                <TypographyText text="test text" />
                <TypographyText text="test text" />
              </View>
            )}
          </View>
        </View>
      </PaddingContainer>
    </SafeAreaView>
  );
};

export default Home;
