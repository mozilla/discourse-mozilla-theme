function sad_mayo () {
  $('.category-mozillians-nda').append('<div class="sad-mayo"><button type="button" class="btn" aria-label="Close" onclick="very_sad_mayo()"><span aria-hidden="true">&times;</span></button><h1>What would Mark Mayo do?</h1><div class="make-mayo-happy"><img id="sad-mayo" src="https://discourse-paas-production-content.s3.amazonaws.com/original/2X/1/1a0a730dc86ce17381a017e68c432759a6d038e9.jpg"><img id="happy-mayo" src="https://discourse-paas-production-content.s3.amazonaws.com/original/2X/8/8693b13c9e3f5bdb5ac251aa68657c6afe3ae6c6.jpg"><a href="https://nightly.mozilla.org/"><i class="fa fa-download"></i> Download</a></div></div>')
}

function very_sad_mayo () {
  $('.category-mozillians-nda .sad-mayo').remove()
}
