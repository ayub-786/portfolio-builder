import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {

  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/stocktools/gui.css"></link>
        <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/annotations/popup.css"></link>
      </Head>

      <div id='scripts'>
        <script src="/assets/jquery/jquery3.2.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
      </div>

      <body id='body-id' className=''>
        <Main />
        <NextScript async crossOrigin="" />
      </body>
    </Html>
  )
}

export default Document