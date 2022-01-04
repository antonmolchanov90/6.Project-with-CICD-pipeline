const puppeteer = require('puppeteer')
const { login } = require('./loginClass-helper')

let browser
let page

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
    })
    page = await browser.newPage()
    await page.goto('http://localhost:3000/', {waitUntil: 'load'})
  })

  afterEach(async () => {
    await browser.close()
  })

describe ('Test for project login', () => {

  it('Open local project and login', async () => {
    const newLogin = new login(page)
    await newLogin.loginUser(page)
    const expectTitle = await page.title()
    expect(expectTitle).toBe('Home')
  }, 300000)
})
