const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Adicione esta linha para ignorar conflitos
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'react-native/Libraries/Components/StatusBar/StatusBar': require.resolve('./empty.js')
};

module.exports = config;