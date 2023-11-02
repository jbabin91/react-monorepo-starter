import { Box, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@jbabin91/mobile-theme';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Container } from '../components/Container';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <GluestackUIProvider config={config}>
        <Box
          height="100%"
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Container />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
