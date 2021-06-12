import React, {useState, useEffect, useContext, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import DrawerIcon from '../assets/svgs/DrawerIcon';
import RadioButton from '../assets/svgs/RadioButton';
import FilledRadioButton from '../assets/svgs/FilledRadioButton';
import {LocalizationContext} from '../contexts/LocalizationContext';
// fa = dari
// ps = pashto

const Button = Platform.OS === 'android' ? RectButton : Pressable;

function ChangeLanguage(props) {
  const {setAppLanguage, appLanguage, translations} =
    useContext(LocalizationContext);

  const [activeLanguage, setActiveLanguage] = useState(appLanguage);

  const navigation = useNavigation();

  const chooseFa = () => {
    setActiveLanguage('fa');
    requestAnimationFrame(() => {
      setAppLanguage('fa');
    });
  };
  const choosePs = () => {
    setActiveLanguage('ps');
    requestAnimationFrame(() => {
      setAppLanguage('ps');
    });
  };

  const _openDrawer = useCallback(() => {
    navigation.openDrawer();
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          onPress={_openDrawer}
          style={styles.openDrawerContainer}
          activeOpacity={0.8}>
          <DrawerIcon width={wp(5)} height={wp(5)} fill="#fff" />
        </Button>
      </View>
      <Text style={styles.chooseLanguage}>زبان خود را انتخاب کنید</Text>
      <Button onPress={chooseFa} style={styles.button}>
        <Text>فارسی</Text>
        {activeLanguage === 'fa' ? (
          <FilledRadioButton width={wp(6)} height={wp(6)} />
        ) : (
          <RadioButton width={wp(6)} height={wp(6)} />
        )}
      </Button>
      <Button onPress={choosePs} style={styles.button}>
        <Text>پشتو</Text>
        {activeLanguage === 'ps' ? (
          <FilledRadioButton width={wp(6)} height={wp(6)} />
        ) : (
          <RadioButton width={wp(6)} height={wp(6)} />
        )}
      </Button>
    </View>
  );
}

export default ChangeLanguage;

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
    paddingHorizontal: wp(4),

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
  chooseLanguage: {
    fontSize: wp(4.5),
    paddingVertical: wp(4),
    paddingEnd: wp(4),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginVertical: wp(5),
    paddingVertical: wp(3),
    paddingHorizontal: wp(8),
    backgroundColor: '#fafafa',
    borderRadius: wp(5),
  },
});
