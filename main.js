const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// gallery

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (var i = 0; i < 24; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  $('#photos').append('<img src="https://source.unsplash.com/'+width+'x'+height+'/?nature,cities">');
}

