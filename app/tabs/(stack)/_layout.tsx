import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
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
