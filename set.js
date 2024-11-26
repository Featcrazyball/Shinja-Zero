// Top
window.addEventListener("load", function() {
    const topBar = document.querySelector(".top-bar");
    const logos = this.document.querySelector(".logo")
    topBar.classList.add("show");
    logos.classList.add("show")
});

let topBar = document.querySelector('.top-bar');
const logos = this.document.querySelector(".logo")

window.addEventListener('scroll', () => {
    if (window.scrollY <= 0) {
        topBar.classList.add('show');
        logos.classList.add("show")
    } else {
        topBar.classList.remove('show');
        logos.classList.add("show")
    }
});

// Search
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('#search-input');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let searchTerm = input.value.trim().toLowerCase();
    
        const searchTermMap = {
            'sasaki': 'aya',
            'abel': 'anna',
            'eri': 'eriynes',
            'fallen angel king': 'eriynes',
            'beast king': 'zagan',
            'dragon king': 'astaroth',
            'ancient dragon king': 'astaroth',
            'johnny': 'john',
            'helemerck': 'mel',
            'volume 1': '1',
            'volume 2': '2',
            'volume 3': '3',
            'volume 4': '4',
            'volume 5': '5',
            'volume 6': '6',
            'volume 7': '7',
            'volume 8': '8',
            'volume 9': '9',
            'volume 10': '10',
            'volume 11': '11',
            'volume 12': '12',
            'volume 13': '13',
        };
    
        searchTerm = searchTermMap[searchTerm] || searchTerm;
    
        const links = ['about', 'characters', 'home', 'books'];
        const charTerms = [
            'makoto',
            'noah',
            'eir',
            'ira',
            'naia',
            'althena',
            'iblis',
            'varvartos',
            'bifrons',
            'astaroth',
            'zagan',
            'eriynes',
            'geralt',
            'leonard',
            'olga',
            'alexander',
            'johnny',
            'sofia',
            'anna',
            'noel',
            'esther',
            'furi',
            'nevia',
            'momo',
            'aya',
            'lucy',
            'dia',
            'mel',
            'cain',
        ];
    
        const volTerms = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
        ];
    
        const volList = [
            '1.html',
            '2.html',
            '3.html',
            '4.html',
            '5.html',
            '6.html',
            '7.html',
            '8.html',
            '9.html',
            '10.html',
            '11.html',
            '12.html',
            '13.html',
        ];
    
        const charList = [
            'alexander.html',
            'anna.html',
            'astaroth.html',
            'athena.html',
            'aya.html',
            'bifrons.html',
            'cain.html',
            'dia.html',
            'eir.html',
            'eriynes.html',
            'esther.html',
            'furi.html',
            'geralt.html',
            'iblis.html',
            'ira.html',
            'john.html',
            'leonard.html',
            'levia.html',
            'lucy.html',
            'makoto.html',
            'mel.html',
            'momo.html',
            'naia.html',
            'nevia.html',
            'noah.html',
            'noel.html',
            'olga.html',
            'sofia.html',
            'varvartos.html',
            'zagan.html',
        ];
    
        if (!isValidInput(searchTerm, links, charTerms, volTerms)) {
            input.placeholder = 'Invalid input';
            input.value = ''; // Clear the search input field
            return;
        }
    
        input.placeholder = 'Search...';
    
        let folderPath = '';
        let backRoot = '';
    
        if (links.includes(searchTerm)) {
            folderPath = '';
        } else if (charTerms.includes(searchTerm)) {
            folderPath = 'characters/';
        } else if (volTerms.includes(searchTerm)) {
            folderPath = 'books/';
        }
    
        const fileName = window.location.pathname.split('/').pop();
    
        if (volList.includes(fileName) || charList.includes(fileName)) {
            backRoot = '../';
        }
    
        if (searchTerm) {
            window.location.href = `${backRoot}${folderPath}${searchTerm}.html`;
        }
    });
  });
  
function isValidInput(input, links, charTerms, volTerms) {
    const validTerms = [...links, ...charTerms, ...volTerms];
    return validTerms.includes(input);
}

// Modal Image
var img = document.getElementById('myImg');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var span = document.getElementsByClassName('close')[0];

// Add event listener to the image
img.onclick = function() {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Add event listener to the close button
span.onclick = function() {
  modal.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });