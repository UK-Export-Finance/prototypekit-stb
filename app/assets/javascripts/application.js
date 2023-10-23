//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  window.MOJFrontend.initAll();
});

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const currencyFilter = urlParams.get('bank-100-currency-filter');
  const paymentRef = urlParams.get('paymentref');
  const facilityId = urlParams.get('facilityid');
  const filtersApplied = currencyFilter || paymentRef || facilityId;



  new MOJFrontend.FilterToggleButton({
    bigModeMediaQuery: "(min-width: 48.063em)",
    startHidden: !filtersApplied,
    toggleButton: {
      container: $(".moj-action-bar__filter"),
      showText: "Show filter",
      hideText: "Hide filter",
      classes: "govuk-button--secondary",
    },
    closeButton: {
      container: $(".moj-filter__header-action"),
      text: "Close",
    },
    filter: {
      container: $(".moj-filter"),
    },
  });

  const paymentDetailsTab = document.getElementById('payment-details-tab');

  if (paymentDetailsTab) {
    paymentDetailsTab.addEventListener('click', function () {
      // Clear the filters (set them to their default state)
      // You may need to adjust this code depending on how your filters are structured
      document.querySelector('[name="bank-100-currency-filter"]').value = '';
      document.querySelector('[name="paymentref"]').value = '';
      document.querySelector('[name="facilityid"]').value = '';
      
      // Clear the URL parameters
      const url = new URL(window.location);
      url.searchParams.delete('bank-100-currency-filter');
      url.searchParams.delete('paymentref');
      url.searchParams.delete('facilityid');
      history.pushState({}, '', url);

      // You may need to manually trigger any change events or form submissions that your filters rely on
      // For example, if your filters trigger a form submission when changed, you might do something like:
      // document.querySelector('form').submit();
    });
  }
});
