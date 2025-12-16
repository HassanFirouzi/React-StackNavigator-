import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {


const navigation = useNavigation();



  return (
    <View
     style={{ gap: 30, padding: 10 }}
     >
      <Text 
      style={{ fontSize: 20, fontWeight: 500 }}
      >
        Uygulamaya Hoşgeldiniz.
      </Text>
      <View style={{ gap: 10 }}>
        <TouchableOpacity 
        style={styles.profileBtn}
        onPress={()=>navigation.navigate('ProfileScreen')}
        >
          <Text>Profil Ekranına Git</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.listingBtn}
        onPress={()=>navigation.navigate('ListingScreen')}
        >
          <Text>Ilan Ekranına Git</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  profileBtn: {
    backgroundColor: 'rgba(37, 214, 170, 1)',
    margin: 'auto',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderBlockColor: 'rgba(0,0,0,0.4)',
  },
  listingBtn: {
    backgroundColor: 'rgba(53, 167, 209, 1)',
    margin: 'auto',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderBlockColor: 'rgba(0,0,0,0.4)',
  },
});
