import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Perform any necessary app initialization here
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        if (loaded) {
          SplashScreen.hide();
        }
        SplashScreen.hideAsync(); // Hide the splash screen
      }
    }
    prepare();
  }, [loaded]);

  if (!appIsReady) {
    return null; // Or a loading indicator if desired
  }

  return <Stack />;
}
