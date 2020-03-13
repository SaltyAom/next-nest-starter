module.exports = {
    setupFiles: ['<rootDir>/jest.client.setup.js'],
    rootDir: './',
    testRegex: '((\\.|/)(test|spec))\\.(jsx|tsx)?$',
    moduleNameMapper: {
        '\\.(css|styl|.scss|.less|.sass)$': '<rootDir>/__tests__client__/__mocks__/styleMock.js'
    }
}
