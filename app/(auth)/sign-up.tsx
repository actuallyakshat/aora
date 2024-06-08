import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { Link } from "expo-router";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  async function submitHandler() {
    setLoading(true);
    console.log(form);
    setLoading(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="w-full items-center justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.email}
            handleChangeText={(text: string) =>
              setForm({ ...form, email: text })
            }
            otherStyles="mt-7"
            placeholder="Username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(text: string) =>
              setForm({ ...form, email: text })
            }
            otherStyles="mt-7"
            keyoardType="email-address"
            placeholder="Email Address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(text: string) =>
              setForm({ ...form, password: text })
            }
            otherStyles="mt-7"
            keyoardType="Password"
            placeholder="Password"
          />
          <CustomButton
            title="Sign In"
            handlePress={submitHandler}
            containerStyles="mt-7 w-full"
            isLoading={loading}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-pregular text-gray-100">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
