import { type Config } from 'prettier'

export const defaultConfig: Config = {
    plugins: ['prettier-plugin-organize-imports'],
    printWidth: 80,
    trailingComma: 'none',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    singleAttributePerLine: true,
    overrides: [
        {
            files: ['*.css', '*.scss'],
            options: {
                printWidth: 120
            }
        }
    ]
}
