const { core } = require("./coreClass")
require('dotenv').config('path: /home/user/1.ANTON/Documents/1Work/1.QA/6.Project with CICD pipeline/tests/.env')

class login extends core {
  constructor(page) {
    super(page)
    }
    
    async loginUser() {

      await this.page.waitForSelector('body > div > div > header > a')
      await this.page.click('body > div > div > header > a')

      await this.page.waitForSelector('.apos-input.apos-input--text')
      await this.page.click('.apos-input.apos-input--text')
      await this.page.keyboard.press('Backspace')
      await this.page.type('.apos-input.apos-input--text', process.env.USER_NAME)

      await this.page.waitForSelector('.apos-input.apos-input--password')
      await this.page.click('.apos-input.apos-input--password')
      await this.page.keyboard.press('Backspace')
      await this.page.type('.apos-input.apos-input--password', process.env.PASSWORD)

      await this.page.waitForSelector('.apos-button.apos-button--gradient-on-hover.apos-button--block.apos-button--primary')
      await this.page.click('.apos-button.apos-button--gradient-on-hover.apos-button--block.apos-button--primary')

      await this.page.waitForNavigation({waitUntil: 'load'})
    }
}

module.exports = {
  login
}
