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

// Run this code when a form is submitted to '/tfm/index' form on bank-2-check.html
router.get('/tfm/index2', (req, res) => {
  const data = req.session.data
  let showBanner2 = (data.showBanner2) ? true : false
  delete data.showBanner
  res.render('/tfm/index', { showBanner2 })
}) 


// Run this code when a form is submitted to '/tfm2/bank-3a' form on bank-3-task4a.html
router.post('/tfm2/bank-3a', function (req, res) {

  // Make a variable and give it the value from 'check' radios
  var another4a = req.session.data['bank-13-task4a-another']

  // Check whether the variable matches a condition.
  if (another4a == "yes"){
    // Send user to confirmation screen
    res.redirect('/tfm2/bank-3-task4b')
  } else {
    // Send user to upload screen
    res.redirect('/tfm2/bank-3#reconciliation')
  }
})

// Run this code when a form is submitted to '/tfm2/bank-3b' form on bank-3-task4b.html
router.post('/tfm2/bank-3b', function (req, res) {

  // Make a variable and give it the value from 'check' radios
  var another4b = req.session.data['bank-13-task4b-another']

  // Check whether the variable matches a condition.
  if (another4b == "yes"){
    // Send user to confirmation screen
    res.redirect('/tfm2/bank-3-task4c')
  } else {
    // Send user to upload screen
    res.redirect('/tfm2/bank-3#reconciliation')
  }
})

// Run this code when a form is submitted to '/tfm2/bank-3c' form on bank-3-task4b.html
router.post('/tfm2/bank-3c', function (req, res) {

  // Make a variable and give it the value from 'check' radios
  var another4c = req.session.data['bank-13-task4b-another']

  // Check whether the variable matches a condition.
  if (another4c == "yes"){
    // Send user to confirmation screen
    res.redirect('/tfm2/bank-3#reconciliation')
  } else {
    // Send user to upload screen
    res.redirect('/tfm2/bank-3#reconciliation')
  }
})


