module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'simple-import-sort',
    'import',
    'unused-imports',
    'import',
    'prettier',
    'jest'
  ],
  rules: {
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/member-delimiter-style': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'no-undef': 'error',
      'no-negated-condition': 'error',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      semi: 'off',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      'import/exports-last': 'error',
      'import/first': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off',
      'import/prefer-default-export': 'off',

      'padding-line-between-statements': [
        'error',
        { blankLine: 'never', next: 'var', prev: 'var' },
        { blankLine: 'never', next: 'let', prev: 'let' },
        { blankLine: 'never', next: 'var', prev: 'let' },
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: 'block-like', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'block-like' },
        { blankLine: 'always', next: 'export', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'export' }
      ],
      'max-lines': [
        'error',
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true
        }
      ],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'max-params': [
        'error',
        {
          max: 2
        }
      ],
      'react-native/no-raw-text': 'off',
      'max-depth': ['warn', 4],
      'no-var': ['error'],
      'vars-on-top': ['error'],
      'block-scoped-var': ['error'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'import/named': ['error'],
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' }
      ],
      'react/display-name': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-filename-extension': ['off'],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unstable-nested-components': ['warn'],
      'func-names': 'error',
      'import/extensions': 'off',
      'no-underscore-dangle': 'error',
      'no-lonely-if': 'error',
      'import/no-duplicates': ['error', { considerQueryString: true }],
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true
        }
      ],
      'react/no-unused-prop-types': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: true }
      ],
      'react/react-in-jsx-scope': 'error',
      'react/prefer-stateless-function': 'error',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/prefer-each': 'error',
      'jest/prefer-expect-resolves': 'error',
      'jest/prefer-lowercase-title': 'error',
      'jest/no-commented-out-tests': 'error',
      'jest/no-conditional-expect': 'error',
      'jest/valid-title': 'error',
      'jest/prefer-to-contain': 'error',
      'jest/no-standalone-expect': 'error',
      'jest/prefer-to-be': 'error',
      'jest/valid-describe-callback': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error',
      'react/jsx-no-leaked-render': [
        'error',
        { validStrategies: ['coerce', 'ternary'] }
      ],
      radix: 'off',
      'arrow-body-style': ['error', 'as-needed'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports'
        }
      ],
      'no-shadow': ['off'],
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'error',
      'no-restricted-exports': 'warn',
      'import/no-default-export': 'warn',
      'react-native/no-unused-styles': 'off',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'arrow-parens': ['error', 'as-needed'],
      'no-nested-ternary': ['warn'],
      'no-param-reassign': ['error'],
      'prefer-template': ['error'],
      'prefer-arrow-callback': ['error'],
      'react/jsx-boolean-value': 'error',
      'react/no-multi-comp': 'error',
      quotes: ['error', 'single', 'avoid-escape'],
      'react/jsx-max-depth': [
        'warn',
        {
          max: 6
        }
      ],
      'operator-assignment': 'error',
      'react/jsx-handler-names': 'error',
      'no-else-return': 'error',
      'react/destructuring-assignment': [
        'error',
        'always',
        {
          ignoreClassFields: true
        }
      ],
      'consistent-return': [
        'error',
        {
          treatUndefinedAsUnspecified: true
        }
      ],

      'default-case': 'error',
      'lines-between-class-members': 'off',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-console': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-object': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-path-concat': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-tabs': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'sort-imports': 'off',
      'symbol-description': 'error',

      'unused-imports/no-unused-imports': 'error',

      curly: ['error', 'all'],
      'react/hook-use-state': 'error',
      'react/no-array-index-key': 'off',
      'react/jsx-no-useless-fragment': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-implicit-any-catch': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/sort-type-union-intersection-members': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/unified-signatures': 'error',

      'unicorn/no-array-callback-reference': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enumMember',
          format: ['UPPER_CASE']
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow'
        }
      ]
    }
  }