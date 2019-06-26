module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
}
