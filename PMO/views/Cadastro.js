import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform,
ScrollView, Alert, ActivityIndicator, response } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import api from '../api';

const Cadastro = () => {
  // Estados do formulário
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cpf: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // Navegação para a tela de login
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  // Atualiza os campos do formulário
  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Formatação do CPF
  const formatCPF = (text) => {
    const numericValue = text.replace(/\D/g, '');
    let formattedValue = numericValue;
    
    if (numericValue.length > 3) {
      formattedValue = `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
    }
    if (numericValue.length > 6) {
      formattedValue = `${formattedValue.slice(0, 7)}.${formattedValue.slice(7)}`;
    }
    if (numericValue.length > 9) {
      formattedValue = `${formattedValue.slice(0, 11)}-${formattedValue.slice(11)}`;
    }
    
    return formattedValue.slice(0, 14);
  };

  // Validações do formulário
  const validateForm = () => {
    const { username, email, cpf, password } = formData;
    const cpfDigits = cpf.replace(/\D/g, '');

    if (!username || !email || !cpfDigits || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return false;
    }

    if (cpfDigits.length !== 11) {
      Alert.alert('Erro', 'CPF deve ter 11 dígitos');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    return true;
  };

  // Envio do formulário
const handleRegister = async () => {
  if (!validateForm()) return;

  setIsLoading(true);

  try {
    const response = await api.post('/register', {
      NomeUsuario: formData.username,
      Email: formData.email,
      CPF: formData.cpf.replace(/\D/g, ''),
      Senha: formData.password
    }).catch(error => {
      // Trata erros de conexão/requisição
      throw { 
        message: error.message || 'Erro na requisição',
        response: error.response 
      };
    });

    if (response.data?.success) {
      Alert.alert('Sucesso', 'Cadastro realizado!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } else {
      throw {
        message: response.data?.message || 'Erro desconhecido no cadastro',
        response
      };
    }
  } catch (error) {
    console.error('Erro completo:', error);
    
    let errorMessage = error.message;
    
    // Se existir resposta do servidor
    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    // Erros de rede
    else if (error.message?.includes('Network Error')) {
      errorMessage = 'Não foi possível conectar ao servidor';
    }

    Alert.alert('Erro', errorMessage);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Cabeçalho */}
        <View style={styles.authHeader}>
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.Logo} 
            resizeMode="contain"
          />
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
              value={formData.username}
              onChangeText={(text) => handleChange('username', text)}
              maxLength={100}
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
              autoComplete="email"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              maxLength={150}
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
              value={formData.cpf}
              onChangeText={(text) => handleChange('cpf', formatCPF(text))}
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
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
                maxLength={50}
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
            style={[styles.primaryButton, isLoading && styles.disabledButton]}
            onPress={handleRegister}
            disabled={isLoading}
            activeOpacity={0.7}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.primaryButtonText}>Criar</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Link para Login */}
        <View style={styles.authLinkContainer}>
          <Text style={styles.authLinkText}>Já tem uma conta?</Text>
          <TouchableOpacity 
            onPress={navigateToLogin}
            activeOpacity={0.7}
          >
            <Text style={styles.loginLink}> Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;