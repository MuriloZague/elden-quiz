import { TouchableOpacity, View, Text, StyleSheet } from "react-native"


export interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} activeOpacity={0.5}>
            <Text style={styles.text}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#183c3c',
        paddingVertical: 15,
        borderRadius: 50,
        paddingHorizontal: 30,
        opacity: 0.8,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
})