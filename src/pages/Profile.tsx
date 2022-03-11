import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavbarStackScreen'
>;

const Profile = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
