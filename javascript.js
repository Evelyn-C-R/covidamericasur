$(document).ready(function() {

    $('select').formSelect()
})

const nombre = document.getElementById("nombres"),
    resNombre = document.getElementById("resNombre");


document.getElementById("nombre").addEventListener("submit", buscarPorNombre);

async function buscarPorNombre(e) {
    e.preventDefault();

    const respuesta = await fetch(
        `https://disease.sh/v3/covid-19/countries/${nombre.value}?yesterday=true&twoDaysAgo=true&strict=true`
    );


    const pais = await respuesta.json();
    console.log(pais);
    let contenido = `


        <div class="row">
            <div class="col s12 m6">
                <div class="card orange darken-1">
                    <div class="card-image">
                        <img src="${(pais.countryInfo).flag}">
                     </div>
                     
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card cyan darken-3">
                <div class="card-content">
                    <h2 class="center white-text">${pais.country}</h2>
                </div>
                    <div class="card-action">
                        <span class="card-title white-text">País</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <div class="card cyan darken-3">

                    <div class="card-content white-text">
                        <h1 class="center">${pais.cases}</h1>
                    </div>
                    <div class="card-action">
                        <span class="card-title white-text">Casos totales</span>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card cyan darken-3">

                    <div class="card-content white-text">
                        <h1 class="center">${pais.todayCases}</h1>
                    </div>
                    <div class="card-action">
                        <span class="card-title white-text">Casos del dia de hoy</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <div class="card cyan darken-3">

                    <div class="card-content white-text">
                        <h1 class="center">${pais.active}</h1>
                    </div>
                    <div class="card-action">
                        <span class="card-title white-text">Pacientes activos</span>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card cyan darken-3">

                    <div class="card-content white-text">
                        <h1 class="center">${pais.recovered}</h1>
                    </div>
                    <div class="card-action">
                        <span class="card-title white-text">Pacientes recuperados</span>
                    </div>
                </div>
            </div>
        </div>



     `;
    resNombre.innerHTML = contenido;

}