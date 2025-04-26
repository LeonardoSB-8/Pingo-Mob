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

  // ===== HEADER ===== //
  headerContainer: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
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
  
  // ===== MENU ===== //
  menuContainer: {
    marginTop: 40,
    borderRadius: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },

  // ===== WELCOME PAGE ===== //
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
  footer: {
    padding: 20,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
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
  primaryButton: { // Este estilo será usado pelo botão "Continuar"
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
  // Estilos específicos da Home
 mainHeader: {
  backgroundColor: '#4CAF50',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 15,
  paddingHorizontal: 20,
},
appTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
},
userIcon: {
  flex: 1,
  alignItems: 'flex-end',
},

// Sub-header
subHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 12,
  paddingHorizontal: 20,
  backgroundColor: '#f5f5f5',
  borderBottomWidth: 1,
  borderBottomColor: '#e0e0e0',
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
  homeFooter: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  contactContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  contactTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactItem: {
    color: '#555',
    marginBottom: 3,
  },
  
  debugBorder: {
  borderWidth: 1,
  borderColor: 'red',
}
});

export { styles };