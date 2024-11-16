import { SafeAreaView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <Text>HomeScreen</Text>
        <Link className="my-5" href="/products">
          Produtos
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil
        </Link>
        <Link className="mb-5" href="/settings">
          Configurações
        </Link>
        {/* <CustomButton
          children="Produtos"
          onPress={() => router.push("/products")}
        /> */}
        <Link href="/products" asChild>
          <CustomButton className="mb-5" children="Produtos" />
        </Link>
        <Link href="/products" asChild>
          <CustomButton children="Produtos" variant="text-only" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
