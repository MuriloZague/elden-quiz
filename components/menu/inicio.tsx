import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Menu() {
        const router = useRouter();
      
        const handleNavigation = () => {
          router.replace('/questions'); // Navega para a tela principal (index.js)
        };

 return (
    <View>
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={handleNavigation}>
        <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.24)']} style={styles.gradient}/>
            <Text style={styles.text}>Iniciar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.exitcontainer} activeOpacity={0.6}>
        <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.24)']} style={styles.gradient}/>
            <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>    
    </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        opacity: 0.9,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10
    },
    container:{
        marginTop: '8%',
        backgroundColor: '#c19d53',
        paddingVertical: 15,
        borderRadius: 50,
        paddingHorizontal: 30,
        opacity: 0.8,
    },
    exitcontainer: {
        marginTop: '3%',
        backgroundColor: '#c16653',
        paddingVertical: 15,
        borderRadius: 50,
        paddingHorizontal: 30,
        opacity: 0.8,
    }
})