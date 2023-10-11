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

// Run this code when a form is submitted to '/tfm3/bank-100#keying-sheet' form on bank-100-check-key1.html
router.get('/tfm3/bank-100', (req, res) => {
  const data = req.session.data
  let showBanner = (data.showBanner) ? true : false
  delete data.showBanner
  res.render('/tfm3/bank-100', { showBanner })
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

// Run this code when a form is submitted to '/tfm2/bank-3c' form on bank-3-task4c.html
router.post('/tfm2/bank-3c', function (req, res) {

  // Make a variable and give it the value from 'check' radios
  var another4c = req.session.data['bank-13-task4b-another']

  // Check whether the variable matches a condition.
  if (another4c == "yes"){
    // Send user to bank 3 screen
    res.redirect('/tfm2/bank-3#reconciliation')
  } else {
    // Send user to upload screen
    res.redirect('/tfm2/bank-3#reconciliation')
  }
})

// Run this code when a form is submitted to '/tfm3/bank-100-task1' form on /tfm3/bank-100.html
// This is for when there are 2 buttons on a form that need to go to different pages
router.post('/tfm3/bank-100-task1', function (req, res) {

  // We initialise a new constant and make it equal the current value of addaPayment.
  const addaPayment = req.session.data['addaPayment']
  
  //Then we use some logic to decide what page to load next.
  if (addaPayment == 'true'){
    res.redirect('bank-100-task1')
  } else {
    res.redirect('bank-100#reconciliation')
  }
})


// Run this code when a form is submitted to '/tfm3/bank-100-task2' form on /tfm3/bank-100.html
// This is for when there are 2 buttons on a form that need to go to different pages
router.post('/tfm3/bank-100-task2', function (req, res) {

  // We initialise a new constant and make it equal the current value of addaPayment.
  const addaPayment = req.session.data['addaPayment']
  
  //Then we use some logic to decide what page to load next.
  if (addaPayment == 'true'){
    res.redirect('bank-100-task2')
  } else {
    res.redirect('bank-100#reconciliation')
  }
})

// Run this code when a form is submitted to '/tfm3/bank-100-task3' form on /tfm3/bank-100.html
// This is for when there are 2 buttons on a form that need to go to different pages
router.post('/tfm3/bank-100-task3', function (req, res) {

  // We initialise a new constant and make it equal the current value of addaPayment.
  const addaPayment = req.session.data['addaPayment']
  
  //Then we use some logic to decide what page to load next.
  if (addaPayment == 'true'){
    res.redirect('bank-100-task3')
  } else {
    res.redirect('bank-100#reconciliation')
  }
})


// Run this code when a form is submitted to '/tfm3/bank-100-task4' form on /tfm3/bank-100.html
// This is for when there are 2 buttons on a form that need to go to different pages
router.post('/tfm3/bank-100-task4', function (req, res) {

  // We initialise a new constant and make it equal the current value of addaPayment.
  const generate = req.session.data['generate']
  
  //Then we use some logic to decide what page to load next.
  if (generate == 'true'){
    res.redirect('bank-100-check-key1')
  } else {
    res.redirect('bank-100#reconciliation')
  }
})

// Run this code when a form is submitted to '/tfm3/bank-100-task5' form on /tfm3/bank-100.html
// This is for when there are 2 buttons on a form that need to go to different pages
router.post('/tfm3/bank-100-task5', function (req, res) {

  // We initialise a new constant and make it equal the current value of addaPayment.
  const addaPayment = req.session.data['addaPayment']
  
  //Then we use some logic to decide what page to load next.
  if (addaPayment == 'true'){
    res.redirect('bank-100-task5')
  } else {
    res.redirect('bank-100#reconciliation')
  }
})


// Run this code when a form is submitted to '/tfm3/bank-100-task6' form on /tfm3/bank-100.html
// This is for when there are 2 buttons on a form that need to go to different pages
router.post('/tfm3/bank-100-task6', function (req, res) {

  // We initialise a new constant and make it equal the current value of addaPayment.
  const generate = req.session.data['generate']
  
  //Then we use some logic to decide what page to load next.
  if (generate == 'true'){
    res.redirect('bank-100-check-key2')
  } else {
    res.redirect('bank-100#reconciliation')
  }
})





