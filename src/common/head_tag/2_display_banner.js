var userAgent = (window.navigator && navigator.userAgent) || ""

function detect (pattern) {
  return pattern.test(userAgent)
}

function displayBanner (banner, browsers, categories) {
  if (detect(/Mobi/i)) return

  if ($.type(browsers) === 'string') browsers = [ browsers ]
  if ($.type(categories) === 'string') categories = [ categories ]

  var display = false

  for (var i = 0; i < browsers.length; i++) {
    var browser = browsers[i]

    switch (browser) {
      case 'chrome':
        display = detect(/Chrome/)
        break
    }

    if (display) break
  }

  if (display) {
    categories.forEach(category => {
      $('head').append(`<style> .category-${category} .download-banner-${banner} { display: block } </style>`)
    })
  }
}
