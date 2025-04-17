import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialIcons , MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import { styles } from './Styles.js';
import { useState } from 'react';




const Wpage = () => {

    const [visible, setVisible] = useState(false);
  
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const handleSuggestionPress = () => {
    // Aqui você pode implementar a navegação para a tela de sugestão
    // ou abrir um formulário de contato
    console.log('Sugerir localidade pressionado');
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
      {/* Header/Menu Superior */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>PINGO</Text>
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <MaterialIcons name="menu" size={28} color="white" />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
          style={styles.menuContainer}
        >
          <MenuItem onPress={hideMenu}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="information" size={20} color="#4CAF50" />
              <Text style={styles.menuText}>Sobre o Pingo</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="help-circle" size={20} color="#4CAF50" />
              <Text style={styles.menuText}>Perguntas Frequentes</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="email" size={20} color="#4CAF50" />
              <Text style={styles.menuText}>Contato</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={hideMenu}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="map-marker-plus" size={20} color="#4CAF50" />
              <Text style={styles.menuText}>Sugerir Local</Text>
            </View>
          </MenuItem>
        </Menu>
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
            <Text style={styles.stepText}>Encontre a Quadra que Deseja</Text>
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
          <Text style={styles.faqQuestion}>"Eu Agenda um Horário na Quadra Pública?"</Text>
          <Text style={styles.faqAnswer}>
            Não. Apenas divulgamos informações sobre essas quadras para que os moradores da região possam conhecê-las, incentivando a prática de esportes e promovendo o bem-estar da comunidade. Não realizamos agendamentos, pois elas são de uso público.
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