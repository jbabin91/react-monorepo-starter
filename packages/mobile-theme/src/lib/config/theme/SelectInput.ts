import { createStyle } from '@gluestack-style/react';

export const SelectInput = createStyle({
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    w: '$full',
  },
  color: '$textLight900',
  flex: 1,
  h: '$full',
  props: {
    placeholderTextColor: '$textLight500',
  },
});
