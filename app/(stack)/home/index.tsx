import { SafeAreaView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text className="mb-5">HomeScreen</Text>
        {/* <Link className="mb-2" href="/products">
          Produtos
        </Link>
        <Link className="mb-2" href="/profile">
          Perfil
        </Link>
        <Link className="mb-2" href="/settings">
          Configurações
        </Link> */}
        {/* <CustomButton
          children="Produtos"
          onPress={() => router.push("/products")}
        /> */}
        <Link href="/products" asChild>
          <CustomButton className="mb-2" children="Produtos" />
        </Link>
        <Link href="/profile" asChild>
          <CustomButton className="mb-2" children="Perfil" color="secondary" />
        </Link>
        <Link href="/settings" asChild>
          <CustomButton
            className="mb-2"
            children="Configurações"
            color="tertiary"
          />
        </Link>
        <Link href="/products" asChild>
          <CustomButton
            className="mb-2"
            children="Produtos"
            variant="text-only"
          />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
