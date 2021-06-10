import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        ولسوالی شیندند یک ولسوالی ریبا و دیدنی است دارای آباده های تاریخی و
        مناظر طبیعی زیاد است
      </Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    paddingHorizontal: wp(5),
    paddingVertical: wp(10),
    color: '#606060',
  },
});
