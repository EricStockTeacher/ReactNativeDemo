import { Text, Pressable, View, TextInput, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/button';
import { MovieContext } from '../components/MovieContext';
import { useContext, useState } from 'react';

export default function Page() {
  const { movie, setMovie } = useContext(MovieContext);

  const [movieName, setMovieName] = useState(movie.name);
  const [movieYear, setMovieYear] = useState(movie.year);
  const [movieActors, setMovieActors] = useState(movie.actors);
  const [moviePosterIndex, setMoviePosterIndex] = useState(movie.imageIndex);
  const [displayPosterValue, setDisplayPosterValue] = useState(movie.imageIndex.toString());


  console.log("here");
  const updateMovieInfo = () => {
        const latestData = {
            "name": movieName,
            "year": movieYear,
            "actors": movieActors,
            "imageIndex": moviePosterIndex
        }
        setMovie(latestData);
  }

  const updateActors = (text) => {
     const tokens = text.split(',');
     setMovieActors(tokens);
  }

  const updateMoviePosterIndex = (text) => {
     setDisplayPosterValue(text);
     if( !isNaN(text) && text != "") {
        setMoviePosterIndex(parseInt(text));
        console.log("setting data");
     }
  }


  return (
    <>
        <Text>Movie Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={setMovieName}
            value={movieName}
        />
        <Text>Movie Year</Text>
        <TextInput
            style={styles.input}
            onChangeText={setMovieYear}
            value={movieYear}
        />
        <Text>Movie Actors</Text>
        <TextInput
            style={styles.input}
            onChangeText={updateActors}
            value={movieActors.join(',')}
        />
        <TextInput
            style={styles.input}
            onChangeText={updateMoviePosterIndex}
            value={displayPosterValue}
        />
        <Button
            label={"Update"}
            onPress={updateMovieInfo}
        />
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