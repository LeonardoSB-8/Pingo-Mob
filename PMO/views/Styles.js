import { StyleSheet , StatusBar } from 'react-native';

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#8f2f45',
//       alignItems: 'center',
//       justifyContent: 'center',
//      },
    // TextInput: {
    //    width: '95%',
    //    borderWidth: 1,
    //    margin: 10,
    //    padding: 10,
    // },
    // button: {
    //    width: '95%',
    //    color: 'orange'  ,
    //    backgroundColor: '#DDDDDD'  ,
    //    padding: 10,
    //    alignItems: 'center',
    //    borderRadius: 500,  
    // },
    // text: {
    //     color: 'blue',
    // },
    // logo: {
    //   top: '1%',
    //   left: '12%',
    //   width: 300,
    //   height: 300,
    //   borderRadius: 500,
    // },
    // Imagem2: {
    //   width: 300,
    //   height: 300,
    //   borderRadius: 500,
    // },
    // Imagem3: {
    //   width: 300,
    //   height: 300,
    //   borderRadius: 500,
    // 
    // },
    // view1:{
    //   padding: 20,
    //   marginVertical: 8,
    //   borderRadius: 10,
    //   backgroundColor:"green",
    //   width:"100%",
    //   height:"30%"
    // },
    // view2:{
    //   padding: 20,
    //   marginVertical: 8,
    //   borderRadius: 10,
    //   backgroundColor:"red",
    //   width:"100%",
    //   height:"30%"
    // },
    // view3:{
    //   padding: 20,
    //   marginVertical: 8,
    //   borderRadius: 10,
    //   backgroundColor:"pink",
    //   width:"100%",
    //   height:"30%"
    // },
    
// });

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 100,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
    marginHorizontal: 20,
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
  contactLink: {
    fontSize: 14,
    color: '#4CAF50',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
});

export { styles };