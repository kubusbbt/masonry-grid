var box = document.getElementById('box-container');
var boxInner = document.getElementById('box-inner');
var activeImage = null;

function showModal(url, index) {
	boxInner.src = url;
	activeImage = index;
	box.style.display = 'block';
}

function hideModal() {
	box.style.display = 'none';
	boxInner.src = '';
	activeImage = null;
}

function next() {
	var elem = document.querySelector('[data-index="' + (parseInt(activeImage) + 1) + '"]');
	activeImage++;

	boxInner.src = elem.getAttribute('data-image');
}

function prev() {
	var elem = document.querySelector('[data-index="' + (parseInt(activeImage) - 1) + '"]');
	activeImage--;

	boxInner.src = elem.getAttribute('data-image');
}

function random(min, max) {
	var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}

var col = document.getElementById('grid-container').getElementsByTagName('div');

var colLength = col.length;
var activeCol = 0;

for( var i = 0; i < 10; i++ ){
	if(activeCol >= colLength) activeCol = 0;
	
	var imgUrl = 'https://picsum.photos/id/' + (i+10) + '/'+ random(400, 600) +'/' + random(200, 800);
	var imgUrlFull = 'https://picsum.photos/id/' + (i+10) + '/700/700';

	var img = document.createElement("img");
	img.classList.add('img-fluid');
	img.classList.add('mb-3');
	img.classList.add('grid-element');
	img.src = imgUrl;
	img.setAttribute('data-image', imgUrlFull);
	img.setAttribute('data-index', i);
	
	col[activeCol].appendChild(img);
	
	activeCol++;
}

var gridElements = document.querySelectorAll('.grid-element');

[].forEach.call(gridElements, function(gridElement){

	gridElement.addEventListener('click', function(e){
		showModal(e.target.getAttribute('data-image'), e.target.getAttribute('data-index'));
	})

});