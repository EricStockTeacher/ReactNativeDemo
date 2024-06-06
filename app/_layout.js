import { Slot } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/navbar';

export default function HomeLayout() {
  return (
    <View style={styles.container}>
        <NavBar/>
        <Slot />
    </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
});



