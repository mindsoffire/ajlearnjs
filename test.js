let aj = require('./lib/ajFns');
let qr = require('qrcode');

/**
 * @tests
 */

// aj.trace('{Math}.abs: Math.abs(-3252356.235)')({ Math_absFn: Math.abs(-3252356.235) });
// aj.trace('{Math}.abs: Math.abs')({ Math_absFn: Math.abs });
// console.log('Math.abs not JSON.stringified :', Math.abs);
// aj.trace('{Math}.E')(Math.E);
// aj.trace('{Math}.LN10')(Math.LN10);
// aj.trace('{Math}.LN2')(Math.LN2);
// aj.trace('{Math}.LOG10E')(Math.LOG10E);
// aj.trace('{Math}.PI')(Math.PI);
// aj.trace('{Math}.SQRT1_2')(Math.SQRT1_2);
// aj.trace('{Math}.SQRT2')(Math.SQRT2);
// aj.trace('{Math}.abs(-Math.PI)')(Math.abs(-Math.PI));
// aj.trace('{Math}.random()')(Math.random());
// aj.trace('{Math}.floor(0.49999)')(Math.floor(0.49999));
// aj.trace('{Math}.floor(0.99999)')(Math.floor(0.99999));
// aj.trace('{Math}.ceil(4.00001)')(Math.ceil(4.00001));
// aj.trace('{Math}.log(2)')(Math.log(2));
// aj.trace('{Math}.log10(2)')(Math.log10(2));
// aj.trace('{Math}.log10(Math.E)')(Math.log10(Math.E));
// aj.trace('global date = new Dateate()')(date = new Date());
// aj.trace('date.getFullYear().toString()')(date.getFullYear().toString());
// aj.trace('date.getMonth().toString()')(date.getMonth().toString());
// aj.trace('date.getDate()')(date.getDate());
// aj.trace('date.getDay().toString()')(date.getDay().toString());
// aj.trace('date.getTime() -> ms since midnight 1Jan1970')(date.getTime());
// aj.trace('date.getTime().toString()')(date.getTime().toString());
// aj.trace('Date.now() == new Date.getTime()')(Date.now());
// aj.trace('getting the year with gp eval optr, (...globalDefns.lastArgRetned)')((sec = 1000, min = 60 * sec, hr = 60 * min, d = 24 * hr, y = 365 * d, Math.floor(date / y) + 1970));
// aj.trace('getting the year with =>Fn, (...fnDefns) => ({retnedObj}), executed immediately')(((date, arg_sec = 1000, arg_min = 60 * arg_sec, arg_hr = 60 * arg_min, arg_d = 24 * arg_hr, arg_y = 365 * arg_d) => Math.floor(date / arg_y) + 1970)(date = new Date()));
// aj.trace('getting the year with =>Fn, (...fnDefns) => ({retnedObj}), executed immediately')(((date = new Date(), arg_sec = 1000, arg_min = 60 * arg_sec, arg_hr = 60 * arg_min, arg_d = 24 * arg_hr, arg_y = 365 * arg_d) => Math.floor(date / arg_y) + 1970)());
// aj.trace('\'sec\' initialized in ms')(sec);
// aj.trace('global \'sec\' exist?')(global.hasOwnProperty('sec'));
// aj.trace('global \'arg_sec\' exist?')(global.hasOwnProperty('arg_sec'));
// aj.trace('15 mod 6')(15 % 6);
// aj.trace('new Date(2018,10,18)')(new Date(2018, 10, 18));
// aj.trace('String.toString method')(String.toString());

// aj.trace('hi, this is James\' string', '************')('hi, this is James\' string');
// aj.trace('Math.PI', '************')(Math.PI);
// aj.trace('null', '************')(null);        // null is an object due to legacy reasons.
// aj.trace('{ name: \'value\', idx: 5}')({ name: 'value', idx: 5 });
// aj.trace('[\'array\', 5, 6.3463, {key: \'valueFF\'}]')(['array', 5, 6.3463, { key: 'valueFF' }]);

// ***************************************************************************************************


// aj.trace('aj._range()', 'noArgs')(aj._range());
// aj.trace('aj._range(6)')(aj._range(6));
// aj.trace('aj._range(6, 29, 2)')(aj._range(6, 29, 2));
// console.log({ noArgs: aj._range() });
// console.log({ mylistx: aj._range(10) });
// console.log({ mylisty: aj._range(3, 10, 2) });
// console.log({ mylistz: aj._range(10, 3) });
// console.log({ list1: aj._range(10) });
// // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log({ list2: aj._range(65, 69) });
// // [65, 66, 67, 68]
// console.log({ list3: aj._range(10, -10.1, -5) });
// console.log({ list3a: aj._range(10, 4, -5) });
// console.log({ list3b: aj._range(-5, 14, -5) });
// console.log({ list3c: aj._range(-5, -14, -5) });
// // [10, 5, 0, -5, -10]
// console.log({ list4: aj._range(10, 1) });
// // []
// for (let i of aj._range(10, -10.1, -5)) console.log({ i });
// for (let i of 'aj was here.') console.log({ i });
// // for (let i in 'aj was here.') console.log(i + ':', 'aj was here.'[i].repeat(3));
// for (let i in 'aj was here.'.repeat(2)) console.log(i + ':', 'aj was here.'.repeat(2)[i].repeat(6));


