import { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Regular": require("./../assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Black": require("./../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Medium": require("./../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Light": require("./../assets/fonts/WorkSans-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
  // return <Slot />;
  // return <Stack />;
};

export default RootLayout;
