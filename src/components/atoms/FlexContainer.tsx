import React from 'react';
import {FlexAlignType, StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  alignItems?: FlexAlignType;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

const FlexContainer: React.FC<Props> = ({
  children,
  alignItems = 'center',
  justifyContent = 'space-between',
}) => {
  return (
    <View style={[styles.container, {alignItems, justifyContent}]}>
      {children}
    </View>
  );
};

export default FlexContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