// // _______

let myChrs = aj._range(127744, 128501), [i, j] = [Math.min(...myChrs), Math.max(...myChrs)]; console.log({ i, j });
// console.log({ inBrackets: aj.f_strOrArrReverse(myChrs) });

// for (let i of aj._range(127744, 128292)) i = String(i), console.log({ i, chr: String.fromCodePoint(i) });
myChrs = [];
for (let [idx, i] of aj._range(127744, 128501).entries()) i = String(i), myChrs.push({ i, chr: String.fromCodePoint(i) }), console.log(idx === 0 ? '1st' : idx === 1 ? '2nd' : idx === 2 ? '3rd' : `${idx}th`, myChrs[idx]);
// qr.toDataURL('I am a pony!', (err, url) => console.log(url));
// aj.trace('test create QRCode')(qr.create('I am a pony!'));

var QRCode = require('qrcode-svg');

var hello = new QRCode("Hello World!");
var modules = hello.qrcode.modules;

var ascii = '';
var length = modules.length;
for (var y = 0; y < length; y++) {
    for (var x = 0; x < length; x++) {
        var module = modules[x][y];
        ascii += (module ? String.fromCodePoint(128195) : ' ');
    }
    ascii += '\r\n';
}
console.log(ascii);
// console.log({ myChrs: myChrs[4].i, myChrs: myChrs[4].chr });
// console.log({ i: myChrs[4].i, myChrs: myChrs[4].chr });
// console.log({ myChrs });
// for (let i in aj._range(128009, 128100)) console.log(i + ':', String.fromCodePoint(i));

// aj.f_chrBarMeter('sig', 185, 150, '%&');
// aj.f_chrBarMeter('sig', 185, 150, '   %&');
// aj.f_chrBarMeter('sig', 185, 150, ' ');

// const codePtChrs = [1012, 2604, 3051, 3485, 3940, 4240, 5555, 9020, 9030, 9040, 9050, 9200, 9210, 9400, 9410, 9420, 9430, 9440, 9460, 9470, 9600, 9610, 9611, 9612, 9613, 9614, 9615, 9617, 9618, 9619, 9620, 9640, 9650, 9660, 9670, 9690, 60000];
// var meter = [];
// for (let deg = 0, level = 0, maxLvl = 120, k = 0, chr;
//     deg <= 360 * 2;
//     deg += 10, k >= codePtChrs.length ? k = 0 : k++ , [level, chr] = (deg > 90 * 2 && deg < 180 * 2) || (deg > 270 * 2 && deg < 360 * 2) ? [Math.random() * maxLvl, String.fromCodePoint(codePtChrs[k])] : [Math.sin(Math.PI / 180 * deg) * maxLvl / 2 + maxLvl * 0.2, String.fromCodePoint(myChrs[deg].i)]) meter.push(aj.f_chrBarMeter('vol', level, maxLvl, chr, false));
// for (let deg = 0, level = 0, maxLvl = 120, k = 0, chr;
//     deg <= 360 * 2;
//     deg += 10, k >= codePtChrs.length ? k = 0 : k++ , [level, chr] = (deg > 90 * 2 && deg < 180 * 2) || (deg > 270 * 2 && deg < 360 * 2) ? [Math.random() * maxLvl, String.fromCodePoint(codePtChrs[k])] : [Math.sin(Math.PI / 180 * deg) * maxLvl / 2 + maxLvl * 0.2, String.fromCodePoint(myChrs[deg].i)]) meter.push(aj.f_chrBarMeter('vol', level, maxLvl, String.fromCodePoint(9613)));

// console.log('\n\n\n', meter.length); meter.push('\n');

// // const sleep = ms => new Promise(res => setTimeout(res, ms));
// // var print = async (msg, ms) => { process.stdout.write(msg); await sleep(ms); }

// // let danceMeter = async (strArr, ms) => {
// //     for (let i = 0; i < meter.length; i++)  await print(meter[i], ms);
// // }

// aj.danceMeter(meter, 100);


// ***************************************************************************************************

