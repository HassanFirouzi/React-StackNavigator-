import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ListingScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity 
      style={styles.profileBtn}
      onPress={()=>navigation.goBack()} 
      >
        <Text>önceki Sayfaya Geri Dön</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  profileBtn: {
    backgroundColor: 'rgba(249, 85, 31, 1)',
    margin: 'auto',
    padding: 10,
    marginTop: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderBlockColor: 'rgba(0,0,0,0.4)',
  },
});
