import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