// aj.trace('aj.f_capitalize(\'hi thERE, my namE iS andrew tAN     chOon yew.\')')(aj.f_capitalize('hi thERE, my namE iS andrew tAN     chOon yew.'));
// aj.trace('aj.f_capitalize(\'hi thERE, my       namE iS andrew tAN     chOon yew.\', \'words\')')(aj.f_capitalize('hi thERE, my       namE iS andrew tAN     chOon yew.', 'words'));
// aj.trace('aj.f_capitalize(\'hi thERE, my namE iS andrew tAN chOon yew.   how do you              do?\', \'sentences\')')(aj.f_capitalize('hi thERE, my namE iS andrew tAN chOon yew.   how do you              do?', 'sentences'));
// aj.trace('aj.f_capitalize(\'hi thERE, my namE iS andrew tAN chOon yew.     how do you do?\', \'allcaps\')')(aj.f_capitalize('hi thERE, my namE iS andrew tAN chOon yew.     how do you do?', 'allcaps'));
// aj.trace('aj.f_capitalize(\'hi thERE, my namE iS andrew tAN chOon yew.    how do you do?\', \'words\')')(aj.f_capitalize('hi thERE, my namE iS andrew tAN chOon yew.    how do you do?', 'words'));
// aj.trace('aj.f_capitalize(\'hi thERE, what\'s your name?    I\'m good.You?\', \'sentences\')')(aj.f_capitalize('hi thERE, what\'s your name?    I\'m good.You?', 'sentences'));
// aj.trace('aj.f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\', \'sentences\')')(aj.f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?', 'sentences'));
// aj.trace('aj.f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\', \'words\')')(aj.f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?', 'words'));
// aj.trace('aj.f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\', \'allcaps\')')(aj.f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?', 'allcaps'));
// aj.trace('aj.f_capitalize(\' here    are some sentences in an array.  ok, some more.   can you see?\')')(aj.f_capitalize(' here    are some sentences in an array.  ok, some more.   can you see?'));

// ***************************************************************************************************

// aj.trace('tf_getYear(new Date(2032, 0, 1))')(aj.tf_getYear(new Date(2032, 0, 1)));
// aj.trace('tf_getYear()')(aj.tf_getYear());
// aj.trace('tf_getYear(31536010000)')(aj.tf_getYear(31536010000));
// aj.trace('tf_getYear(1547206326864)')(aj.tf_getYear(1547206326864));
// aj.trace('tf_getYear(1547622369150)')(aj.tf_getYear(1547622369150));
// aj.trace('tf_getYear(1948622369150)')(aj.tf_getYear(1948622369150));
// aj.trace('tf_getYear(1958682369150)')(aj.tf_getYear(1958682369150));
// console.table(aj.tf_getYear(1547622369150));
// console.dir(aj.tf_getYear(1547622369150)); console.log(aj.tf_getYear(1547622369150));
// console.table(['aj', 123, true]);
// console.dir(['aj', 123, true]);
// console.log(['aj', 123, true]);



// aj.trace('aj.tf_getYear((Date.now())')(aj.tf_getYear(Date.now()));
// aj.trace('aj.tf_getYear()')(aj.tf_getYear());
// aj.trace('aj.tf_getYear(1000)')(aj.tf_getYear(1000));
// aj.trace('aj.tf_getYear(31536000001)')(aj.tf_getYear(31536000001));
// aj.trace('aj.tf_getYear(1958682369150)')(aj.tf_getYear(1958682369150));
// aj.trace('aj.tf_getYear(new Date(Date.UTC(2019, 0, 1)))')(aj.tf_getYear(new Date(Date.UTC(2019, 0, 1))));
// aj.trace('aj.tf_getYear(1546272000000)')(aj.tf_getYear(1546272000000));
// aj.trace('aj.tf_getYear(new Date(Date.UTC(2019, 0, 5)))')(aj.tf_getYear(new Date(Date.UTC(2019, 0, 5))));
// aj.trace('aj.tf_getYear(new Date(Date.UTC(2019, 0, 31))')(aj.tf_getYear(new Date(Date.UTC(2019, 0, 31))));
// aj.trace('aj.tf_getYear(new Date(Date.UTC(2032, 0, 1)))')(aj.tf_getYear(new Date(Date.UTC(2032, 0, 1))));
// aj.trace('aj.tf_getYear(new Date(2019,1,1))')(aj.tf_getYear(new Date(2019, 1, 1)));
// aj.trace('aj.tf_getYear(new Date(2019,1,5))')(aj.tf_getYear(new Date(2019, 1, 5)));
// aj.trace('aj.tf_getYear(new Date(2019,1,28))')(aj.tf_getYear(new Date(2019, 1, 28)));
// aj.trace('aj.tf_getYear(new Date(1971,0,1))')(aj.tf_getYear(new Date(1971, 0, 1)));
// aj.trace('aj.tf_getYear(new Date(2019,0,1))')(aj.tf_getYear(new Date(2019, 0, 1)));
// aj.trace('aj.tf_getYear(new Date(2032,0,1))')(aj.tf_getYear(new Date(2032, 0, 1)));

