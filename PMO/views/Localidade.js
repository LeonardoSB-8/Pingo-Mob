import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';

const Localidade = ({ route }) => {
  const navigation = useNavigation();
  const { localidade } = route.params;

  const handleUserPress = () => {
    if (navigation) {
      navigation.navigate('Perfil');
    }
  };

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  const handleSuggestionPress = () => {
    Linking.openURL('https://forms.gle/B3hdwvUbTvxzbmZYA').catch(() => {
      alert('Não foi possível abrir o formulário');
    });;
  };

  return (
    <ScrollView style={styles.fullContainer}>
      {/* Header Personalizado */}
      <View style={styles.mainHeader}>
        <Image source={require('../assets/PingoOficial 3.png')} style={styles.Logo} resizeMode="contain"/>
        <TouchableOpacity onPress={handleUserPress} style={styles.userIcon}>
          <MaterialIcons name="account-circle" size={32} color="white" />
        </TouchableOpacity>
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
        <Image 
          source={localidade.foto} 
          style={styles.localCardImage}
          resizeMode="cover"
        />
        
        <View style={styles.localCardContent}>
          <Text style={styles.localCardTitle}>{localidade.nome}</Text>
          
          <View style={styles.localCardRow}>
            <Text style={styles.localCardLabel}>Região:</Text>
            <Text style={styles.localCardText}>{localidade.regiao}</Text>
          </View>
          
          <View style={styles.localCardRow}>
            <Text style={styles.localCardLabel}>Endereço:</Text>
            <Text style={styles.localCardText}>{localidade.endereco}</Text>
          </View>
          
          <View style={styles.localCardRow}>
            <Text style={styles.localCardLabel}>Esportes:</Text>
            <View style={styles.localSports}>
              {localidade.esportes.map((esporte, i) => (
                <Text key={i} style={styles.localSportItem}>• {esporte}</Text>
              ))}
            </View>
          </View>
          {/* Descrição */}
          <View style={styles.localDescription}>
          <Text style={styles.localDescriptionTitle}>Descrição</Text>
            <Text style={styles.localDescriptionText}>
              {localidade.descricao || "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."}
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