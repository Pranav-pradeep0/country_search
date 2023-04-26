function displayCountry() {
    country=cname.value
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`).then(data=>data.json())
    .then(data=>displayData(data))
}

function displayData(cdata) {
    cname=cdata[0].name
    capital=cdata[0].capital
    population=cdata[0].population
    flag=cdata[0].flag
    currency=cdata[0].currencies[0].name
    symbol=cdata[0].currencies[0].symbol
    lang=cdata[0].languages[0].name

result.innerHTML=`

    <section class="py-4">
        <div class="card mx-auto" style="width: 18rem; margin-block=10px">
          <img src="${flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-black">${cname}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Capital - ${capital}</li>
            <li class="list-group-item">Population - ${population}</li>
            <li class="list-group-item">Currency - ${currency}</li>
            <li class="list-group-item">Symbol - ${symbol}</li>
            <li class="list-group-item">Language - ${lang}</li>
        </div>
    
    </section>

`

}