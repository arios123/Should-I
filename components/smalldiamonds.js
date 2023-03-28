import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SmallDiamonds = (props) => {


    const OneTitle = () => {
        return (
            <View>
                <Text style={{ position: 'absolute', top: 3, left: 6, fontSize: 12, fontFamily: 'Calligraffitti', transform: ([{ rotateZ: '-45deg' }]) }}>{props.value}</Text>
                <Text style={{ position: 'absolute', left: 5, top: 15, fontSize: 8, color: "black", fontFamily: 'Carrois Gothic SC', transform: ([{ rotateZ: '-45deg' }]) }}>{props.title}</Text>
            </View>
        );
    }

    const TwoTitles = () => {
        return (
            <View>
                <Text style={{ position: 'absolute', top: 3, left: 6, fontSize: 12, fontFamily: 'Calligraffitti', transform: ([{ rotateZ: '-45deg' }]) }}>{props.value}</Text>
                <Text style={{ position: 'absolute', left: 2, top: 11, fontSize: 8, color: "black", fontFamily: 'Carrois Gothic SC', transform: ([{ rotateZ: '-45deg' }]) }}>{props.title}</Text>
                <Text style={{ position: 'absolute', left: 3, top: 18, fontSize: 7, color: "black", fontFamily: 'Carrois Gothic SC', transform: ([{ rotateZ: '-45deg' }]) }}>{props.titletwo}</Text>
            </View>
    );
    }

    return (
        <View style={{ width: props.size, height: props.size, marginRight: 30 }}>
            <LinearGradient colors={[props.startcolor, props.endcolor]} style={{ flex: 1, transform: ([{ rotateZ: '45deg' }])}}>
                {props.secTitle ? TwoTitles() : OneTitle()}
            </LinearGradient>
        </View>
    );
}

export default SmallDiamonds;