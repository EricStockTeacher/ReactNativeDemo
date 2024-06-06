import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Button from './button';

export default function NavBar() {
    const handleHome = () => {
        router.navigate('/');
    }
    const handleUpdate = () => {
        router.navigate('/update');
    }
    return (
        <View style={{ flexDirection:"row", justifyContent:"center"}}>
            <Button label={"Movie"} onPress = {handleHome} />
            <Button label={"Update"} onPress = {handleUpdate} />
        </View>
    );
}