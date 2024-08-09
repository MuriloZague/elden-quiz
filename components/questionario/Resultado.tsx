import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router';


export interface ResultadoProps {
    pontuacao: number,
    totalDePerguntas: number,
    reiniciar: () => void
}

export default function Resultado(props: ResultadoProps) {

    const router = useRouter();
      
    const menuNav = () => {
        router.navigate('/intro'); // Navega para a tela principal (index.js)
    };

    const {pontuacao, totalDePerguntas, reiniciar} = props
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>VOCÊ ACERTOU:</Text>
            <Text style={styles.destaque}>
                {Math.round((pontuacao / totalDePerguntas) * 100)}
                <Text style={styles.textow}>%</Text>
            </Text>
            <TouchableOpacity style={styles.btn} onPress={reiniciar}>
                <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.24)']} style={styles.gradient}/>
                <Text style={styles.btntxt}>REINICIAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={menuNav}>
                <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.24)']} style={styles.gradient}/>
                <Text style={styles.btntxt}>MENU INICIAL</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10,
    },
    texto: {
        fontFamily: 'Mantinia Regular',
        fontSize: 25,
        color: '#fff',
    },
    textow: {
        fontFamily: 'Arial',
        fontSize: 25,
        color: '#fff',
    },
    destaque: {
        fontFamily: 'Mantinia Regular',
        fontSize: 50,
        color: '#fff',
        marginBottom: 8,
    },
    btn: {
        backgroundColor: '#c19d53',
        padding: 18,
        borderRadius: 25,
        width: '65%'
    },
    btntxt: {
        fontSize: 18,
        fontFamily: 'Mantinia Regular',
        color: '#fff',
        opacity: 0.9,
        textAlign: 'center'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
})