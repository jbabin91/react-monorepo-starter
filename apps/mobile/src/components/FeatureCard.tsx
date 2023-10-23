import { Box, Image, Text } from '@gluestack-ui/themed';
import type { ImageSourcePropType } from 'react-native';

export const FeatureCard = ({
  iconSvg,
  name,
  desc,
}: {
  iconSvg: string | ImageSourcePropType;
  name: string;
  desc: string;
}) => {
  return (
    <Box
      borderColor="$borderDark700"
      borderWidth={1}
      flex={1}
      flexDirection="column"
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Image
          alt="document"
          height={22}
          role="img"
          source={iconSvg}
          width={22}
        />
        <Text color="$white" fontSize={22} fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};
