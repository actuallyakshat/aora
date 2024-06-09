import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "@/context/globalProvider";
export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) {
    return <Redirect href={"/home"} />;
  }
  if (isLoading) {
    return (
      <View className="bg-primary items-center justify-center h-full">
        <Text className="text-2xl font-pbold text-white">Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView className="bg-primary text-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />
          <View className="relative">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: Embark on a journey of limitless
            exploration with Aora.
          </Text>
          <CustomButton
            title="Continue with Email"
            containerStyles="mt-7 w-full"
            handlePress={() => {
              router.push("/sign-in");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={"161622"} barStyle={"light-content"} />
    </SafeAreaView>
  );
}
