import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily} from '../../assets/fonts';
import {SearchIcon} from '../../assets/images/svg';
import {responsiveWidth} from '../../utils/responsiveUI';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  onPress?: () => void;
}

const Search: React.FC<Props> = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        value={value}
        placeholder={'Search'}
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray2}
        style={styles.input}
      />
      <TouchableOpacity onPress={onPress}>
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  textInput: {
    padding: responsiveWidth(15),
    backgroundColor: colors.gray4,
    borderRadius: responsiveWidth(14),
    fontFamily: fontFamily.poppinsRegular,

    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '90%',
  },
});
