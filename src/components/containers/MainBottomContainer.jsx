import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  spacing: {
    height: '300@s',
  },
  container: {
    flex: 1,
    marginTop: '50@s',
    marginHorizontal: '10@s',
  },
});

const MainBottomContainer = ({ children }) => {
  return (
    <>
      <View style={styles.spacing} />
      <View style={styles.container}>{children}</View>
    </>
  );
};

export default MainBottomContainer;
