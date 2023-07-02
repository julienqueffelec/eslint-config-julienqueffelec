module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:react-native/all',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react-native-a11y/ios'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint',
    'reanimated',
    'import',
    'jest',
    'bacon',
    'react',
    'sonarjs',
    'react-hooks',
    'promise',
    'jest-formatting',
    'only-error',
    'unused-imports',
    'react-native',
    'simple-import-sort'
  ],
  env: {
    'react-native/react-native': true
  },
  globals: {
    JSX: true,
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'bacon/no-empty-styles': 'error',
        'bacon/modern-react-native': [
          'error',
          { preserve: ['Image', 'StatusBar'] }
        ],
        'no-undef': 'error',
        'no-negated-condition': 'error',
        semi: 'off',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'never', next: ['var', 'let'], prev: ['var', 'let'] },
          { blankLine: 'always', next: 'return', prev: '*' },
          { blankLine: 'always', next: ['block-like', 'export'], prev: '*' },
          { blankLine: 'always', next: '*', prev: ['block-like', 'export'] }
        ],
        'max-lines': [
          'error',
          {
            max: 200,
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

        'prefer-destructuring': [
          'error',
          {
            VariableDeclarator: {
              array: false,
              object: true
            },
            AssignmentExpression: {
              array: true,
              object: false
            }
          },
          {
            enforceForRenamedProperties: false
          }
        ],

        'no-void': 'error',

        'implicit-arrow-linebreak': 'off',

        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        'no-use-before-define': [
          'error',
          { functions: true, classes: true, variables: true }
        ],

        'spaced-comment': [
          'error',
          'always',
          {
            line: {
              exceptions: ['-', '+'],
              markers: ['=', '!', '/'] // space here to support sprockets directives, slash for TS /// comments
            },
            block: {
              exceptions: ['-', '+'],
              markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
              balanced: true
            }
          }
        ],

        'max-depth': ['warn', 4],
        'no-var': ['error'],
        'promise/catch-or-return': 'error',
        'vars-on-top': ['error'],
        'block-scoped-var': ['error'],
        'no-underscore-dangle': 'error',
        'no-lonely-if': 'error',
        'func-names': 'error',
        radix: 'off',
        'arrow-body-style': ['error', 'as-needed'],

        'no-shadow': ['off'],
        'no-console': 'error',
        'no-redeclare': 'error',
        'no-restricted-exports': 'warn',
        'default-case': 'error',
        'lines-between-class-members': 'off',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-empty': 'error',
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
        'multiline-comment-style': [2, 'separate-lines'],
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'sort-imports': 'off',
        'promise/always-return': 'error',
        'symbol-description': 'error',
        'object-shorthand': 'error',
        'no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_'
          }
        ],

        'no-eq-null': 'error',
        'arrow-parens': 'off',
        'no-nested-ternary': ['warn'],
        'no-param-reassign': ['error'],
        'prefer-template': ['error'],
        'prefer-arrow-callback': ['error'],
        quotes: ['error', 'single', 'avoid-escape'],
        'default-case-last': 'error',
        'default-param-last': 'error',
        'react/jsx-max-depth': [
          'warn',
          {
            max: 6
          }
        ],
        'array-callback-return': [
          'error',
          {
            checkForEach: true
          }
        ],
        curly: ['error', 'all'],
        'operator-assignment': 'error',
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

        'simple-import-sort/exports': 'error',

        'react/jsx-closing-tag-location': 'error',

        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: [
              'acc', // for reduce accumulators
              'accumulator', // for reduce accumulators
              'e', // for e.returnvalue
              'ctx', // for Koa routing
              'context', // for Koa routing
              'req', // for Express requests
              'request', // for Express requests
              'res', // for Express responses
              'response', // for Express responses
              '$scope', // for Angular 1 scopes
              'staticContext' // for ReactRouter context
            ]
          }
        ],

        'no-else-return': ['error', { allowElseIf: false }],

        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

        'default-case': ['error', { commentPattern: '^no default$' }],

        'lines-around-directive': [
          'error',
          {
            before: 'always',
            after: 'always'
          }
        ],

        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: true
          }
        ],

        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false
          }
        ],

        'no-trailing-spaces': [
          'error',
          {
            skipBlankLines: false,
            ignoreComments: false
          }
        ],

        'no-restricted-syntax': [
          'error',
          {
            selector: 'ForInStatement',
            message:
              'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
          },
          {
            selector: 'ForOfStatement',
            message:
              'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
          },
          {
            selector: 'LabeledStatement',
            message:
              'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
          },
          {
            selector: 'WithStatement',
            message:
              '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
          }
        ],

        'dot-notation': ['error', { allowKeywords: true }],

        'quote-props': [
          'error',
          'as-needed',
          { keywords: false, unnecessary: true, numbers: false }
        ],

        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        'import/no-default-export': 'error',

        'import/exports-last': 'off',
        'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: '{react,react-native}',
                group: 'external',
                position: 'before'
              },
              {
                pattern: '@screens/**',
                group: 'internal',
                position: 'before'
              },
              {
                pattern: '@components/**',
                group: 'internal'
              },
              {
                pattern: '@navigation/**',
                group: 'internal'
              },
              {
                pattern: '@styles/**',
                group: 'internal'
              },
              {
                pattern: '@stores/**',
                group: 'internal'
              },
              {
                pattern: '@translations/**',
                group: 'internal'
              },
              {
                pattern: '@assets/**',
                group: 'internal'
              },
              {
                pattern: '@utils/**',
                group: 'internal'
              },
              {
                pattern: '@services/**',
                group: 'internal'
              },
              {
                pattern: '@config/**',
                group: 'internal'
              },
              {
                pattern: '@hooks/**',
                group: 'internal'
              },
              {
                pattern: '@constants/**',
                group: 'internal'
              },
              {
                pattern: '@type/**',
                group: 'internal',
                position: 'after'
              },
              {
                pattern: '@mocks/**',
                group: 'internal'
              }
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'import/no-relative-parent-imports': 'error',
        'import/no-useless-path-segments': [
          'error',
          {
            noUselessIndex: true
          }
        ],
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true }
        ],
        'import/named': ['off'],

        'react/jsx-handler-names': 'error',
        'react/display-name': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-filename-extension': ['off'],
        'react/jsx-uses-vars': 'error',
        'react/no-unused-prop-types': 'error',
        'react/prefer-stateless-function': 'error',
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'react/no-unstable-nested-components': ['warn'],
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function' }
        ],
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/jsx-no-leaked-render': [
          'error',
          { validStrategies: ['coerce', 'ternary'] }
        ],
        'react/jsx-boolean-value': 'error',
        'react/no-multi-comp': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/hook-use-state': 'error',
        'react/no-array-index-key': 'off',
        'react/jsx-no-useless-fragment': 'error',

        'react-native/no-unused-styles': 'off',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'off',

        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
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
        'jest-formatting/padding-around-all': 'error',
        'jest/no-alias-methods': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/consistent-test-it': 'error',

        'unused-imports/no-unused-imports': 'error',

        'unicorn/no-array-callback-reference': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-export-from': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-at': 'error',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prevent-abbreviations': 'error',

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
        ],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false
          }
        ],
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/member-delimiter-style': 'error',

        '@typescript-eslint/no-array-constructor': 'error',

        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': [
          'error',
          { ignoreRestArgs: true }
        ],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreProperties: true,
            ignoreParameters: true
          }
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-unnecessary-condition': [
          'error', // BUGGY
          { allowConstantLoopConditions: true }
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/consistent-indexed-object-style': [
          'error',
          'record'
        ],
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-readonly': 'off', // Annoying with handlers
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        'sonarjs/no-identical-functions': 'error',
        'sonarjs/cognitive-complexity': ['error', 10],
        'sonarjs/no-inverted-boolean-check': 'error',

        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true
          }
        ],

        'unicorn/consistent-function-scoping': [
          'error',
          { checkArrowFunctions: false }
        ],
        'unicorn/catch-error-name': [
          'error',
          {
            name: 'error'
          }
        ],

        eqeqeq: ['error'],
        'import/newline-after-import': ['error'],

        'reanimated/js-function-in-worklet': 2,

        'no-multi-spaces': [
          'error',
          {
            ignoreEOLComments: false
          }
        ],

        radix: 'error',

        'react/jsx-curly-newline': 'off'
      }
    }
  ]
};
