"use strict";

(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
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
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "39f53d.myshopify.com",
      storefrontAccessToken: "5cef2fbc1802c8a78f2b5c1a2d6b49d2",
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "8354355872043",
        node: document.getElementById("product-component-1685282339623"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            layout: "horizontal",
            contents: {
              options: false,
              title: false,
              price: false,
              img: false,
              imgWithCarousel: false,
              button: false,
              buttonWithQuantity: false,
              description: false,
            },
          },
          cart: {
            styles: {
              button: {
                "font-size": "14px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#2e2e2e",
                },
                "background-color": "#333333",
                ":focus": {
                  "background-color": "#2e2e2e",
                },
                "border-radius": "4px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            popup: false,
          },
          toggle: {
            sticky: true,
            styles: {
              toggle: {
                "background-color": "#333",
                ":hover": {
                  "background-color": "#8a8a8a",
                  color: "#333",
                },
                ":focus": {
                  "background-color": "#2e2e2e",
                },
              },
              count: {
                "font-size": "12px",
                color: "#fff",
              },
            },
          },
        },
      });
    });
  }
})();
