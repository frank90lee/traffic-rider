import Script from 'next/script'
import React from 'react'

const Adsense = () => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040451669958955"
        crossOrigin="anonymous"
      />
      <Script
        src="https://pl25427648.profitablecpmrate.com/e1/18/20/e118204e12a6465ab48e02b20dfe2c75.js"
        strategy="lazyOnload"
      />
    </>
  )
}

export default Adsense
