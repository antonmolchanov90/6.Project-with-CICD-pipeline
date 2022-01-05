const puppeteer = require('puppeteer')
const { justCheckUI } = require('./checkUI.helper')

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

describe ('Just test for CI', () => {

  it('Open local project and check UI', async () => {
    const newUITest = new justCheckUI(page)
    await newUITest.justCheckClick(page)
    const expectTitle = await page.title()
    expect(expectTitle).toBe('Login')
  }, 300000)
})
