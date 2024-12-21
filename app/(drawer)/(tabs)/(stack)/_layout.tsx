import React from "react";
import { Stack, useNavigation, useRouter } from "expo-router";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    // if (canGoBack) {
    //   navigation.dispatch(StackActions.pop());
    //   return;
    // }
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "chevron-back-outline" : "menu"}
            size={22}
            className={Platform.OS === "android" ? "mr-5" : ""}
            onPress={() => onHeaderLeftClick(!!canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Início",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Produtos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Configurações",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
