import { StyleProp, Text, TextStyle } from "react-native";

import { defaults } from "../theme";

interface ITypography {
  variant: defaults.TextVariants;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Typography = ({
  children,
  variant = defaults.TextVariants.Body,
  style,
}: ITypography) => {
  const { fontSize, fontWeight } = defaults.textVariants[variant];
  return <Text style={[{ fontSize, fontWeight }, style]}>{children}</Text>;
};

Typography.Variants = defaults.TextVariants;

export default Typography;
