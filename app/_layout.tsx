import { Slot, SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

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

  return <Slot />;
  // return <Stack />;
};

export default RootLayout;
