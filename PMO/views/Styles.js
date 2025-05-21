import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  // ===== ESTILOS GLOBAIS ===== //
  fullContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  Logo: {
    marginTop: 10,
    width: 100,
    height: 40,
  },
  userIcon: {
    flex: 1,
    marginTop: 5,
    alignItems: 'flex-end',
  },
  // ===== RODAPÉ GLOBAL ===== //
  footer: {
    padding: 20,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  footerLink: {
    fontSize: 14,
    color: '#4CAF50',
    marginHorizontal: 10,
    textDecorationLine: 'underline',
  },
  contactContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactLink: {
    fontSize: 14,
    color: '#4CAF50',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },

  // ===== BOTÕES DE AUTENTICAÇÃO ===== //
  authButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  registerButton: {
    backgroundColor: '#388E3C',
  },
  authButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  disabledButton: {
  backgroundColor: '#81C784', // Verde mais claro
  opacity: 0.7,
},
  
  // ===== WELCOME PAGE ===== //
  headerContainer: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 15,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  step: {
    alignItems: 'center',
    width: '30%',
  },
  stepText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    color: '#333',
  },
  suggestionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  suggestionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
  },
 

  // ===== TELAS DE AUTENTICAÇÃO (LOGIN/CADASTRO) ===== //
  authHeader: {
    marginBottom: 40,
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  primaryButton: { // Este estilo será usado pelo botão "Continuar, Criar"
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  primaryButtonText: { // Estilo do texto do botão
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  authLinkContainer: { // Container do texto "Não tem uma conta?"
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
    alignItems: 'center',
  },
  authLinkText: { // Texto principal
    color: '#666',
    fontSize: 14,
  },
  authLink: { // Texto "Registrar"
    color: '#4CAF50',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 4,
  },
// ===== TELA HOME ===== //
 mainHeader: {
  backgroundColor: '#4CAF50',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 15,
  paddingHorizontal: 20,
},


// Sub-header
subHeader: {
  flex:1,
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginTop: 20,
  paddingHorizontal: 20,
  backgroundColor: '#f5f5f5',

},
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},
indicateLink: {
  color: '#4CAF50',
  fontWeight: '600',
  textDecorationLine: 'underline',
},
  // Header "Locais Disponíveis"
  locaisHeader: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  locaisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  homeHeader: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  quadraContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    margin: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  quadraHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  quadraImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  quadraInfo: {
    flex: 1,
  },
  quadraNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  quadraEsportes: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  quadraDetails: {
    padding: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    width: 80,
    color: '#555',
  },
  detailValue: {
    flex: 1,
    color: '#333',
  },
  esportesContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  esporteItem: {
    color: '#4CAF50',
    marginBottom: 5,
    includeFontPadding: false,
  },

// ===== TELA LOCALIDADE ===== //
localHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical: 15,
},
Logo: {
  width: 100,
  height: 40,
},
localNavLinks: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: '#f5f5f5',
},
localNavLink: {
  color: '#4CAF50',
  fontSize: 14,
  fontWeight: '500',
},
localMainTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#333',
  paddingHorizontal: 20,
  paddingVertical: 15,
  textAlign: 'center',
},
localCard: {
  margin: 15,
  backgroundColor: '#fff',
  borderRadius: 8,
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},
localCardImage: {
  width: '100%',
  height: 180,
},
localCardContent: {
  padding: 15,
},
localCardTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},
localCardRow: {
  flexDirection: 'row',
  marginBottom: 8,
},
localCardLabel: {
  fontWeight: 'bold',
  width: 80,
  color: '#555',
},
localCardText: {
  flex: 1,
  color: '#333',
},
localSports: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
localSportItem: {
  marginRight: 15,
  color: '#4CAF50',
},
localDescriptionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
  textAlign: 'center',

},
localDescription: {
  borderTopWidth: 1,
  borderTopColor: '#e0e0e0',
  padding: 20,
  backgroundColor: '#fff',
  marginTop: 10,
},
localDescriptionText: {
  fontSize: 16,
  color: '#333',
  lineHeight: 24,
},
// ===== TELA SAIR ===== //
userIconContainer: {
  flex: 1,
  alignItems: 'flex-end',
},
menuItem: {
  padding: 10,
},
menuItemContent: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 5,
},
menuItemText: {
  fontSize: 16,
  color: '#333',
  marginLeft: 10,
},
});

export { styles };