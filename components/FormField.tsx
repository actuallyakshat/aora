import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { icons } from "@/constants";
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  keyoardType,
}: {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  placeholder?: string;
  keyoardType?: string;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center border-black-200 flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
