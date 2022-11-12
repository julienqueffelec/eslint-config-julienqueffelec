module.exports = {
  plugins: ['import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'prettier',
    'plugin:import/typescript'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['UPPER_CASE'],
        selector: 'enumMember'
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        selector: 'variable'
      },
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter'
      }
    ],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'block-scoped-var': ['error'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true
      }
    ],
    curly: ['error', 'all'],
    'func-names': 'error',
    'import/extensions': 'off',
    'import/named': ['error'],
    'import/no-default-export': 'warn',
    'import/no-duplicates': [
      'error',
      {
        considerQueryString: true
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-lowercase-title': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',
    'max-depth': ['warn', 4],
    'max-lines': [
      'error',
      {
        max: 250,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-params': [
      'error',
      {
        max: 2
      }
    ],
    'no-console': 'error',
    'no-else-return': 'error',
    'no-lonely-if': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': ['warn'],
    'no-param-reassign': ['error'],
    'no-restricted-exports': 'warn',
    'no-shadow': ['off'],
    'no-undef': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': ['error'],
    'no-var': ['error'],
    'operator-assignment': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: 'const'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'let'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'var'
      },
      {
        blankLine: 'never',
        next: 'const',
        prev: 'const'
      },
      {
        blankLine: 'never',
        next: 'const',
        prev: 'var'
      },
      {
        blankLine: 'never',
        next: 'var',
        prev: 'const'
      },
      {
        blankLine: 'never',
        next: 'var',
        prev: 'var'
      },
      {
        blankLine: 'never',
        next: 'let',
        prev: 'let'
      },
      {
        blankLine: 'never',
        next: 'var',
        prev: 'let'
      },
      {
        blankLine: 'never',
        next: 'const',
        prev: 'let'
      },
      {
        blankLine: 'never',
        next: 'let',
        prev: 'var'
      },
      {
        blankLine: 'never',
        next: 'let',
        prev: 'const'
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: 'block-like',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'block-like'
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'export'
      }
    ],
    'prefer-arrow-callback': ['error'],
    'prefer-template': ['error'],
    quotes: ['error', 'single', 'avoid-escape'],
    radix: 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true
      }
    ],
    'react/display-name': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-handler-names': 'error',
    'react/jsx-max-depth': [
      'warn',
      {
        max: 6
      }
    ],
    'react/jsx-no-leaked-render': [
      'error',
      {
        validStrategies: ['coerce', 'ternary']
      }
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'off',
    'react/no-multi-comp': 'error',
    'react/no-unescaped-entities': 'off',
    'react/no-unstable-nested-components': ['warn'],
    'react/no-unused-prop-types': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'vars-on-top': ['error']
  }
};
