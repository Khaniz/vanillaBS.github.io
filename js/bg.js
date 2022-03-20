const bgList = [
    'resources/2jam.png',
    'resources/china_long.jpg',
    'resources/Ukrainia.jpg',
    'resources/usa_alaska.jpg'
]

timeToChangeBG()
var intervalTime = setInterval(timeToChangeBG, 5000)

function timeToChangeBG(){

    const bgNumber = Math.floor(Math.random() * bgList.length);
    const img = document.createElement('img');
    img.src = bgList[bgNumber];
    img.classList.add("bgImage");

    document.body.appendChild(img);

}
