import { Image, Text } from 'react-native';

export default function Movie( props ) {

    return (
        <>
            <Text>{props.movies.name}</Text>
            <Image source={props.imageList[props.movieIndex]}  />
            <Text>{props.movies.year}</Text>
            {
                props.movies.actors.map( (actor) => {
                    return <Text key={actor}>{actor}</Text>
                })
            }
        </>
    );
}