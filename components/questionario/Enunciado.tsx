import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export interface EnunciadoProps {
    enunciado: string
}


export default function Enunciado(props: EnunciadoProps) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.24)']} style={styles.gradient}/>
            <Text style={styles.question}>{props.enunciado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    question: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        opacity: 0.9,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10
    },
    container: {
        backgroundColor: '#c19d53',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
})