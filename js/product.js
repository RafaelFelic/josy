'use strict';

(function () {
  var scriptURL =
    'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '39f53d.myshopify.com',
      storefrontAccessToken: '5cef2fbc1802c8a78f2b5c1a2d6b49d2',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8354355872043',
        node: document.getElementById('product-component-1685282339623'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0',
                  'margin-bottom': '50px',
                },
                'text-align': 'left',
              },
              title: {
                'font-size': '27px',
              },
              button: {
                'font-size': '14px',
                'padding-top': '15px',
                'padding-bottom': '15px',
                ':hover': {
                  'background-color': '#2e2e2e',
                },
                'background-color': '#333333',
                ':focus': {
                  'background-color': '#2e2e2e',
                },
                'border-radius': '4px',
                'padding-left': '22px',
                'padding-right': '22px',
              },
              quantityInput: {
                'font-size': '14px',
                'padding-top': '15px',
                'padding-bottom': '15px',
              },
              price: {
                'font-size': '18px',
              },
              compareAt: {
                'font-size': '15.299999999999999px',
              },
              unitPrice: {
                'font-size': '15.299999999999999px',
              },
            },
            layout: 'horizontal',
            contents: {
              img: false,
              imgWithCarousel: false,
              button: false,
              buttonWithQuantity: true,
              description: true,
            },
            width: '100%',
          },
          productSet: {
            styles: {
              products: {
                '@media (min-width: 601px)': {
                  'margin-left': '-20px',
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px',
                },
              },
              button: {
                'font-size': '14px',
                'padding-top': '15px',
                'padding-bottom': '15px',
                ':hover': {
                  'background-color': '#2e2e2e',
                },
                'background-color': '#333333',
                ':focus': {
                  'background-color': '#2e2e2e',
                },
                'border-radius': '4px',
                'padding-left': '22px',
                'padding-right': '22px',
              },
              quantityInput: {
                'font-size': '14px',
                'padding-top': '15px',
                'padding-bottom': '15px',
              },
              title: {
                'font-family': 'Helvetica Neue, sans-serif',
                'font-weight': 'bold',
                'font-size': '26px',
                color: '#4c4c4c',
              },
              price: {
                'font-family': 'Helvetica Neue, sans-serif',
                'font-weight': 'normal',
                'font-size': '18px',
                color: '#4c4c4c',
              },
              compareAt: {
                'font-family': 'Helvetica Neue, sans-serif',
                'font-weight': 'normal',
                'font-size': '15.299999999999999px',
                color: '#4c4c4c',
              },
              unitPrice: {
                'font-family': 'Helvetica Neue, sans-serif',
                'font-weight': 'normal',
                'font-size': '15.299999999999999px',
                color: '#4c4c4c',
              },
            },
            text: {
              button: 'Add to cart',
            },
          },
          option: {
            styles: {
              label: {
                'font-size': '16px',
              },
            },
          },
          cart: {
            styles: {
              button: {
                'font-size': '14px',
                'padding-top': '15px',
                'padding-bottom': '15px',
                ':hover': {
                  'background-color': '#2e2e2e',
                },
                'background-color': '#333333',
                ':focus': {
                  'background-color': '#2e2e2e',
                },
                'border-radius': '4px',
              },
            },
            text: {
              total: 'Subtotal',
              button: 'Checkout',
            },
            popup: false,
          },
          toggle: {
            sticky: true,
            styles: {
              toggle: {
                'background-color': '#333',
                ':hover': {
                  'background-color': '#8a8a8a',
                  color: '#333',
                },
                ':focus': {
                  'background-color': '#2e2e2e',
                },
              },
              count: {
                'font-size': '12px',
                color: '#fff',
              },
            },
          },
        },
      });
    });
  }
})();
