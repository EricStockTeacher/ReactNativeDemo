import { Text, Pressable, View, TextInput, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/button';

export default function Page() {

  return (
    <>
        <Text>Movie Name</Text>
        <TextInput style={styles.input} />
        <Text>Movie Year</Text>
        <TextInput style={styles.input} />
        <Text>Movie Actors</Text>
        <TextInput style={styles.input} />
        <Button label={"Update"} />
    </>
    )
}

const styles = StyleSheet.create( {
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});