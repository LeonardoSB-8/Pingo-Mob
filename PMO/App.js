import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wpage from './views/Wpage';
import Login from './views/Login';
import Cadastro from './views/Cadastro';
import Home from './views/Home';
// import Perfil from './views/Perfil';
import SafeStatusBar from './components/SafeStatusBar';


export default function App() {
  console.log("executando app");
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <SafeStatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome Page" component={Wpage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Perfil" component={Perfil} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}