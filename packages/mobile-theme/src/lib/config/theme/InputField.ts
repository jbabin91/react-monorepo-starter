import { createStyle } from '@gluestack-style/react';

export const InputField = createStyle({
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
    cursor: 'text',
  },
  color: '$textLight900',
  flex: 1,
  props: {
    placeholderTextColor: '$textLight500',
  },
  variants: {
    size: {
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '2xs': {
        fontSize: '$2xs',
        lineHeight: '$2xs',
      },

      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },

      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$6xl',
      },

      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$7xl',
      },

      lg: {
        fontSize: '$lg',
        lineHeight: '$xl',
      },

      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },

      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },

      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },

      xs: {
        fontSize: '$xs',
        lineHeight: '$sm',
      },
    },
  },
});