// aj.trace('aj.tf_getYearA((Date.now())')(aj.tf_getYearA(Date.now()));
// aj.trace('aj.tf_getYearA()')(aj.tf_getYearA());
// aj.trace('aj.tf_getYearA(1000)')(aj.tf_getYearA(1000));
// aj.trace('aj.tf_getYearA(31536000001)')(aj.tf_getYearA(31536000001));
// aj.trace('aj.tf_getYearA(1958682369150)')(aj.tf_getYearA(1958682369150));
// aj.trace('aj.tf_getYearA(new Date(Date.UTC(2019, 0, 1)))')(aj.tf_getYearA(new Date(Date.UTC(2019, 0, 1))));
// aj.trace('aj.tf_getYearA(1546272000000)')(aj.tf_getYearA(1546272000000));
// aj.trace('aj.tf_getYearA(new Date(Date.UTC(2019, 0, 5)))')(aj.tf_getYearA(new Date(Date.UTC(2019, 0, 5))));
// aj.trace('aj.tf_getYearA(new Date(Date.UTC(2019, 0, 31))')(aj.tf_getYearA(new Date(Date.UTC(2019, 0, 31))));
// aj.trace('aj.tf_getYearA(new Date(Date.UTC(2032, 0, 1)))')(aj.tf_getYearA(new Date(Date.UTC(2032, 0, 1))));
// aj.trace('aj.tf_getYearA(new Date(2019,1,1))')(aj.tf_getYearA(new Date(2019, 1, 1)));
// aj.trace('aj.tf_getYearA(new Date(2019,1,5))')(aj.tf_getYearA(new Date(2019, 1, 5)));
// aj.trace('aj.tf_getYearA(new Date(2019,1,28))')(aj.tf_getYearA(new Date(2019, 1, 28)));
// aj.trace('aj.tf_getYearA(new Date(1971,0,1))')(aj.tf_getYearA(new Date(1971, 0, 1)));
// aj.trace('aj.tf_getYearA(new Date(2019,0,1))')(aj.tf_getYearA(new Date(2019, 0, 1)));
// aj.trace('aj.tf_getYearA(new Date(2032,0,1))')(aj.tf_getYearA(new Date(2032, 0, 1)));

// ***************************************************************************************************

// aj.trace('aj.f_strnum2OrdVals_2387959823')(aj.f_strnum2OrdVals('2387959823'));
// aj.trace('aj.f_strnum2OrdVals_2387959823.join(\'\'')(aj.f_strnum2OrdVals('2387959823').join(''));    // joining numbers make a string again - not our purpose.
// aj.trace('aj.f_strnum2OrdVals_2018-4-23')(aj.f_strnum2OrdVals('2018-4-23', '-'));
// aj.trace('aj.f_strnum2OrdVals_2018-4-23')(aj.f_strnum2OrdVals('2018-Apr-23', '-'));
// aj.trace('aj.f_strnum2OrdVals_2018-4-23')(aj.f_strnum2OrdVals('2018@gmail.com', '@'));
// aj.trace('aj.f_strnum2OrdVals(\'hi thERE, my namE iS andrew tAN     chOon yew.\')')(aj.f_strnum2OrdVals('hi thERE, my namE iS andrew tAN     chOon yew.', ' '));
// aj.trace('aj.f_strnum2OrdVals(\'hi thERE, my namE iS andrew tAN chOon yew. how do you do?   77   436347.2\', \' \')')(aj.f_strnum2OrdVals('hi thERE, my namE iS andrew tAN chOon yew. how do you do?   77   436347.2', ' '));
// aj.trace('aj.f_strnum2OrdVals(\'ℱїαт ϟεℯкḯηℊ Ṳᾔⅾεґṧ⊥αη∂їηℊ\')')(aj.f_strnum2OrdVals('ℱїαт ϟεℯкḯηℊ Ṳᾔⅾεґṧ⊥αη∂їηℊ').map(ch => ch + ' , ' + ch.codePointAt(0)));

// ***************************************************************************************************

// aj.trace('aj.f_strnum2OrdVals_newDate_2018_10_18')(aj.f_strnum2OrdVals(aj.f_todayOrDate2YMD(date = new Date(2018, 10, 18), '.'), divdr = '.').join('|'));
// aj.trace('newDate_2018_10_18 - notice timezone makes date diff from .getDate() method')(date); console.log({ date: date.getDate() });
// aj.trace('aj.f_strnum2OrdVals_newDate_')(aj.f_strnum2OrdVals(aj.f_todayOrDate2YMD(new Date(2019, 0, 1), '##'), '##'));
// aj.trace('aj.f_strnum2OrdVals(aj.f_todayOrDate2YMD(new Date(1958682369150)), \'-\')')(aj.f_strnum2OrdVals(aj.f_todayOrDate2YMD(new Date(1958682369150)), '-'));

