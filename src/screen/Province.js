import React, {useCallback} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Background from '../assets/svgs/SecondaryPageBackground';

const Province = () => {
  const _renderItem = useCallback(() => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text>Karukh</Text>
      </TouchableOpacity>
    );
  }, []);

  const _key = useCallback(item => {
    return item.toString();
  }, []);

  return (
    <View style={styles.container}>
      <Background width={wp(50)} height={hp(100)} />
      <FlatList
        data={[1, 3, 4, 5]}
        renderItem={_renderItem}
        keyExtractor={_key}
      />
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
    backgroundColor: '#EDFCD3',
    width: wp(40),
    height: wp(15),
    borderColor: '#C2CAB0',
    borderWidth: wp(0.3),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp(4),
    marginLeft: wp(5),
  },
});
