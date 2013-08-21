var _gaq=[['_setAccount','UA-43255070-1'],['_trackPageview']];

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
'Dafuq?!',
'Dafuq?!',
'Dafuq?!',
'Dafuq?!',
'WTF?!',
'WTF?!',
'WTF?!',
'Nooo, to by šlo',
'Heleeee',
'Kde mám peňeženku?',
'…',
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
'Viděl jsi, co dal Štefo na Dribble?',
'Já nevim, nedával jsem pozor',
'Nejde mi dribbble',
'Nechci do Dishe, jdem do Moodu',
'Jedu za Kristýnou',
'Ja som King of Pho',
'Znáš tohle?',
'Hej a co katamarán?',
'Nepůjdem na katamarán?',
'Katamarán je drahej, kámo!',
'To je absurdní',
'helloiamvu',
'Vzbuď mě za 20 minut',
'Mám hlad',
'Znáš Aperol Spritz?',
'Heeej',
'Áno',
'Dem s Keeganem na pivo',
'Přijde Tom Bartl?',
'Dafuq, vždyť jsem spláchnul!',
'Ty nemáš Spotify?',
'Kdo chce ještě LTE?',
'To je fest popiči',
'To dává smysl',
'Musíme to A/B testovat',
'Dáme tam A/B test',
'Koukni, kreslím sovu',
'Čí je ten banán?',
'Ty si kokot',
'Dal bych si něco k jídlu.',
'Co si mám dát k jídlu?',
'Dáme burger?',
'Jdu běhat',
'Ten burger v Tavernu je úplně boží',
'Teď jsem zapomněl, co jsem chtel říct',
'Ja vím, co je OpenGraph',
'Je to v kufru',
'Zapněte mi facebook!',
'Bude to zejtra...',
'To nejde.',
'Jojo, to je tranzistor. ',
'Čo si?',
'Čo ti jebe',
'Dej play',
'Měl jsi někdy chicken tikka masala?',
'Mám rád chicken tikka masala',
'Dafuq, ty nevíš co je remorkér?',
'Katamarán je na vzduch',
'Vučíno',
'Hej, to je katamarán',
'Čo? Čo? Čo?',
'V Alze maj nejlepší kávu na světě!',
'Je mi špatně',
'Jdu se projít kolem bloku',
'Ne, pivo fakt ne.',
'V Oříšku nemaj mrazák',
'Co je, Štefaaaano!',
];

new Firebase('https://halomea.firebaseio.com/').on('value', function (data) {
    var q = data.val();
    for (var i in q) {
        quotes.push(q[i]);
    }
});

document.getElementById('vuit').addEventListener('click', function () {
    _gaq.push(['_trackEvent', 'Button', 'Pressed', 'Just Vu It']);
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
