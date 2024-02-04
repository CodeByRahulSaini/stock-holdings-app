import { StyleProp, Text, TextStyle } from "react-native";

import { textVariants, TextVariants } from "../theme/default";

interface ITypography {
  variant: TextVariants;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Typography = ({
  children,
  variant = TextVariants.Body,
  style,
}: ITypography) => {
  const { fontSize, fontWeight } = textVariants[variant];
  return <Text style={[{ fontSize, fontWeight }, style]}>{children}</Text>;
};

Typography.Variants = TextVariants;

export default Typography;
