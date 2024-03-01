import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/Global/fonts';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
