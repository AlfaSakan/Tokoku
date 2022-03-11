/* eslint-disable react-native/no-inline-styles */
import React, {MouseEvent} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {
  HomeGradientIcon,
  HomeIcon,
  PlusIcon,
  ProfileGradientIcon,
  ProfileIcon,
} from '../assets/images/svg';
import {colors} from '../assets/colors';
import {AddItem, Home, Income, Profile, Stock} from '../pages';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';
import {images} from '../assets/images';

export type BottomNavbarStackType = {
  HomeTab: undefined;
  ProfileTab: undefined;
  Stock: undefined;
  Income: undefined;
  AddItem: undefined;
};

const Tab = createBottomTabNavigator<BottomNavbarStackType>();

export default function BottomNavbarStackScreen({}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tabBarStyles, ...styles.shadow},
        tabBarIcon: ({focused, color, size}) => {
          const rn = route.name;
          size = responsiveWidth(25);

          switch (rn) {
            case 'HomeTab':
              return focused ? (
                <DotBottomNavbar>
                  <HomeGradientIcon width={size} height={size} />
                </DotBottomNavbar>
              ) : (
                <DotBottomNavbar color={[colors.white, colors.white]}>
                  <HomeIcon width={size} height={size} colorIcon={color} />
                </DotBottomNavbar>
              );
            case 'ProfileTab':
              return focused ? (
                <DotBottomNavbar>
                  <ProfileGradientIcon width={size} height={size} />
                </DotBottomNavbar>
              ) : (
                <DotBottomNavbar color={[colors.white, colors.white]}>
                  <ProfileIcon colorIcon={color} width={size} height={size} />
                </DotBottomNavbar>
              );
            case 'Stock':
              return focused ? (
                <DotBottomNavbar>
                  <Image
                    source={images.listColor}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </DotBottomNavbar>
              ) : (
                <DotBottomNavbar color={[colors.white, colors.white]}>
                  <Image
                    source={images.list}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </DotBottomNavbar>
              );
            case 'Income':
              return focused ? (
                <DotBottomNavbar>
                  <Image
                    source={images.chartColor}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </DotBottomNavbar>
              ) : (
                <DotBottomNavbar color={[colors.white, colors.white]}>
                  <Image
                    source={images.chart}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </DotBottomNavbar>
              );
            default:
              return <HomeIcon colorIcon={color} width={size} height={size} />;
          }
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Stock"
        component={Stock}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AddItem"
        component={AddItem}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <PlusIcon
              width={responsiveWidth(70)}
              height={responsiveHeight(70)}
              colorIcon={colors.white}
            />
          ),
          tabBarButton: props => <CustomTabBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Income"
        component={Income}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

interface DotBottomNavbar {
  children: React.ReactNode;
  color?: (string | number)[];
}

const DotBottomNavbar: React.FC<DotBottomNavbar> = ({
  children,
  color = colors.purpleLinear,
}) => {
  return (
    <View style={styles.dotContainer}>
      {children}
      <LinearGradient colors={color} style={styles.dotStyle} />
    </View>
  );
};

interface CustomTabBarProps {
  children: React.ReactNode;
  onPress?: (
    e: GestureResponderEvent | MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: responsiveHeight(-30),
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: responsiveWidth(70),
        height: responsiveWidth(70),
        borderRadius: responsiveWidth(35),
        backgroundColor: colors.black,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  dotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // top: 10,
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginTop: 3,
  },
  tabBarStyles: {
    position: 'absolute',
    bottom: responsiveHeight(25),
    left: responsiveWidth(20),
    right: responsiveWidth(20),
    elevation: 0,
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(15),
    height: responsiveHeight(80),
    paddingVertical: responsiveHeight(30),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  img: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
  },
});