// ***************************************************************************************************


const cuppageDesign = [
    ['andrew', 7],
    ['benny', 6],
    ['chelsea', 5],
    ['dandelion', 4],
    // ['elijah', 7],
    // ['fleur', 6],
    // ['gratitude', 8],
    // ['hogwarts', 5],
    // ['ithink', 6],
    ['jennifer', 10],
    // ['krabi', 6],
    // ['lincoln', 7],
    // ['maria', 6],
    // ['nanotubial', 4],
    // ['oscar', 6],
    // ['penelope', 6],
    // ['queen', 7],
    // ['rustic', 6],
    // ['starship', 5],
    // ['temporal', 6],
    // ['umpire', 5],
    ['valiant', 6],
    ['well', 6]
];
// var cuppage = cuppageDesign.map((arr, idx) => {
//     let [x, y] = arr;
//     let z = `${idx + 1}_` + x.charAt(0).toLowerCase() + x.charAt(1).toLowerCase() + x.charAt(2).toLowerCase() + '_' + (y >= 8 ? 'Suite' : 'Rm') + '_' + y + 'pax';
//     [y, x, z] = [x, y, z];
//     return [x, y, z];
// }).sort((a, b) => a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1);
// aj.trace('cuppage')(cuppage);
// console.log({ cuppage: JSON.stringify(cuppage) });

// for (let room of cuppage) room.push(aj.f_randActyBlot(3, 3));
// aj.trace('cuppage')(cuppage);

// console.log({ cuppage: JSON.stringify(cuppage) });

var cuppageSpace = aj.f_mapResDesign2Space(cuppageDesign, 'capacity');
// aj.trace('')(cuppageSpace = aj.f_mapResDesign2Space(cuppageDesign));
// aj.trace('aj.f_mapResDesign2Space(cuppageDesign, \'capacity\')')(cuppageSpace = aj.f_mapResDesign2Space(cuppageDesign, 'capacity'));
// aj.trace('{cuppageDesign, cuppageSpace}')({ cuppageDesign, cuppageSpace });

for (let room of cuppageSpace) room.push(aj.f_randActyBlot(3, 2));
// aj.trace('cuppageSpace')(cuppageSpace);

// aj.trace('aj.f_chkOrBookRm(cuppageSpace)')(aj.f_chkOrBookRm(cuppageSpace));
// aj.trace('aj.f_chkOrBookRm(cuppageSpace, 7)')(aj.f_chkOrBookRm(cuppageSpace, 7));
// aj.trace('aj.f_chkOrBookRm(cuppageSpace, 7, \'2019.3.1\', 1200, 3)')(aj.f_chkOrBookRm(cuppageSpace, 7, '2019.3.1', 1200, 3));
// aj.trace('aj.f_chkOrBookRm(cuppageSpace, 7, \'2019.3.1\', 1200, 3, \'Augustus Tan.aug2019@gmail.com.94556047\')')(aj.f_chkOrBookRm(cuppageSpace, 7, '2019.3.1', 1200, 3, 'Augustus Tan.aug2019@gmail.com.94556047'));
aj.trace('aj.f_chkOrBookRm(cuppageSpace, 9, \'2019.3.1\', 0930, 6, \'Augustus Tan.aug2019@gmail.com.94556047\')')(aj.f_chkOrBookRm(cuppageSpace, 9, '2019.3.1', 0930, 6, 'Augustus Tan.aug2019@gmail.com.94556047'));

// console.log(aj.f_chkOrBookRm(cuppage));
// console.log(aj.f_chkOrBookRm(cuppage, 6));
// console.log(aj.f_chkOrBookRm(cuppage, 6, '2019.3.1', 1200, 3));
// console.log(aj.f_chkOrBookRm(cuppage, 9, '2019.3.1', 0930, 6, 'Augustus Tan.aug2019@gmail.com.94556047')); /* console.log({ cuppage: JSON.stringify(cuppage) }); */
// console.log(aj.f_chkOrBookRm(cuppage, 6, '2019.3.1', 1200, 3, 'jo')); console.log({ cuppage: JSON.stringify(cuppage) });
// console.log(aj.f_chkOrBookRm(cuppage, 6, '2019.3.1', 1200, 3)); /* console.log({ cuppage: JSON.stringify(cuppage) }); */


// ***************************************************************************************************

