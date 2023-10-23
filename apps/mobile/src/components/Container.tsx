import { Box, Image, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';

import { FeatureCard } from './FeatureCard';

export const Container = () => {
  return (
    <Box bg="$black" flex={1} h="100%">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box
          position="absolute"
          sx={{
            '@base': {
              h: 500,
              w: 500,
            },
            '@lg': {
              h: 700,
              w: 700,
            },
          }}
        >
          <Image
            alt="Gradient"
            h="100%"
            role="img"
            source={require('../../assets/gradient.svg')}
            w="100%"
          />
        </Box>
        <Box
          alignItems="center"
          flex={1}
          sx={{
            '@base': {
              mx: '$5',
              my: '$16',
            },
            '@lg': {
              mx: '$32',
              my: '$24',
            },
          }}
        >
          <Box
            alignItems="center"
            bg="#64748B33"
            px="$6"
            py="$2"
            rounded="$full"
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@md': { alignSelf: 'flex-start' },
              '@sm': {
                flexDirection: 'row',
              },
            }}
          >
            <Text color="$white" fontWeight="$normal">
              Get started by editing
            </Text>
            <Text color="$white" fontWeight="$medium" ml="$2">
              App.tsx
            </Text>
          </Box>
          <Box
            alignItems="center"
            flex={1}
            justifyContent="center"
            sx={{
              '@base': {
                h: 20,
                w: 300,
              },
              '@lg': {
                h: 160,
                w: 400,
              },
            }}
          >
            {/* <Image src="/logo.svg" fill alt="logo" priority /> */}
          </Box>
          <Box
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@md': {
                flexDirection: 'row',
              },
            }}
          >
            <FeatureCard
              desc="Find in-depth information about gluestack features and API."
              iconSvg={require('../../assets/document-data.svg')}
              name="Docs"
            />
            <FeatureCard
              desc="Learn about gluestack in an interactive course with quizzes!"
              iconSvg={require('../../assets/lightbulb-person.svg')}
              name="Learn"
            />
            <FeatureCard
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
              iconSvg={require('../../assets/rocket.svg')}
              name="Deploy"
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
