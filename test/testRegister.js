/**
 * @description 测试注册界面
 * @author cnn
 * **/
module.exports = {
  'Register Test'(browser) {
    browser
      .url('localhost:8082/')
      .waitForElementVisible('body')
      .setValue('.ant-input:nth-of-type(1)', 'obf1313')
      .setValue('.ant-input:nth-of-type(2)', '123456')
      .click('.ant-btn')
      .pause(1000)
      .assert.containsText('#app', '首 页')
      .end();
  }
};
