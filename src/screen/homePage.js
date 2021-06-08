import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Image from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import center from '../assets/home_center.png';
import side from '../assets/home_side.png';

const {height} = Dimensions.get('screen');

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.header}></View>
      <Image source={side} resizeMode="cover" style={styles.sideImage} />
      <Image source={center} style={styles.centerImage} />
      <View style={styles.cityContainer}>
        <View>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Text>Herat</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Text>Kabul</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Text>Mezar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Text>Kandhar</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Text>badekh</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
