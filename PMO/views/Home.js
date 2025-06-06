import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking, ActivityIndicator} from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [quadras, setQuadras] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Busca as quadras do banco de dados
  useEffect(() => {
    const fetchQuadras = async () => {
      try {
        const response = await api.get('/quadras');
        if (response.data.success) {
          setQuadras(response.data.quadras);
        } else {
          console.error('Erro ao buscar quadras:', response.data.message);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Não foi possível carregar as quadras');
      } finally {
        setLoading(false);
      }
    };

    fetchQuadras();
  }, []);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const handleLogout = async () => {
    hideMenu();
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Welcome Page');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleSuggestionPress = () => {
    Linking.openURL('https://forms.gle/B3hdwvUbTvxzbmZYA').catch(() => {
      alert('Não foi possível abrir o formulário');
    });
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:pingo@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+5511938365724');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

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
                <MaterialIcons name="account-circle" size={32} color="white" />
              </TouchableOpacity>
            }
            onRequestClose={hideMenu}
          >
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
          onPress={() => navigation.navigate('Localidade', { localidadeId: quadra.ID_Quadra })}
          style={styles.quadraContainer}
        >
          {/* Cabeçalho da Quadra */}
          <View style={styles.quadraHeader}>
            {quadra.Fotos && quadra.Fotos.split('; ')[0] && (
              <Image 
                source={{ uri: quadra.Fotos.split('; ')[0] }} 
                style={styles.quadraImage} 
                resizeMode="cover"
                defaultSource={require('../assets/favicon.png')}
              />
            )}
            <View style={styles.quadraInfo}>
              <Text style={styles.quadraNome}>{quadra.NomeQuadra}</Text>
              <Text style={styles.quadraEsportes}>{quadra.Esportes}</Text>
            </View>
          </View>

          {/* Detalhes da Quadra */}
          <View style={styles.quadraDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Região:</Text>
              <Text style={styles.detailValue}>{quadra.Regiao}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Endereço:</Text>
              <View style={styles.enderecoContainer}>
                <Text style={styles.detailValue}>{quadra.EnderecoQuadra}</Text>
                <Text style={styles.detailValue}>{quadra.Bairro}, {quadra.Cidade}</Text>
              </View>
            </View>
            
            {/* Esportes disponíveis */}
            <View style={styles.esportesContainer}>
              {quadra.Esportes.split(', ').map((esporte, i) => (
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