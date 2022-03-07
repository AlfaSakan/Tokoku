import React, {useEffect, useState} from 'react';
import BaseContainer from '../components/atoms/BaseContainer';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import Search from '../components/molecules/Search';

import {useAppSelector} from '../config/redux/app/hooks';
import Header from '../components/molecules/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import ItemCard from '../components/molecules/ItemCard';
import {useIsFocused} from '@react-navigation/native';
import {ItemDocument} from '../types/itemType';

type Props = NativeStackScreenProps<RootStackParamList, 'Stock'>;

const Stock = ({navigation}: Props) => {
  const [search, setSearch] = useState('');
  const [searchItem, setSearchItem] = useState<ItemDocument[]>([]);

  const isFocused = useIsFocused();

  const {items} = useAppSelector(state => state);

  useEffect(() => {
    const filterItem = items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchItem(filterItem);
  }, [search, isFocused, items]);

  return (
    <BaseContainer>
      <Header navigation={navigation} title="Daftar Barang" />
      <PaddingContainer>
        <Search value={search} onChangeText={setSearch} />
        <Margin margin={20} />
        {searchItem.map((item, index) => {
          return (
            <ItemCard
              index={index}
              item={item}
              key={index}
              navigation={navigation}
            />
          );
        })}
      </PaddingContainer>
    </BaseContainer>
  );
};

export default Stock;
