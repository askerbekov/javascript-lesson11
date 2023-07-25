const row = document.querySelector('.row')
const options = document.querySelector('#options')
// let value = document.querySelector('value')


options.addEventListener('change' , value => {
    let con = options.value
    row.innerHTML = ``
    fetch(`https://restcountries.com/v3.1/region/${con}/`)
        .then(res => res.json())
        .then(data => {
            data.reverse().map(country =>{
                row.innerHTML += `
                <div class="col-4">
                    <div class="box">
                    <img src=${country.flags.png} alt="">
                    <h3>${country.name.common}</h3>
                    <p>${country.capital}</p>
                    <div/>
                <div/>
                `
            })
        })
})
