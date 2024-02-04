import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  PressableProps,
} from "react-native";

const TouchableComponent: React.ElementType =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

interface IButton extends PressableProps {
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({ onPress, children, ...props }: IButton) => {
  return (
    <TouchableComponent {...props} onPress={onPress}>
      {children}
    </TouchableComponent>
  );
};

export default Button;
