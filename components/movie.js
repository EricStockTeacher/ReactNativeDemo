import { Image, Text } from 'react-native';

export default function Movie( props ) {
    console.log(props.movies.actors);
    return (
        <>
            <Text>{props.movies.name}</Text>
            <Image source={props.image}  />
            <Text>{props.movies.year}</Text>
            {

                props.movies.actors.split(',').map( (actor) => {
                    return <Text key={actor}>{actor}</Text>
                })
            }
        </>
    );
}