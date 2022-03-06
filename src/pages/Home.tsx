import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Mom</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>To Profile Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
