import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {
  captionTypography,
  mediumTypography,
  smallTypography,
} from '../../assets/fonts';
import {images} from '../../assets/images';
import {ArrowDown2Icon} from '../../assets/images/svg';
import {useAppDispatch} from '../../config/redux/app/hooks';
import {removeItem} from '../../config/redux/features/item/itemSlice';
import {ItemDocument} from '../../types/itemType';
import {responsiveWidth} from '../../utils/responsiveUI';
import {titleCase} from '../../utils/wordingString';
import FlexContainer from '../atoms/FlexContainer';
import LineSeparator from '../atoms/LineSeparator';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

interface Props {
  item: ItemDocument;
  index: number;
  navigation: NativeStackNavigationProp<ParamListBase, string>;
}

const options = ['Edit', 'Perbarui stok', 'Hapus Barang'];

const ItemCard: React.FC<Props> = ({item, index, navigation}) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useAppDispatch();

  const onPressIcon = () => {
    setVisible(!visible);
  };

  const onPressOption = (selectedItem: ItemDocument, path: string) => {
    setVisible(false);
    if (path === 'Edit') {
      navigation.navigate('EditItem', {...selectedItem});
      return;
    }
    if (path === 'Perbarui stok') {
      navigation.navigate('IncomingOutgoing', {...selectedItem});
      return;
    }

    dispatch(removeItem(selectedItem));
  };

  return (
    <View style={{zIndex: -index}}>
      <Margin margin={10} />
      <View style={styles.containerZIndex}>
        <FlexContainer>
          <FlexContainer justifyContent="flex-start">
            <Image
              style={styles.img}
              source={item.img ?? images.rice}
              resizeMode="contain"
            />
            <View>
              <TypographyText
                text={titleCase(item.name)}
                {...mediumTypography}
              />
              <TypographyText
                text={`${item.amounts} ${item.units}`}
                color={colors.gray1}
                {...smallTypography}
              />
            </View>
          </FlexContainer>
          <TouchableOpacity onPress={onPressIcon}>
            <ArrowDown2Icon />
          </TouchableOpacity>
        </FlexContainer>
        {visible && (
          <View style={styles.dropdownContainer}>
            {options.map((option, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => onPressOption(item, option)}>
                <TypographyText
                  text={option}
                  {...captionTypography}
                  color={colors.gray1}
                />
                <Margin margin={5} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <Margin margin={10} />
      <LineSeparator />
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  img: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    marginRight: responsiveWidth(5),
  },
  dropdownContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.gray3,
    right: 0,
    top: 30,
    padding: responsiveWidth(10),
    borderRadius: responsiveWidth(8),
    // SHADOW IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // SHADOW ANDROID
    elevation: 5,
  },
  containerZIndex: {
    zIndex: 1,
  },
});
