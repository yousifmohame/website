"use strict"

let linkdrop = document.querySelectorAll('.linkdrop');
//let dropdown = document.querySelectorAll('.dropdown');

linkdrop.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        let idvalue = link.getAttribute('data-menu');
        document.getElementById(idvalue).classList.toggle('show')

    })
});


let contentDashbord = document.querySelector('.content-dashbord');
let sideBar = document.querySelector('.sidebar');
let bar = document.querySelector('.bar');

bar.addEventListener('click', function () {
    contentDashbord.classList.toggle('f-width')
    sideBar.classList.toggle('f-width')
})

// tabs

let linktab = document.querySelectorAll('.linktab');
linktab.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let idtabs = link.getAttribute('data-areatab')
        let nametabs = document.getElementById(idtabs);
        let tabcontent = document.querySelectorAll('.tab-content');
        let activelink = document.querySelectorAll('.activelink');
        

        for (var i = 0; i < activelink.length; i++) {
            activelink[i].classList.remove('activelink')
        }

        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove('active')
        }

        link.classList.add('activelink')
        nametabs.classList.add('active')
    })
});

// list && grid

let list = document.querySelector('.list');
let grid = document.querySelector('.grid');
let cards = document.querySelectorAll('.cards');
let boxes = document.querySelectorAll('.boxes');

list.addEventListener('click', (e) => {
    e.preventDefault();
    cards.forEach(card => {
        card.classList.remove('d-grid')
    });
    boxes.forEach(box => {
        box.classList.remove('d-grid')
    });
})

grid.addEventListener('click', (e) => {
    e.preventDefault();
    cards.forEach(card => {
        card.classList.add('d-grid')
    });
    boxes.forEach(box => {
        box.classList.add('d-grid')
    });
})

//quiz section//
