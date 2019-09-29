const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  // 配置文件 在运行测试案例代码之前 Jest会先运行这里的配置文件来初始化指定的测试环境
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'], //
  testEnvironment: 'node',
  // 支持加载的文件名
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  modulePaths: [
    '<rootDir>/src/'
  ],
  // 是否生成测试覆盖报告，如果开启，会增加测试的时间
  collectCoverage: true,
  coverageReporters: ['text']
};
