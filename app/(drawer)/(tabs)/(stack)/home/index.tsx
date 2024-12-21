import { SafeAreaView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        {/* <CustomButton
          children="Produtos"
          onPress={() => router.push("/products")}
        /> */}

        {/* "/drawer/tabs/(stack)/products" */}
        <Link href="/products" asChild>
          <CustomButton className="my-2" children="Produtos" />
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

        {/* <Link href="/products" asChild>
          <CustomButton
            className="mb-2"
            children="Produtos"
            variant="text-only"
          />
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