// aj.trace('aj.f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'])')(aj.f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm']));
// aj.trace('aj.f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'], 1)')(aj.f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'], 1));
// let points = [40, 100, 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'];
// console.log(points.map(ele => typeof ele == 'number' ? ele : ele.toLowerCase()).sort((a, b) => a == b ? 0 : a < b ? -1 : 1));
// points = 'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²';
// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\'))')(aj.f_arrSort(aj.f_strnum2OrdVals(points), -1).map(ch => `${ch} , ${ch.charCodeAt(0)}`));
// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\'))')(aj.f_arrSort(aj.f_strnum2OrdVals(points), 1).map(ch => `${ch} , ${ch.charCodeAt(0)}`));
// -- old tests.

// aj.trace('aj.f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'])')(aj.f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm']));
// aj.trace('f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'], -1, false)')(aj.f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'], -1, false));
// aj.trace('aj.f_arrSort([\'20\', 40, \'bz\', 100, \'10\', 1, 5, 25, 10, \'Zinger\', \'oppa\', \'apple\', \'Banana\', \'balm\'], 1)')(aj.f_arrSort(['20', 40, 'bz', 100, '10', 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'], 1));
// let points = [40, 100, 1, 5, 25, 10, 'Zinger', 'oppa', 'apple', 'Banana', 'balm'];
// console.log(points.map(ele => typeof ele == 'number' ? ele : ele.toLowerCase()).sort((a, b) => a == b ? 0 : a < b ? -1 : 1));
// points = 'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²';
// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\'))')(aj.f_arrSort(aj.f_strnum2OrdVals(points), -1).map(ch => `${ch} , ${ch.charCodeAt(0)}`));
// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\'))')(aj.f_arrSort(aj.f_strnum2OrdVals(points), 1).map(ch => `${ch} , ${ch.charCodeAt(0)}`));
// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'ƒºαßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²\'))')(aj.f_arrSort(aj.f_strnum2OrdVals(points), 0).map(ch => `${ch} , ${ch.charCodeAt(0)}`));

// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), -1, false).map(ch => (ch = ch.toString(), `${ch} , ${ch.charCodeAt(0)}`))')(aj.f_arrSort(aj.f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), -1, false).map(ch => (ch = String(ch), `${ch} , ${ch.charCodeAt(0)}`)));
// aj.trace('aj.f_arrSort(aj.f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), 0).map(ch => typeof ch === \'number\' ? ch : `${ch} , ${ch.charCodeAt(0)}`)')(aj.f_arrSort(aj.f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), 0).map(ch => typeof ch === 'number' ? ch : `${ch} , ${ch.charCodeAt(0)}`));

// ***************************************************************************************************

// aj.trace('reverse this string: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=`~!@#$%^&*()_+[]\\{}|;:\",.<>?\/\'\n')(aj.f_strOrArrReverse('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=`~!@#$%^&*()_+[]\\{}|;:\",.<>?\/\''));
// aj.trace('today\'s date')(aj.f_todayOrDate2YMD());
// aj.trace('reverse today\'s date, or aj.f_strOrArrReverse(aj.f_todayOrDate2YMD(), \'-\', \'.\')')(aj.f_strOrArrReverse(aj.f_todayOrDate2YMD(), '-', '.'));
// aj.trace('aj.f_strOrArrReverse([\'aj\', 123, true], \'zabo\', \'|\')')(aj.f_strOrArrReverse(['aj', 123, true], 'zabo', '|'));
// aj.trace('aj.f_strOrArrReverse(235236.326326)')(aj.f_strOrArrReverse(235236.326326));
// aj.trace('aj.f_strOrArrReverse(\'235236.326326\')')(aj.f_strOrArrReverse('235236.326326'));
// aj.trace('f_arrSort(f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), 1).map(ch => typeof ch === \'number\' ? ch : `${ch} , ${ch.charCodeAt(0)}`)')(aj.f_arrSort(aj.f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), 1).map(ch => typeof ch === 'number' ? ch : `${ch} , ${ch.charCodeAt(0)}`));
// aj.trace('f_strOrArrReverse(aj.f_arrSort(aj.f_strnum2OrdVals(\'This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.\'), 1).map(ch => typeof ch === \'number\' ? ch : `${ch} , ${ch.charCodeAt(0)}`))')(aj.f_strOrArrReverse(aj.f_arrSort(aj.f_strnum2OrdVals('This is a sentence that contains numbers 0,1,2,3,4,5,6,7,8,9,0.'), 1).map(ch => typeof ch === 'number' ? ch : `${ch} , ${ch.charCodeAt(0)}`)));

// ***************************************************************************************************

