import PerguntaModel from '@/data/model/Pergunta'
import { View, StyleSheet } from 'react-native'
import Enunciado from './Enunciado'
import Opcao from './Opcao'

export interface PerguntaProps {
    pergunta: PerguntaModel
    opcaoSelecionada: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View style={styles.container}>
            <Enunciado enunciado={props.pergunta.enunciado} />
            <View style={styles.answer}>
                {props.pergunta.opcoes.map((opcao, indice) => (
                    <Opcao key={indice} indice={indice} texto={opcao} onPress={() => {props.opcaoSelecionada(indice)}}/>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    question: {
        color: '#fff',
    },
    answer: {
        gap: 15,
    },
    container: {
        gap: 30,
    },
})