function upDate(previewPic){
    const image = document.getElementById('image');
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.style.backgroundColor = 'red';
    image.innerHTML = previewPic.alt;
}

console.log('previewPic');

function unDo(){
	const image = document.getElementById('image');
    image.style.backgroundImage = "url('')";
    image.innerHTML = 'Hover over an image below to display it here.';