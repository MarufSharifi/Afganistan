import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import Image from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import center from '../assets/home_center.png';
import side from '../assets/home_side.png';
import Search from '../assets/svgs/searchIcon';
import DrawerIcon from '../assets/svgs/DrawerIcon';

const {height} = Dimensions.get('screen');

const Button = Platform.OS === 'android' ? RectButton : Pressable;

const Home = () => {
  const navigation = useNavigation();

  const _goToProvince = useCallback(() => {
    navigation.navigate('province');
  }, []);

  const _goToSearchPage = useCallback(() => {}, []);

  const _openDrawer = useCallback(() => {
    navigation.openDrawer();
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.header}>
        <Button
          onPress={_openDrawer}
          style={styles.openDrawerContainer}
          activeOpacity={0.8}>
          <DrawerIcon width={wp(5)} height={wp(5)} fill="#fff" />
        </Button>
        <Button onPress={_goToSearchPage}>
          <Search width={wp(5)} height={wp(5)} fill="#fff" />
        </Button>
      </View>
      <Image source={side} resizeMode="cover" style={styles.sideImage} />
      <Image source={center} style={styles.centerImage} />
      <View style={styles.cityContainer}>
        <View>
          <TouchableOpacity
            onPress={_goToProvince}
            activeOpacity={0.9}
            style={styles.card}>
            <Text>Herat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_goToProvince}
            activeOpacity={0.9}
            style={styles.card}>
            <Text>Kabul</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_goToProvince}
            activeOpacity={0.9}
            style={styles.card}>
            <Text>Mezar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={_goToProvince}
            activeOpacity={0.9}
            style={styles.card}>
            <Text>Kandhar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_goToProvince}
            activeOpacity={0.9}
            style={styles.card}>
            <Text>badekh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_goToProvince}
            activeOpacity={0.9}
            style={styles.card}>
            <Text>panj</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    paddingHorizontal: wp(8),

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
