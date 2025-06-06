import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './Styles';
import { Menu, MenuItem } from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Localidade = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { localidadeId } = route.params; // Agora recebemos apenas o ID
  const [localidade, setLocalidade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  // Busca os detalhes da quadra
  useEffect(() => {
    const fetchLocalidade = async () => {
      try {
        const response = await api.get(`/quadras/${localidadeId}`);
        if (response.data.success) {
          setLocalidade(response.data.quadra);
        } else {
          console.error('Erro ao buscar localidade:', response.data.message);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocalidade();
  }, [localidadeId]);

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

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  const handleSuggestionPress = () => {
    Linking.openURL('https://forms.gle/B3hdwvUbTvxzbmZYA').catch(() => {
      alert('Não foi possível abrir o formulário');
    });
  };

  if (loading || !localidade) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.fullContainer}>
      {/* Header Personalizado */}
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

      {/* Links de Navegação */}
      <View style={styles.localNavLinks}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.indicateLink}>← Locais Disponíveis</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSuggestionPress}>
          <Text style={styles.indicateLink}>Sugerir Localidade Pública →</Text>
        </TouchableOpacity>
      </View>

      {/* Título Principal */}
      <Text style={styles.localMainTitle}>Informações da Localidade</Text>

      {/* Card da Quadra */}
      <View style={styles.localCard}>
        {localidade.Fotos && localidade.Fotos.split('; ')[0] && (
          <Image 
            source={{ uri: localidade.Fotos.split('; ')[0] }} 
            style={styles.localCardImage}
            resizeMode="cover"
            defaultSource={require('../assets/favicon.png')}
          />
        )}
        
        <View style={styles.localCardContent}>
          <Text style={styles.localCardTitle}>{localidade.NomeQuadra}</Text>
          
          {/* Detalhes da Quadra */}
          <View style={styles.localCardRow}>
            <Text style={styles.localCardLabel}>Região:</Text>
            <Text style={styles.localCardText}>{localidade.Regiao}</Text>
          </View>
          
          <View style={styles.localCardRow}>
            <Text style={styles.localCardLabel}>Endereço:</Text>
            <View style={styles.enderecoContainer}>
              <Text style={styles.localCardText}>{localidade.EnderecoQuadra}</Text>
              <Text style={styles.localCardText}>
                {localidade.Bairro}, {localidade.Cidade}
              </Text>
            </View>
          </View>
          
          <View style={styles.localCardRow}>
            <Text style={styles.localCardLabel}>Esportes:</Text>
            <View style={styles.localSports}>
              {localidade.Esportes.split(', ').map((esporte, i) => (
                <Text key={i} style={styles.localSportItem}>• {esporte}</Text>
              ))}
            </View>
          </View>
          
          {/* Descrição */}
          <View style={styles.localDescription}>
            <Text style={styles.localDescriptionTitle}>Descrição</Text>
            <Text style={styles.localDescriptionText}>
              {localidade.Descricao || "Nenhuma descrição disponível."}
            </Text>
          </View>
        </View>
      </View>

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
          <TouchableOpacity onPress={() => Linking.openURL('mailto:pingo@gmail.com')}>
            <Text style={styles.contactLink}>E-mail: pingo@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('tel:+5511938365724')}>
            <Text style={styles.contactLink}>Telefone: +55 11 93836-5724</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Localidade;