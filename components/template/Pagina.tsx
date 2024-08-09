import { View, StyleSheet, ImageBackground } from "react-native"

export interface PaginaProps {
    children: React.ReactNode
}

const background = require('@/assets/images/bgsecond.jpg')

export default function Pagina(props: PaginaProps) {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
                {props.children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})