const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './src/',
})

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    },
}

module.exports = createJestConfig(customJestConfig)
