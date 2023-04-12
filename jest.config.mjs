import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('jest').Config} */
const config = {
	cacheDirectory: '<rootDir>/.jestcache',
	coverageDirectory: '<rootDir>/coverage',
	moduleDirectories: ['src', 'node_modules'],
	setupFilesAfterEnv: ['<rootDir>/tools/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	testTimeout: 10000,
	verbose: true,
};

export default createJestConfig(config);