// aj.trace('aj.f_rotajF(\'Andrew Tan Choon Yew\')')(aj.f_rotajF('Andrew Tan Choon Yew'));
// aj.trace('aj.f_rotjaF(\'Andrew Tan Choon Yew\')')(aj.f_rotjaF('Andrew Tan Choon Yew'));
// aj.trace('aj.f_rotjaF(aj.f_rotajF(\'Andrew Tan Choon Yew\'))')(aj.f_rotjaF(aj.f_rotajF('Andrew Tan Choon Yew')));
// aj.trace('aj.f_rotajF(aj.f_rotjaF(\'Andrew Tan Choon Yew\'))')(aj.f_rotajF(aj.f_rotjaF('Andrew Tan Choon Yew')));
// aj.trace('aj.f_rotajG(\'Andrew Tan Choon Yew\')')(aj.f_rotajG('Andrew Tan Choon Yew'));
// aj.trace('aj.f_rotajG(\'jskJIrKKswx@LjHsP.nrj\')')(aj.f_rotajG('jskJIrKKswx@LjHsP.nrj'));
// aj.trace('aj.f_rotjaG(\'Andrew Tan Choon Yew\')')(aj.f_rotjaG('Andrew Tan Choon Yew'));
// aj.trace('aj.f_rotjaG(aj.f_rotajG(\'Andrew Tan Choon Yew\'))')(aj.f_rotjaG(aj.f_rotajG('Andrew Tan Choon Yew')));
// aj.trace('aj.f_rotajG(aj.f_rotjaG(\'Andrew Tan Choon Yew\'))')(aj.f_rotajG(aj.f_rotjaG('Andrew Tan Choon Yew')));
// aj.trace('HNqMrkxMrjx@uHM')(aj.f_rotjaF('HNqMrkxMrjx@uHM'));

// ***************************************************************************************************

// aj.trace('aj.f_funLtrs(\'Faith seeking understanding.\')')(aj.f_funLtrs('Faith is seeking wisdom in understanding, and surely finding Her Unified-and-Absolute Truth in Him.  The LORD Himself guarantees this: that if you \'fiat voluntas tua\' to His will-for-you, your name can be found in His Book of Life by the Sanctifying Grace of The Holy Ghost, opened to all and offered for anyone.  To this, you must be humble and work out your salvation (for yourself) with fear and trembling, as St-Paul urges us to put on the Mind of Christ.  Let Divine-Fear extract out your wicked heart, so that the Passion-of-Christ may enter your mind to give you a renewed heart of goodness, one that is pleasing in the courts of the Almighty Lord.  For the LORD maketh all things new.  AJ123'));
// aj.trace('aj.f_funLtrs(\'Faith seeking understanding.\')')(aj.f_strnum2OrdVals('Faith is seeking wisdom in understanding, and surely finding Her Unified-and-Absolute Truth in Him.  The LORD Himself guarantees this: that if you \'fiat voluntas tua\' to His will-for-you, your name can be found in His Book of Life by the Sanctifying Grace of The Holy Ghost, opened to all and offered for anyone.  To this, you must be humble and work out your salvation (for yourself) with fear and trembling, as St-Paul urges us to put on the Mind of Christ.  Let Divine-Fear extract out your wicked heart, so that the Passion-of-Christ may enter your mind to give you a renewed heart of goodness, one that is pleasing in the courts of the Almighty Lord.  For the LORD maketh all things new.  AJ123 with STRINGS, ARRAYS & OBJECTS!', ' ').map(word=> aj.f_funLtrs(word)).join('  _|_  '));

// ***************************************************************************************************

// aj.trace('aj.f_sanitizeStr(\'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-=`][{}|:",./?><\'\\        \\t\\n\\f\\r\\v\\0\')')(aj.f_sanitizeStr('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-=`][{}|:",./?><\'\\        \t\n\f\r\v\0'));

// ***************************************************************************************************

// console.log(aj.f_strEncDec('Tan Choon Yew')); console.log(aj.f_strEncDec('testString0123456789', 1, 13));
// console.log(aj.f_strEncDec('apptreme.sg', 0, 42243)); console.log(aj.f_strEncDec('ꕤꕳꕳꕷꕵꕨꕰꕨꔱꕶꕪ', 1, 42243));
// console.log(aj.f_strEncDec('apptreme.sg', 0, 72243)); console.log(aj.f_strEncDec('apptreme.sg', 1, 42243));
// let idStr = aj.f_strEncDec(JSON.stringify({ legalFullNameID: 'anonymous\' Full Legal Name', emailID: 'alias@someEmail.domain', IDNum: 'SABCDEFGZ', race: 'Chinese', DOB: 'dd-mmm-yyyy', gender: 'Y', bloodGp: 'X\+', COB: 'State, Country', nationality: 'Singapore', postCode: '6-digit', postSt: 'Example St.', postBlk: 'XXXB', postUnit: '#YY-ZZ', dateOfAddr: '25-aug-2000', dateOfIssue: '28-feb-1994' }), 0);
// console.log({ idStr })
// console.log(/* JSON.parse */(aj.f_strEncDec(idStr, 1, 40967)), aj.f_strEncDec(idStr, 1, 42243));


