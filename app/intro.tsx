import Menu from '@/components/menu/inicio';
import Logo from '@/components/template/Logo';
import Pagina from '@/components/template/Pagina';
import { View, Text, StyleSheet } from 'react-native';

export default function intro() {
 return (
    <Pagina>
      <View>
        <Logo/>
        <Menu/>
      </View>
    </Pagina>
  );
}