import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';

export default function App() {
  return (
    <View className="flex-1">
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

