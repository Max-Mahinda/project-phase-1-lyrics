function getBitcoinPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        const usdRate = data.bpi.USD.rate;
        const symbol = data.bpi.USD.symbol;
        document.getElementById('price').innerHTML = usdRate;
        document.getElementById('symbol').innerHTML = symbol;
      })
      .catch(error => console.error('Error:', error));
  }


  function getBitcoinHistory() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        const usdRate = data.bpi.USD.rate;
        const symbol = data.bpi.USD.symbol;
        document.getElementById('price').innerHTML = usdRate;
        document.getElementById('symbol').innerHTML = symbol;
      })
      .catch(error => console.error('Error:', error));
  }

 