import { View, Text, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>ELDEN QUIZ</Text>
            <Text style={styles.subTitle}>TESTE SEUS CONHECIMENTOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Mantinia Regular',
        fontSize: 50,
        color: '#fff'
    },
    subTitle: {
        fontFamily: 'Mantinia Regular',
        fontSize: 16.5,
        color: '#fff',
        textDecorationLine: 'underline'
    },
})