const { core } = require("./coreClass")

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
      await this.page.type('.apos-input.apos-input--text', 'my-user')

      await this.page.waitForSelector('.apos-input.apos-input--password')
      await this.page.click('.apos-input.apos-input--password')
      await this.page.keyboard.press('Backspace')
      await this.page.type('.apos-input.apos-input--password', 'am020790')

      await this.page.waitForSelector('.apos-button.apos-button--gradient-on-hover.apos-button--block.apos-button--primary')
      await this.page.click('.apos-button.apos-button--gradient-on-hover.apos-button--block.apos-button--primary')

      await this.page.waitForNavigation({waitUntil: 'load'})
    }
}

module.exports = {
  login
}
