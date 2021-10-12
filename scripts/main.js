const likeImageElements = document.querySelectorAll('.js-like-image');
const unlikedImageUrl = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg';
const likedImageUrl = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg';

likeImageElements.forEach((likeImageEl) => {
    likeImageEl.addEventListener('click', (event) => {
        const counterEl = event.target.parentElement.children[1].children[0];
        if(event.target.src === unlikedImageUrl){
            event.target.src = likedImageUrl;
            +counterEl.textContent++;
        }
        else{
            event.target.src = unlikedImageUrl;
            +counterEl.textContent--;
        }
    });
});

