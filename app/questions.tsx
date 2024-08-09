import Pergunta from "@/components/questionario/Pergunta";
import Resultado from "@/components/questionario/Resultado";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import useQuestionario from "@/data/hooks/useQuestionario";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {

  const {pergunta, concluido, pontuacao, responder, totalDePerguntas, reiniciar} = useQuestionario()

  return (
    <Pagina>
        <View style={styles.container}>
          <Logo/>
          {concluido ? (
            <Resultado pontuacao={pontuacao} totalDePerguntas={totalDePerguntas} reiniciar={reiniciar} />
          ) : (
            <Pergunta pergunta={pergunta} opcaoSelecionada={responder}/>
          )}
        </View>
    </Pagina>
  );
}

const styles = StyleSheet.create({

  container: {
    gap: 50,
  },

})