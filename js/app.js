var _gaq=[['_setAccount','UA-12089088-1'],['_trackPageview']];

window.onload = function () {
    document.body.classList.add('loaded');
};

var monkey = document.getElementById('monkey');
var first = true;
var animating = false;
var h1 = document.getElementsByTagName('h1')[0];
var quotes = [
'Halo Mea?',
'Halo Bo?',
'Dafuq?!',
'Nooo, to by šlo',
'Heleeee',
'Kde mám peňeženku?',
'...',
'Čus',
'Kaaaamoška',
'Ty si frajerka!',
'Kolik? 7 z 10?',
'Co mají dnes v Oříšku?',
'Jdem do Oříšku',
'Tys nebyl v Oříšku?',
'Heeej, to je feeest dobre!',
'Oříšek je cool',
'Viděl jsi, co dal Vuček na Dribble?',
'Viděl jsi, co dal Jackie na Dribble?',
'Viděl jsi, co dal Charlie na Dribble?',
'Viděl jsi, co dal Musho na Dribble?',
'Já nevim, nedával jsem pozor',
'Nejde mi dribbble',
'Nechci do Dishe, jdem do Moodu',
'Jedu za Kristýnou',
'King of Pho',
'Znáš tohle?',
'Hej a co katamarán?',
'Nepůjdem na katamarán?',
'Katamarán je drahej, kámo!',
'To je absurdní',
'helloiamvu',
'Vzbuď mě za 20 minut',
'Znáš Aperol Spritz?',
'Heeej',
'Áno',
'Dem s Keeganem na pivo',
'Přijde Tom Bartl?',
'Dafuq, vždyť jsem spláchnul!',
'Ty nemáš Spotify?',
];
document.getElementById('vuit').addEventListener('click', function () {
    if (animating) {
        return false;
    }
    animating = true;
    monkey.classList.remove('active');
    h1.classList.remove('active');
    setTimeout(function () {
        monkey.classList.add('active');
    }, 0);
    setTimeout(function () {
        h1.innerText = quotes[Math.floor(quotes.length * Math.random())];
        h1.classList.add('active');
        monkey.classList.remove('active');
        animating = false;
    }, 2000);
});

var light = document.getElementById('light');
document.getElementById('switch').addEventListener('click', function () {
    light.classList.toggle('on');
});