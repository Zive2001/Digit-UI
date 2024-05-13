// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');

// Add click event listeners for next and previous buttons
nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

// Move slider function
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, 500);

}

// Get the "See More" and "Subscribe" buttons
let seeMoreButtons = document.querySelectorAll('.carousel .list .item .buttons button:nth-child(1)');
let subscribeButtons = document.querySelectorAll('.carousel .list .item .buttons button:nth-child(2)');

// Array of URLs for "See More" and "Subscribe" buttons
let seeMoreUrls = ['https://www.masholdings.com', 'https://www.google.com', 'https://www.w3schools.com'];
let subscribeUrls = ['https://apps.powerapps.com/play/e/default-852c5799-8134-4f15-9d38-eba4296cc76f/a/8420366a-bc0d-4a47-94f4-da851e67feca?tenantId=852c5799-8134-4f15-9d38-eba4296cc76f&hint=9ab5f3c4-8e47-49ef-bc02-961bf07e2d15&sourcetime=1715626112730&source=portal&hidenavbar=true', 'https://sg-prod-bdyapp-intranet.azurewebsites.net/index.asp', 'https://www.subscribe3.com','https://apps.powerapps.com/play/e/default-852c5799-8134-4f15-9d38-eba4296cc76f/a/4bcfce34-5365-4a4c-9b06-bbc9e5127c5c?tenantId=852c5799-8134-4f15-9d38-eba4296cc76f&hint=052d3a0c-1e98-41aa-9cb6-04c5f35a490c&sourcetime=1715626112724&source=portal&hidenavbar=true'];

// Add event listeners to each "See More" button
seeMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        window.location.href = seeMoreUrls[index];
    });
});

// Add event listeners to each "Subscribe" button
subscribeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        window.location.href = subscribeUrls[index];
    });
});

// Automatic slider change
let autoSliderInterval;

function startAutoSlider() {
    autoSliderInterval = setInterval(() => {
        nextDom.click();
    }, 7000); // Adjust the interval as needed (in milliseconds)
}

function stopAutoSlider() {
    clearInterval(autoSliderInterval);
}

// Start automatic slider change
startAutoSlider();

// Pause automatic slider change on mouse click and hold
carouselDom.addEventListener('mousedown', stopAutoSlider);
carouselDom.addEventListener('mouseup', startAutoSlider);

