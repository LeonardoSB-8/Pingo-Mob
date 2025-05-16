import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons,  MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
 
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const handleLogout = () => {
    hideMenu();
    // Adicione aqui sua lógica de logout
  // Limpe o estado do usuário
  // Exemplo com AsyncStorage:
  AsyncStorage.removeItem('userToken');
  // Redirecione para a tela de Wpage
  navigation.navigate('Welcome Page');
  };

  // Dados mockados das quadras (substituir por dados reais posteriormente)
  const quadras = [
    {
      nome: "Quadra Moema",
      regiao: "Zona Sul",
      endereco: "Av. Ibirapuera, 3103 - Moema, São Paulo, SP",
      esportes: ["Futebol", "Basquete"],
      foto: require('../assets/cerebro.jpg') // Substitua pela imagem real
    },
    {
      nome: "Quadra Paulista",
      regiao: "Zona Oeste",
      endereco: "Rua Augusta, 1000 - Consolação, São Paulo, SP",
      esportes: ["Vôlei", "Basquete"],
      foto: require('../assets/gatinn.jpg') // Substitua pela imagem real
    }
  ];
  const navigation = useNavigation();

  const handleSuggestionPress = () => {
    Linking.openURL('https://forms.gle/B3hdwvUbTvxzbmZYA').catch(() => {
      alert('Não foi possível abrir o formulário');
    });
  };

  // const handleUserPress = () => {
  //   if (navigation) {
  //     navigation.navigate('Perfil');
  //   }
  // };

   const handleEmailPress = () => {
      Linking.openURL('mailto:pingo@gmail.com');
    };
  
    const handlePhonePress = () => {
      Linking.openURL('tel:+5511938365724');
    };

  return (
      <ScrollView style={styles.fullContainer}>
      {/* Header Superior com Ícone de Usuário */}
      <View style={styles.mainHeader}>

        <Image source={require('../assets/WhitePingo.png')} style={styles.Logo} resizeMode="contain"/>
        
        <View style={styles.userIconContainer}>
          <Menu
            visible={visible}
            anchor={
              <TouchableOpacity onPress={showMenu}>
                <MaterialIcons name="account-circle" size={28} color="white" />
              </TouchableOpacity>}onRequestClose={hideMenu}>
            
            <MenuItem onPress={handleLogout}>
              <View style={styles.menuItemContent}>
                <MaterialCommunityIcons name="logout" size={20} color="#333" />
                <Text style={styles.menuItemText}>Sair</Text>
              </View>
            </MenuItem>
            
          </Menu>
        </View>
      </View>


      {/* Subtítulo com Link */}
      <View style={styles.subHeader}>
        <TouchableOpacity onPress={handleSuggestionPress}>
          <Text style={styles.indicateLink}>Indicar Local →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.localMainTitle}>Locais Disponíveis</Text>


      {/* Lista de Quadras */}
      {quadras.map((quadra, index) => (
        <TouchableOpacity 
        key={index}
        onPress={() => navigation.navigate('Localidade', { localidade: quadra })}
        style={styles.quadraContainer}
      >
          {/* Cabeçalho da Quadra */}
          <View style={styles.quadraHeader}>
            <Image 
              source={quadra.foto} 
              style={styles.quadraImage} 
              resizeMode="cover"
              defaultSource={require('../assets/favicon.png')}
            />
            <View style={styles.quadraInfo}>
              <Text style={styles.quadraNome}>{quadra.nome}</Text>
              <Text style={styles.quadraEsportes}>✗ Esportes</Text>
            </View>
          </View>

          {/* Detalhes da Quadra */}
          <View style={styles.quadraDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Região:</Text>
                <Text style={styles.detailValue}>{quadra.regiao}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Endereço:</Text>
                <Text style={styles.detailValue}>{quadra.endereco}</Text>
              </View>
              
                {/* Esportes disponíveis */}
                <View style={styles.esportesContainer}>
                  {quadra.esportes.map((esporte, i) => (
                    <Text key={i} style={styles.esporteItem}>
                      {'● ' + esporte}
                    </Text>
                    ))}
                  </View>
            </View>
        </TouchableOpacity>
      ))}
      {/* Rodapé */}
      <View style={styles.footer}>
        <Image source={require('../assets/PingoOficial 3.png')} style={styles.Logo} resizeMode="contain"/>
        <Text style={styles.footerText}>© 2025 PINGO, Inc</Text>
        
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Sobre o Pingo</Text>
          <Text style={styles.footerLink}>Perguntas Frequentes</Text>
        </View>
        
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contatos</Text>
          <TouchableOpacity onPress={handleEmailPress}>
                    <Text style={styles.contactLink}>E-mail: pingo@gmail.com</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={handlePhonePress}>
                    <Text style={styles.contactLink}>Telefone: +55 11 93836-5724</Text>
                  </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;