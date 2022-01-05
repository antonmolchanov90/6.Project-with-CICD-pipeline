const { core } = require("./coreClass")

class justCheckUI extends core {
  constructor(page) {
    super(page)
    }
    async justCheckClick() {
      await this.page.waitForSelector('body > div > div > header > a')
      await this.page.click('body > div > div > header > a')
      await this.page.waitForSelector('#apos-admin-bar')
    }
}

module.exports = {
  justCheckUI
}
