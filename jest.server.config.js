module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^src(.*)': '<rootDir>/src$1',
        '^public(.*)': '<rootDir>/public$1',
        '^helpers(.*)': '<rootDir>/src/helpers$1',
        '^@services(.*)': '<rootDir>/src/services$1',
        '^@pipes(.*)': '<rootDir>/src/pipes$1',
        '^@guards(.*)': '<rootDir>/src/guards$1',
        '^@interceptors(.*)': '<rootDir>/src/interceptors$1',
        '^@decorators(.*)': '<rootDir>/src/decorators$1'
    },
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testRegex: '((\\.|/)(test|spec))\\.ts?$',
    modulePathIgnorePatterns: ["<rootDir>/__tests__"],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    clearMocks: true,
}
