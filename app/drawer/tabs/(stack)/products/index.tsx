import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";

import { products } from "@/store/products.store";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-2">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                // href={`/tabs/(stack)/products/${item.id}`}
                href={`/drawer/tabs/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalhes
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
