import { Link, Redirect } from "expo-router";
// import { SafeAreaView, Text, View } from "react-native";

const App = () => {
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text style={{ fontFamily: "WorkSans-Regular" }} className="text-3xl ">
  //         App
  //       </Text>
  //       <Text className="text-3xl font-work-regular text-primary">App</Text>
  //       <Text className="text-3xl font-work-black text-secondary-200">App</Text>
  //       <Text className="text-3xl font-work-medium text-tertiary">App</Text>
  //       <Text className="text-3xl font-work-light">App</Text>

  //       <Link href="/products">Produtos</Link>
  //     </View>
  //   </SafeAreaView>
  // );

  return <Redirect href="/home" />;
  // return <Redirect href="/tabs/" />;
};

export default App;
