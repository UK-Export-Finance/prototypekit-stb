//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Logs saved data in the terminal
router.use((req, res, next) => {
    const log = {
      method: req.method,
      url: req.originalUrl,
      data: req.session.data
    }
    console.log(JSON.stringify(log, null, 2))
  next()
})


// Run this code when a form is submitted to '/tfm/index' form on bank-1-check.html
router.get('/tfm/index', (req, res) => {
  const data = req.session.data
  let showBanner = (data.showBanner) ? true : false
  delete data.showBanner
  res.render('/tfm/index', { showBanner })
}) 