// aj.trace('aj.f_encDecName(\'   this is just a sentence, not a name.\')')(aj.f_encDecName('   this is just a sentence, not a name.'));
// aj.trace('aj.f_encDecName(\'   andrew tan choo yew\')')(aj.f_encDecName('   andrew tan choo yew'));
// aj.trace('aj.f_encDecName(\'   ajmindsoffire@gmail.com\')')(aj.f_encDecName('   ajmindsoffire@gmail.com'));
// aj.trace('aj.f_encDecName("This ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1)')(aj.f_encDecName("This ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1));
// aj.trace('aj.f_encDecName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1)')(aj.f_encDecName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1));
// aj.trace('aj.f_encDecName("ajmindsoffire @ ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1)')(aj.f_encDecName("ajmindsoffire @ ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1));
// aj.trace('aj.f_encDecName(\'   andrew tan choo yew\')')(aj.f_encDecName('   andrew tan choo yew', 0, 6000));
// aj.trace('aj.f_encDecName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000)')(aj.f_encDecName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000));
// aj.trace('aj.f_encDecName(\'   ajmindsoffire@gmail.com\')')(aj.f_encDecName('   ajmindsoffire@gmail.com', 0, 15000));
// aj.trace('aj.f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000)')(aj.f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000));
// aj.trace('aj.f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000)')(aj.f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000));
// aj.trace('aj.f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17)')(aj.f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17));

// ***************************************************************************************************


// o1 = aj.tfo_objFty('Andrew', 'S0239667J', '1967-4-23', 324543, 'all other args can be seen unless you return nothing back..');
// aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1 b4 trying to change the obj')(o1); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1 profile b4 trying to change the obj')(o1.profile()); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1.name = \'James\'')(o1.name = 'James'); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1.IC = 23523643')(o1.IC = 23523643); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1.bDate = \'TRY\'')(o1.bDate = 'TRY'); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1.addAPropty = \'senile\'')(o1.addAPropty = 'senile'); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1 after trying to change the obj')(o1); aj.trace('visitCntr')(o1.accessCnt()); aj.trace('o1.hasOwnProperty(\'addAPropty\')')(o1.hasOwnProperty('addAPropty'));
// aj.trace('o1 profile after trying to change the obj')(o1.profile()); aj.trace('visitCntr')(o1.accessCnt());
// aj.trace('o1\'s .accessCnt method print')(o1.accessCnt = 100);
// aj.trace('o1\'s .accessCnt method print')(o1.accessCnt); aj.trace('visitCntr')(o1.accessCnt()); console.log({ 'o1.accessCnt method': o1.accessCnt });
// aj.trace('visitCntr')(o1);
// aj.trace('visitCntr')(o1);
// o1.accessCnt();
// o1.accessCnt();
// aj.trace('visitCntr2x')([o1.accessCnt(), o1.accessCnt()]);
// aj.trace('arg')([o1.next(), o1.next()]);
// aj.trace('arg')(o1.next());
// aj.trace('arg')(o1.next());
// aj.trace('arg')(o1.next());
// aj.trace('arg')(o1.next());
// aj.trace('[arg,o1]')([o1.next(), o1]);

// ***************************************************************************************************


// let unicodes = ['unicodes'];
// for (let i of aj._range(parseInt('3b1', 16), parseInt('3c9', 16) + 1)) unicodes.push({ codePtVal: i, escSeq: 'x+' + (i).toString(16), chr: String.fromCodePoint(i) });
// aj.trace('makecodes')(unicodes);

// console.log({ greekAlphabetCodes: aj.GreekAlphabet });
// console.log(String.fromCharCode(parseInt(aj.GreekAlphabet[1].unicodeHex, 16)));
// aj.trace('Greek Alphabet Codes')([aj.GreekAlphabet, aj.GreekAlphabet[1].chr]);


// for (let [idx, ent] of aj.Codes.entries())
//     console.log({ idx, Codes: ent });
// for (let code of aj.Codes) if (/currency/gi.test((code[0]))) console.log({ code });
// for (let [i, v] of aj.Codes.entries()) {
//     for (let [idx, val] of v.entries())
//         if (/gamma/gi.test(val.desc)) console.log({ val })
// }
// aj.trace('Codes')([aj.Codes[0], aj.Codes[1]])

console.log({ ajFnsVer: aj.version });

// let iterable = {
//     0: 'iter',
//     1: 123,
//     2: 'aj',
//     length: 3,
//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next: () => ({ done: index >= this.length, value: this[index++] })
//         }
//     }
// }



