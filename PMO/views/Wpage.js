import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialIcons , MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import { styles } from './Styles.js';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';




const Wpage = () => {

  const navigation = useNavigation();

  // Funções de navegação
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Cadastro');
  };
  
  const [visible, setVisible] = useState(false);
  
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
  // Componente seguro

  return (
      <View style={styles.fullContainer}>
      {/* Header com botões de Login/Registro */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>PINGO</Text>
        
        <View style={styles.authButtonsContainer}>
          <TouchableOpacity 
            style={styles.authButton}
            onPress={handleLoginPress}
          >
            <Text style={styles.authButtonText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.authButton, styles.registerButton]}
            onPress={handleRegisterPress}
          >
            <Text style={styles.authButtonText}>Registrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Conteúdo principal (scrollável) */}
      <ScrollView style={styles.container}>
        {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>PINGO</Text>
        <Text style={styles.subtitle}>
          Aplicativo informativo de localidades esportivas públicas
        </Text>
        <Text style={styles.description}>
          Buscando incentivar diversidade dos práticos corporais, exercitando o físico e promovendo o bem-estar.
        </Text>
      </View>

      {/* Divisor */}
      <View style={styles.divider} />

      {/* Passo a Passo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PASSO A PASSO</Text>
        <Text style={styles.sectionSubtitle}>FÁCIL E RÁPIDO PARA ESCOLHER</Text>
        
        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <MaterialIcons name="search" size={30} color="#4CAF50" />
            <Text style={styles.stepText}>Encontre a local que Deseja</Text>
          </View>
          
          <View style={styles.step}>
            <MaterialIcons name="info" size={30} color="#4CAF50" />
            <Text style={styles.stepText}>Se informe a respeito do local</Text>
          </View>
          
          <View style={styles.step}>
            <MaterialIcons name="sports-soccer" size={30} color="#4CAF50" />
            <Text style={styles.stepText}>Se divirta!</Text>
          </View>
        </View>
      </View>

      {/* Divisor */}
      <View style={styles.divider} />

      {/* Sugestão de Localidade */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sujestão de Localidade?</Text>
        <Text style={styles.sectionText}>
          Divulgue aqui, é ajude a expandir a comunidade.
        </Text>
        
        <TouchableOpacity 
          style={styles.suggestionButton}
          onPress={handleSuggestionPress}
        >
          <Text style={styles.suggestionButtonText}>Sugira agora</Text>
        </TouchableOpacity>
      </View>

      {/* Divisor */}
      <View style={styles.divider} />

      {/* FAQ */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQ</Text>
        <Text style={styles.sectionSubtitle}>Perguntas Frequentes</Text>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>"Eu Agenda um Horário em Local Público?"</Text>
          <Text style={styles.faqAnswer}>
            Não. Apenas divulgamos informações sobre esses locais para que os moradores da região possam conhecê-las, incentivando a prática de esportes e promovendo o bem-estar da comunidade. Não realizamos agendamentos, pois elas são de uso público.
          </Text>
        </View>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>PINGO</Text>
        <Text style={styles.footerText}>2025 PINGO, Inc</Text>
        
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Sobre o Pingo</Text>
          <Text style={styles.footerLink}>Perguntas Frequentes</Text>
        </View>
        <Text style={styles.contactTitle}>Contatos</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.contactLink}>E-mail: pingo@gmail.com</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.contactLink}>Telefone: +55 11 93836-5724</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
    );
};


export default Wpage;