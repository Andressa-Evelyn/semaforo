'use strict';

const images = [
    { 'id': '1', 'url':'./img/pexels-charles-1851164.jpg' },
    { 'id': '2', 'url':'./img/pexels-gilberto-reyes-825947.jpg' },
    {'id':'3', 'url':'img/pexels-kat-smith-551628.jpg'}
]

const containerItems = document.querySelector('#container-items');



const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click',previous)

const next = () => {
    const lastItem = items[items.length-1];
    containerItems.insertBefore(lastItem,items[0])
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click',next)