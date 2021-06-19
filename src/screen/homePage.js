import React, {useCallback, useContext} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Image from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import Icon from '../assets/svgs/DrawerIcon';
import {LocalizationContext} from '../contexts/LocalizationContext';
import center from '../assets/home_center.png';
import side from '../assets/home_side.png';

const Home = () => {
  const navigation = useNavigation();

  const {translations} = useContext(LocalizationContext);

  const _goToProvince = useCallback(() => {
    navigation.navigate('province');
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={side}
          resizeMode="cover"
          style={styles.sideImage}
          blurRadius={100}
        />
        <BlurView
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />
        <Image source={center} style={styles.centerImage} />
        <View style={styles.cityContainer}>
          <View>
            <TouchableOpacity
              onPress={_goToProvince}
              activeOpacity={0.9}
              style={styles.card}>
              <Icon fill="#000" />
              <Text>{translations?.homePage.herat}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={_goToProvince}
              activeOpacity={0.9}
              style={styles.card}>
              <Icon fill="#000" />
              <Text>Kabul</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={_goToProvince}
              activeOpacity={0.9}
              style={styles.card}>
              <Icon fill="#000" />
              <Text>Mezar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={_goToProvince}
              activeOpacity={0.9}
              style={styles.card}>
              <Icon fill="#000" />
              <Text>Kandhar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={_goToProvince}
              activeOpacity={0.9}
              style={styles.card}>
              <Icon fill="#000" />
              <Text>badekh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={_goToProvince}
              activeOpacity={0.9}
              style={styles.card}>
              <Icon fill="#000" />
              <Text>panj</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: wp(100),
    height: wp(13),
    backgroundColor: '#242621',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: wp(8),
    paddingStart: wp(4),
    paddingEnd: wp(8),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  openDrawerContainer: {
    width: wp(10),
    height: wp(10),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  sideImage: {
    flex: 1,
    // backgroundColor: 'red',
  },
  centerImage: {
    position: 'absolute',
    left: wp(10),
    top: hp(10),
    width: wp(80),
    height: hp(80),
    zIndex: 3,
    // backgroundColor: 'red',
  },
  cityContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: wp(100),
    height: hp(100),
    zIndex: 5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {
    width: wp(20),
    height: wp(15),
    backgroundColor: '#C7F4F9',
    borderColor: '#94AAAD',
    borderWidth: wp(0.3),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp(5),
  },
});
