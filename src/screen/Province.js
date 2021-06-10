import React, {useCallback} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Background from '../assets/svgs/SecondaryPageBackground';

const Province = () => {
  const navigation = useNavigation();

  const _goToDescription = useCallback(() => {
    navigation.navigate('description');
  }, []);

  const _renderItem = useCallback(() => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.itemContainer}
        onPress={_goToDescription}>
        <Text>هرات</Text>
        <Text numberOfLines={2}>شهر هرات دارای ۱۸ ولسوالی است</Text>
      </TouchableOpacity>
    );
  }, []);

  const _key = useCallback(item => {
    return item.toString();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 3, 4, 5]}
        renderItem={_renderItem}
        keyExtractor={_key}
      />
      <Background width={wp(40)} height={hp(100)} />
    </View>
  );
};

export default Province;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    width: wp(50),
    height: wp(20),
    borderRadius: wp(2),
    // borderColor: '#C2CAB0',
    // borderWidth: wp(0.3),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    marginVertical: wp(4),
    marginLeft: wp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
