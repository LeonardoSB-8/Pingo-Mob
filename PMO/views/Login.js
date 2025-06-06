import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform,
ScrollView, Alert, ActivityIndicator} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    // Validações básicas
    if (!formData.email || !formData.password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post('/login', {
        Email: formData.email,
        Senha: formData.password
      });

      if (response.data.success) {
        // Login bem-sucedido - você pode armazenar o token/userData aqui
        navigation.navigate('Home', { user: response.data.user });
      } else {
        Alert.alert('Erro', response.data.message || 'Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      
      let errorMessage = 'Erro ao conectar com o servidor';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message?.includes('Network Error')) {
        errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
      }
      
      Alert.alert('Erro', errorMessage);
    } finally {
      setIsLoading(false);
    }
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
          <Image source={require('../assets/logo.png')} style={styles.Logo} resizeMode="contain"/>
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
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
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
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons 
                  name={showPassword ? 'visibility-off' : 'visibility'} 
                  size={24} 
                  color="#4E94FF" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Botão de Continuar */}
          <TouchableOpacity 
            style={[styles.primaryButton, isLoading && styles.disabledButton]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.primaryButtonText}>Continuar</Text>
            )}
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