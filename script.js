
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then((data)=> {
            console.log(data)
            const time = data.time
            const price = data.bpi.USD.rate
            console.log(price)
            console.log(time)
        })
