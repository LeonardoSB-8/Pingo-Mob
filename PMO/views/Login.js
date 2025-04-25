import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    navigation.navigate('Home'); // Redirecionar após login
  };

  const navigateToRegister = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cabeçalho */}
        <View style={styles.authHeader}>
          <Text style={styles.authTitle}>Entrar</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formContainer}>
          {/* Campo de Email */}
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

          {/* Campo de Senha */}
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

          {/* Botão de Continuar */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleLogin}
          >
            <Text style={styles.primaryButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>

        {/* Link para Registro */}
        <View style={styles.authLinkContainer}>
          <Text style={styles.authLinkText}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.registerLink}> Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default Login;