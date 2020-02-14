const imageEl = document.getElementById('container');
const next = document.getElementById('next');
const back = document.getElementById('back');

const images = [];
let activeImageIdx = 0;


function getNewImage() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			const imageURL = data.url;

			images.push(imageURL);
			imageEl.src = imageURL;

		});
}

function showImage(idx) {
	imageEl.src = images[idx];
	down.href = images[idx];
}

function getNextImg() {
	activeImageIdx++;
	
	if(!images[activeImageIdx]) {
		getNewImage();
	} else {
		showImage(activeImageIdx);
	}
}

function getBackImg() {
	activeImageIdx--;
	
	if(activeImageIdx < 0) {
		activeImageIdx = 0;
	} else {
		showImage(activeImageIdx);
	}
}


next.addEventListener('click', getNextImg);
back.addEventListener('click', getBackImg);

getNewImage();