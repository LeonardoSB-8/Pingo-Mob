import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles.js';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    // Lógica de cadastro aqui
    navigation.navigate('Home'); // Redirecionar após cadastro
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cabeçalho */}
        <View style={styles.authHeader}>
          <Text style={styles.authTitle}>Registrar-se</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formContainer}>
          {/* Nome de Usuário */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome de Usuário*</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome de usuário"
              placeholderTextColor="#999"
              autoCapitalize="words"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Endereço de e-mail*</Text>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* CPF */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CPF*</Text>
            <TextInput
              style={styles.input}
              placeholder="000.000.000-00"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={cpf}
              onChangeText={(text) => {
                // Formatação básica do CPF
                const formattedText = text
                  .replace(/\D/g, '')
                  .replace(/(\d{3})(\d)/, '$1.$2')
                  .replace(/(\d{3})(\d)/, '$1.$2')
                  .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                setCpf(formattedText);
              }}
              maxLength={14}
            />
          </View>

          {/* Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="********"
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons 
                  name={showPassword ? 'visibility-off' : 'visibility'} 
                  size={24} 
                  color="#4CAF50" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Botão Criar */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleRegister}
          >
            <Text style={styles.primaryButtonText}>Criar</Text>
          </TouchableOpacity>
        </View>

        {/* Link para Login */}
        <View style={styles.authLinkContainer}>
          <Text style={styles.authLinkText}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={styles.loginLink}> Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default Cadastro;