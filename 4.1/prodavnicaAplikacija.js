'use strict';

class Artikal{
    constructor(naziv, cena, opis){
        this.naziv =naziv
        this.cena = cena
        this.opis = opis
    }
}

let monitor = new Artikal("monitor",165,"Ovo je monitor")
let mis = new Artikal ("mis",20,"mis poprdis")
let TV = new Artikal ("TV", 200, "Ovo je TV")

let artikli = [monitor, mis, TV]


function kreirajRedove(){
    let tabela = document.querySelector("#artikli-telo")
    tabela.innerHTML=""
    for (let i=0; i<artikli.length; i++){
        let tr = document.createElement("tr")
        let br = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")

        tr.addEventListener("click", function(){
            prikaziDetalje(artikli[i])
        })


        br.textContent= i+1
        naziv.textContent = artikli[i].naziv
        cena.textContent = artikli[i].cena

        tr.appendChild(br)
        tr.appendChild(naziv)
        tr.appendChild(cena)

        tabela.appendChild(tr)
    }
}

function prikaziDetalje(artikal){
    let p = document.createElement("p")
    p.innerHTML ="Naziv: "+artikal.naziv +"<br>Cena: "+artikal.cena+"<br>Opis: "+artikal.opis
    let detalji = document.querySelector("#detalji")
    detalji.style.display = "block";
    detalji.innerHTML=""
    detalji.appendChild(p)
}

function dodajArtikal(){
    let dugme = document.querySelector("#dodaj")
    dugme.addEventListener('click', function(){
        let form = document.querySelector("#forma")
        let formData = new FormData(form)

        let naziv = formData.get("naziv")
        let cena = formData.get("cena")
        let opis = formData.get("opis")

        let noviArtikal = new Artikal(naziv,cena,opis)
        artikli.push(noviArtikal)

        kreirajRedove()
    })
}

function pokreniStranicu(){
    kreirajRedove()
    dodajArtikal()
}

document.addEventListener('DOMContentLoaded', pokreniStranicu())

