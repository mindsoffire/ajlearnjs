'use strict';

const serve = require('./_core/ajExpressMWaresOnNodeServer');
const fs = require('./_core/ajExpressMWaresOnNodeServer').fs;
const sha256 = require('js-sha256').sha256;
const jwt = require('jwt-simple');

var nodemailer = require('nodemailer');


/**
 * Module exports.
 * @public
 */



/**
 * Module variables.
 * @private
 */


let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.log('crypto support is disabled!');
}

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();
console.log({ cert1, cert2 });




/**
 * expose object
 */
var ajFns = module.exports;
const Codes = require('./ajUnicodes.json');
const GreekAlphabet = require('./greekAlphaB.json');
/**
 * version
 */
// ajFns.version = '0.3.3';

const trace = descriptr => objOrFn =>
    typeof objOrFn === 'object' ?
        console.log(`\n\x1b[1m\x1b[36maj:: \x1b[32m${descriptr} =\x1b[0m\n\b`, JSON.stringify(objOrFn, null, ':' + ' '.repeat(5)), '\n\x1b[1m\x1b[33m_______________________\x1b[0m')
        :
        console.log(`\n\x1b[1m\x1b[36maj:: \x1b[32m${descriptr} =\x1b[0m`, JSON.stringify(objOrFn, null, '^\t'), '\n\x1b[1m\x1b[33m_______________________\x1b[0m');


// const _range = (beg = 0, end, step = 1) => {
//     if (!end) end = beg, beg = 0;
//     for (var ret = []; (end - beg) * step > 0; ret.push(beg), beg += step) /* ret.push(beg) before beg += step */;
//     return ret;
// }
const _range = (beg = 0, end = beg, step = 1) => {
    for (var ret = [], beg = beg == end ? 0 : beg; (end - beg) * step > 0; ret.push(beg), beg += step) /* ret.push(beg) before beg += step */;
    return ret;
}


const f_chrBarMeter = (desc, level, maxLvl = 30, chr = String.fromCodePoint(9613), LED = true) => {
    const codePtBarChrs = [1012, 2604, 3051, 3485, 3940, 4240, 5555, 9020, 9030, 9040, 9050, 9200, 9210, 9400, 9410, 9420, 9430, 9440, 9460, 9470, 9600, 9610, 9611, 9612, 9613, 9614, 9615, 9617, 9618, 9619, 9620, 9640, 9650, 9660, 9670, 9690, 60000];
    // console.log(chr.length);
    // console.log(chr.split(''));
    chr = chr.trim();
    chr = chr == '' ? String.fromCodePoint(codePtBarChrs[21]) : chr.charCodeAt(0) < 255 && chr.charCodeAt(1) < 255 ? chr[0] : chr;
    const dispMaxLvl = 30;
    let dispLevel = level / maxLvl * dispMaxLvl;

    if (LED) {
        for (var l = 1, chrBar = '', lvlRnd = dispLevel > dispMaxLvl ? dispMaxLvl : Math.round(dispLevel); l <= dispMaxLvl; l++)
            chrBar += (l <= lvlRnd) ?
                l <= 5 ? '\x1b[1m\x1b[35m' + chr
                    :
                    l <= 10 ? '\x1b[34m' + chr
                        :
                        l <= 15 ? '\x1b[36m' + chr
                            :
                            l <= 20 ? '\x1b[32m' + chr
                                :
                                l <= 25 ? '\x1b[33m' + chr
                                    :
                                    l <= 30 ? '\x1b[31m' + chr
                                        :
                                        '\x1b[0m'
                :
                ' ';
        console.log(`${desc} : \x1b[1m\x1b[32m${chrBar}\x1b[0m| lvl:\x1b[7m${String(level.toFixed(4).padStart(8, ' '))}\x1b[0m ${chr} --> ${maxLvl} (max)`/* , chr.charCodeAt(0) */);
        return `${desc} : \x1b[1m\x1b[32m${chrBar}\x1b[0m| lvl:\x1b[7m${String(level.toFixed(4).padStart(8, ' '))}\x1b[0m ${chr} --> ${maxLvl} (max)\r`;
    }
    else {
        for (var l = 1, chrBar = '', lvlRnd = dispLevel > dispMaxLvl ? dispMaxLvl : Math.round(dispLevel); l <= dispMaxLvl; l++)
            chrBar += (l <= lvlRnd) ? chr : ' ';
        console.log(`${desc} : ${chrBar}${String(level.toFixed(4).padStart(8, ' '))} ${chr} --> ${maxLvl} (max)`/* , chr.charCodeAt(0) */);
        return `${desc} : ${chrBar}${String(level.toFixed(4).padStart(8, ' '))} ${chr} --> ${maxLvl} (max)\r`;
    }
}

var sleep = ms => new Promise(res => setTimeout(res, ms));
var print = async (msg, ms) => { process.stdout.write(msg); await sleep(ms); }

const danceMeter = async (strArr, ms) => {
    for (let i = 0; i < strArr.length; i++)  await print(strArr[i], ms);
}

const tf_getYear = (date = new Date, ms = 1, sec = 1000 * ms, min = 60 * sec, hr = 60 * min, d = 24 * hr, roughYr = Math.floor(date / (d * 365.25) + 1970), numLeapYrs = Math.floor((roughYr - 1972) / 4) + 1, daysLeft = Math.floor(date / d) - numLeapYrs * 366 - (roughYr - 1970 - numLeapYrs) * 365) => ({ d, roughYr, numLeapYrs, daysLeft });


const f_capitalize = (str, type = 'none') =>
    type == 'words' ?
        str.trim().split(' ').filter(word => word).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
        :
        type == 'sentences' ?
            f_capitalize(str.trim().split('. ').map(sentence => sentence.trim()).map(sentence => sentence[0].toUpperCase() + sentence.substring(1)).join('. '))
            :
            type == 'allCaps' ?
                str.trim().split(' ').filter(word => word).join(' ').toUpperCase() : str.trim().split(' ').filter(word => word).join(' ');


const f_strnum2OrdVals = (str, divdr = '') => str.trim().split(divdr).filter(chTkn => chTkn).map(chTkn => Number(chTkn) ? +chTkn : chTkn);


const f_todayOrDate2YMD = (todayOrDate = new Date(), divdr = '-') => todayOrDate.getFullYear() + divdr + (todayOrDate.getMonth() + 1) + divdr + todayOrDate.getDate();

const daysInMonth = [['mth', 'non-leap-days'], [1, 31], [2, 28], [3, 31], [4, 30], [5, 31], [6, 30], [7, 31], [8, 31], [9, 30], [10, 31], [11, 30], [12, 31]];

const f_randActyBlot = (daysFrToday, numOfActy, startOfBizDay = 900, hoursInBizDay = 12, maxActyHours = 6, divdr = '-') => {
    let rtnActyBlot = [];
    let [YYYY, MM, DD]/*  = day */ = f_strnum2OrdVals(f_todayOrDate2YMD(), divdr = '-');
    for (let i = 0; i <= daysFrToday; i++) {
        for (let j = 1; j <= numOfActy; j++) {
            let start = startOfBizDay + Math.floor(Math.random() * hoursInBizDay) * 100;
            let duration = Math.ceil(Math.random() * maxActyHours) * 100;
            rtnActyBlot.push(`${YYYY}.${MM}.${DD}`, start + (Math.random() >= 0.5 ? 30 : 0), start + duration + (Math.random() >= 0.5 ? 30 : 0));
            rtnActyBlot.push('**NA**');
        }
        if (DD == daysInMonth[MM][1]) {
            DD = 1;
            [MM, YYYY] = MM++ == 12 ? [1, YYYY + 1] : [MM, YYYY];
        }
        else DD++;
        // console.log({ YYYY, MM, DD/* , day  */ });
    }

    return rtnActyBlot;
}

const f_chkOrBookRm = (space, paxNum = 0, date = null, start = null, duratn = null, cux = null, interval = 30) => {
    let available = [], unavailable = [], booked = [];
    if (!cux && !start && !duratn) {
        for (let [idx, room] of space.entries()) {
            if (paxNum <= room[0]) available.push('id=' + (idx + 1), room);
            // console.log({ room: room[3] });
        }
        return available;
    }
    else if (date && start && duratn) {
        for (let room of space) {
            if (paxNum <= room[0]) {
                let chkFreeSlot = false;
                for (let i = 0; i < room[3].length; i += 4) {
                    if (date == room[3][i]) {
                        if (start >= room[3][i + 2] + interval || start + duratn * 100 <= room[3][i + 1] - interval) {
                            available.push(room[0], room[1], room[2], room[3][i], room[3][i + 1], room[3][i + 2], room[3][i + 3]);
                        }
                        else if (start >= room[3][i + 1] && start <= room[3][i + 2] || start + duratn * 100 >= room[3][i + 1] && start + duratn * 100 <= room[3][i + 2] ||
                            start <= room[3][i + 1] && start + duratn * 100 >= room[3][i + 2]) {
                            unavailable.push(room[0], room[1], room[2], room[3][i], room[3][i + 1], room[3][i + 2], room[3][i + 3]);
                        }
                    }
                }
            }
        }
        console.log({ available, unavailable });

        if (available && unavailable) {
            for (let i = 1; i + 5 <= unavailable.length; i += 7) {
                for (let j = 1; j + 5 <= available.length; j += 7) {
                    if (unavailable[i] == available[j]) {
                        available.splice(j - 1, 7); j -= 7;
                    }
                }
            };
            // console.log({ availableAftRemovedFromUnavailable: available });

            if (available && cux) {
                for (let room of space) {
                    if (room[1] == available[1]) {
                        room[3].push(date, start, start + duratn * 100, cux);
                        booked.push(room[0], room[1], room[2], date, start, start + duratn * 100, cux);
                        unavailable.push(room[0], room[1], room[2], date, start, start + duratn * 100, cux);
                        // console.log({ unavailable, unavailableLen: unavailable.length });

                        for (let i = 1; i + 5 <= unavailable.length; i += 7) {
                            for (let j = 1, z = 0; j + 5 <= available.length; j += 7) {
                                if (unavailable[i] == available[j]) {
                                    z++;
                                    available.splice(j - 1, 7); j -= 7;
                                    // console.log({ i, z, j, availableLen: available.length });
                                }
                            }
                        };
                        // console.log({ availableAdjusted: available, unavailableAftBooking: unavailable, room: room[1] }, room[3]);
                        return { booked, available };
                    }
                }
            }
        }
    }
    if (!available == [] && cux) booked.push(`no room available for ${cux}`);
    return { booked, available };
};

const f_arrSort = (arr, ascDes = -1) => {
    let numStr = [[], []];
    arr.map(ele =>
        typeof ele == 'number' ?
            numStr[0].push(ele) : numStr[1].push(ele));
    numStr.map(row =>
        row.sort((a, b, x = typeof a == 'number' ? a : a.toLowerCase(), y = typeof b == 'number' ? b : b.toLowerCase()) =>
            x == y ?
                0
                :
                ascDes == -1 ?
                    x < y ? -1 : 1                  // The retns of values determine how sorting is done.
                    :
                    x > y ? -1 : 1));
    numStr[1].forEach(str => numStr[0].push(str));  // Put numbers in front by codePointVal: \u0030-\u0039, then x41-5a/x61-7a.
    return numStr[0];
};

/** ***************************************************************************************************
 * AJ: reverses a string with/without dividers/markers.
 * @param {string} strOrArr string | array to be reversed.
 * @param {string} divdr divider for str elements to be reversed, default = ''.
 * @param {string} joinr marker used to join reversed-str elements, default follow divdr.
 */
const f_strOrArrReverse = (strOrArr, divdr = '', joinr = divdr) =>
    typeof strOrArr === 'string' ?
        strOrArr.trim().split(divdr).map((i, idx, arr) => i = arr[arr.length - 1 - idx]).join(joinr)
        :
        typeof strOrArr === 'object' ?
            strOrArr.map((i, idx, arr) => i = arr[arr.length - 1 - idx]) : 'not string nor array.';
// ***************************************************************************************************


const f_rotajF = str => str.replace(/[A-Za-z0-9]/g, (ch) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt(
    "MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405".indexOf(ch)));

const f_rotjaF = str => str.replace(/[A-Za-z0-9]/g, (ch) => "MNBVCXZasdfghjklPOIUYTREWQASDFGHJKLmnbvcxzpoiuytrewq6172839405".charAt(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch)));

const f_rotajG = str => str.replace(/[A-Za-z0-9]/g, (ch) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt(
    "HJKLmnbvcxzpoiuytrewq6172839405MNBVCXZasdfghjklPOIUYTREWQASDFG".indexOf(ch)));

const f_rotjaG = str => str.replace(/[A-Za-z0-9]/g, (ch) => "HJKLmnbvcxzpoiuytrewq6172839405MNBVCXZasdfghjklPOIUYTREWQASDFG".charAt(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch)));


const f_funLtrs = str => str.replace(/[A-Za-z0-9 ,.\'-]/g, (ch) =>
    (ch !== ' ' && ch !== ',' && ch !== '.' && ch !== '\'' && ch !== '-') ?
        "ÅɅѦᗾ฿ßℭᑖȻᕲÐᗬȄ≡Σ℉ℱƑǤḠᘜĦнḪƗɪЇɈJᒍḰƘḲℒḺŁMᙢмȠŊИỖѺϴƤṔǷɊℚƢƦᖇɌȘϟᔜтƬƮŲʊÜⅤVᕓʬШ₩卐ẌẌƔᗂ¥ℤẐȤααãɓ♭ɓ¢ḉᘹɖ∂ⅾεℯɇſẛƒℊ❡ʛƕɧ♄ḯїỉʝנɉƙḱкℓłlɱღɱηᾔŋøǿσ℘ρƥƍƣɋΓґɾṡṧṧᖶŧƫüµᘢ√ʋṽɯωẘ✕ϰẋɏ⑂ƴẕʐȝ111222333444555666777888999000".charAt(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".indexOf(ch) * 3 + Math.round(Math.random() * 2))
        :
        ch === ' ' ?                    // /* ✝, ⊥, ℨ, Þ, Ą, ⓠ, ḟ, ✞, ℝ. ᖱ, ᖳ, ð, ❜⦁❛❜❝❞ ❟❟❟⦁⦁⦁．ʺ و⎎⎍∙⎖ẞ*/
            ' '.repeat(3)
            :
            ch === ',' ?
                ' ,'
                :
                ch === '.' ?
                    ' ⦁ '
                    :
                    ch === '\'' ?
                        ' ʺ '
                        :
                        ch === '-' ? ' - ' : ch);


const f_sanitizeStr = str => str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '').trim();

// encryption func. & decrypting func.
const f_strEncDec = (str, pos = 0, num = 40967) => {
    return pos == 0 ?
        (500 <= num && num <= 65000) ?
            [...str].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('') : ({ error: `ajEnc:err: num = ${num} is out of range 500-65000` })
        :
        (0 <= num && num <= 65000 && (str.charCodeAt(0) - num >= 0)) ?
            [...str].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) - num))).join('') : ({ error: `ajDec:err: num = ${num} where (str.charCodeAt(0) - num) = ${str.charCodeAt(0) - num} is -ve, or num = ${num} is out of range 0-65000` })
};
// console.log(f_strEncDec('Tan Choon Yew')); console.log(f_strEncDec('testString0123456789', 1, 13));
// console.log(f_strEncDec('apptreme.sg', 0, 42243)); console.log(f_strEncDec('ꕤꕳꕳꕷꕵꕨꕰꕨꔱꕶꕪ', 1, 42243));
// console.log(f_strEncDec('apptreme.sg', 0, 72243)); console.log(f_strEncDec('apptreme.sg', 1, 42243));
// let idStr = f_strEncDec(JSON.stringify({ legalFullNameID: 'anonymous\' Full Legal Name', emailID: 'alias@someEmail.domain', IDNum: 'SABCDEFGZ', race: 'Chinese', DOB: 'dd-mmm-yyyy', gender: 'Y', bloodGp: 'X\+', COB: 'State, Country', nationality: 'Singapore', postCode: '6-digit', postSt: 'Example St.', postBlk: 'XXXB', postUnit: '#YY-ZZ', dateOfAddr: '25-aug-2000', dateOfIssue: '28-feb-1994' }), 0);
// console.log({ idStr })
// console.log(/* JSON.parse */(f_strEncDec(idStr, 1, 40967)), f_strEncDec(idStr, 1, 42243));

const f_encDecName = (str, pos = 0, num = 42243) => {
    return pos == 0 ?
        (500 <= num && num <= 65000) ?
            str.indexOf('@') != -1 ?
                str.trim().replace(/@/, '⌡⌠').split('⌡⌠')
                    .map(
                        (word, idx, src,
                            usrName = src[0],
                            domain = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
                        ) =>
                            ({ usrName, domain, encEmail: usrName + ' @ ' + domain }))[0]
                :
                str.indexOf(' ') != -1 ?
                    f_capitalize(str.trim(), 'words')
                        .replace(/ /, '⌡⌠').split('⌡⌠')
                        .map(
                            (word, idx, src,
                                firstName = src[0],
                                otherName = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + num))).join('')
                            ) =>
                                ({ firstName, otherName, encFullName: firstName + ' ' + otherName }))[0]
                    :
                    str
            :
            ({ error: `ajEncName:err: num = ${num} is out of range 500-65000` })
        :
        (0 <= num && num <= 65000 && (str.charCodeAt(str.length - 1) - num >= 0)) ?
            str.indexOf('@') != -1 ?
                str.trim().split(' @ ')
                    .map(
                        (word, idx, src,
                            usrName = src[0],
                            domain = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) - num))).join('')
                        ) =>
                            ({ usrName, domain, encEmail: usrName + '@' + domain }))[0]
                :
                str.indexOf(' ') != -1 ?
                    str.trim().split(' ')
                        .map(
                            (word, idx, src,
                                firstName = src[0],
                                otherName = [...src[1]].map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) - num))).join('')
                            ) =>
                                ({ firstName, otherName, fullName: firstName + ' ' + otherName }))[0]
                    :
                    str
            :
            ({ error: `ajDecName:err: num = ${num} where (str.charCodeAt(${str.length - 1}) - num) = ${str.charCodeAt(str.length - 1) - num} is -ve, or num = ${num} is out of range 0-65000` })
}
// trace('f_encDecName(\'   this is just a sentence, not a name.\')')(f_encDecName('   this is just a sentence, not a name.'));
// trace('f_encDecName(\'   andrew tan choo yew\')')(f_encDecName('   andrew tan choo yew'));
// trace('f_encDecName(\'   ajmindsoffire@gmail.com\')')(f_encDecName('   ajmindsoffire@gmail.com'));
// trace('f_encDecName("This ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1)')(f_encDecName("This ꕌꕶꔣꕍꕸꕶꕷꔣꕄꔣꕖꕨꕱꕷꕨꕱꕦꕨꔯꔣꕑꕲꕷꔣꕄꔣꕑꕤꕰꕨꔱ", -1));
// trace('f_encDecName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1)')(f_encDecName("Andrew ꕗꕤꕱꔣꕆꕫꕲꕲꔣꕜꕨꕺ", -1));
// trace('f_encDecName("ajmindsoffire @ ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1)')(f_encDecName("ajmindsoffire @ ꕪꕰꕤꕬꕯꔱꕦꕲꕰ", -1));
// trace('f_encDecName(\'   andrew tan choo yew\')')(f_encDecName('   andrew tan choo yew', 0, 6000));
// trace('f_encDecName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000)')(f_encDecName("Andrew ោ៑៞ថឳ៘៟៟ថ៉៕៧", -1, 6000));
// trace('f_encDecName(\'   ajmindsoffire@gmail.com\')')(f_encDecName('   ajmindsoffire@gmail.com', 0, 15000));
// trace('f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000)')(f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 15000));
// trace('f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000)')(f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17000));
// trace('f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17)')(f_encDecName("ajmindsoffire @ 㫿㬅㫹㬁㬄㫆㫻㬇㬅", -1, 17));


const f_encDecUsrName = (str, pos = 0) => {
    return pos == 0 ?

        str.indexOf('@') != -1 ?
            str.trim().replace(/@/, '⌡⌠').split('⌡⌠')
                .map(
                    (word, idx, src,
                        usrName = src[0],
                        domain = src[1] ? f_rotajF(src[1]) : ''
                    ) =>
                        ({ usrName, domain, encEmail: usrName + '@' + domain }))[0]
            :
            str.indexOf(' ') != -1 ?
                f_capitalize(str.trim(), 'words')
                    .replace(/ /, '⌡⌠').split('⌡⌠')
                    .map(
                        (word, idx, src,
                            firstName = src[0],
                            otherName = src[1] ? f_rotajF(src[1]) : ''
                        ) =>
                            ({ firstName, otherName, encFullName: firstName + (otherName ? ' ' : '') + otherName }))[0]
                :
                str
        :
        str.indexOf('@') != -1 ?
            str.trim().split('@')
                .map(
                    (word, idx, src,
                        usrName = src[0],
                        domain = src[1] ? f_rotjaF(src[1]) : ''
                    ) =>
                        ({ usrName, domain, encEmail: usrName + '@' + domain }))[0]
            :
            str.indexOf(' ') != -1 ?
                str.trim().replace(/ /, '⌡⌠').split('⌡⌠')
                    .map(
                        (word, idx, src,
                            firstName = src[0],
                            otherName = src[1] ? f_rotjaF(src[1]) : ''
                        ) =>
                            ({ firstName, otherName, fullName: firstName + (otherName ? ' ' : '') + otherName }))[0]
                :
                str
}
// trace('f_encDecUsrName(\'   andrew\')')(f_encDecUsrName('   andrew'));
// trace('f_encDecUsrName(\'   andrew\', -1)')(f_encDecUsrName('   andrew', -1));
// trace('f_encDecUsrName(\'   andrew   tan Choon yew\')')(f_encDecUsrName('   andrew   tan Choon yew'));
// trace('f_encDecUsrName(\'   andrewiris67@yahoo.com\')')(f_encDecUsrName('   andrewiris67@yahoo.com'));
// trace('f_encDecUsrName(\'   Andrew VHk EMrrk Uxy\', -1)')(f_encDecUsrName('   Andrew VHk EMrrk Uxy', -1));
// trace('f_encDecUsrName(\'   andrewiris67@uHMrr.nrj\', -1)')(f_encDecUsrName('   andrewiris67@uHMrr.nrj', -1).usrName);
// trace('f_encDecUsrName(\'   Andrew atLtIvskx Vwtjq\' || \'\', -1).fullName')(f_encDecUsrName('   Andrew atLtIvskx Vwtjq' || '', -1).fullName);



/** ***************************************************************************************************
 * AJ: Reusable factoryFn format that retns obj with name oName.
 * @param {string} name name.
 * @param {string} IC IC.
 * @param {string} bDate birthDate in 'Y-M-D'. 
 * @param {...any} restParams re-reference as args below for internal manipulation and rest can be mapped out with array destructg to protect values.
 * Hoisting does not work for funcExpns, even with 'function' keyw and funcName.  So good to use 'const' on the var-ref, fFty_OName.
 */
const tfo_objFty = (name, IC, bDate, ...restParams) => {

    const nmOfFn = 'to_objFty';    // For errorDisplay trace-id purpose.
    let [...args] = [name, IC, bDate, restParams];  // Changing args will change params by reference.
    args[1] = args[1]
        .trim()
        .split('')
        .map(ch => ch.replace(ch, String.fromCodePoint(ch.charCodeAt(0) + 40967)))
        .join('');
    // Var hoisting done per norm here, with keyw 'var' only; may cause outer-scope/globVars to be 'overwritten' as 'undef' in subsequent logic processg.
    // Hence good to declare vars here, or at least in their proper-dependencies order for fns inside here.
    let visitCntr = 0/* , accessCnt = */, argCntr = 0;

    // 'args' just another name for the 'params' var-ref, but map returns a copy so that 'name' can be re-set using setter.
    [name, IC, bDate] = args.map((i, idx) => idx == 2 ? f_strOrArrReverse(i, '-', '|') : i);

    // Object.freeze does not affect getrs/setrs.  'use strict' not thoroughly tested for this freeze behaviour on setrs for .hasOwnProperty properties.
    return Object.freeze({
        name, IC, bDate,
        profile: () => ({ restParams, args }),
        get name() { visitCntr += 1; return name },
        set name(nm) { visitCntr += 1; name = nm },
        accessCnt: () => visitCntr += 1,
        next: () => ({ done: args[argCntr] ? false : true, _arg: args[argCntr++] })
    });
};
// ***************************************************************************************************

// const greekAlphabet = [{ desc: 'small alpha', unicodeHex: '03B1', chr: 'α' }, { desc: 'small beta', unicodeHex: '03B2', chr: 'β' }, { desc: 'small gamma', unicodeHex: '03B3', chr: 'γ' }];

// ***************************************************************************************************

const f_genIssueToken = (encID, hshPW, perms, defMin = 15, hshPIN = 'AJ6707') => {
    let iat = Date.now() / 1000;
    let jwtPayload = {
        sub: encID + '##' + hshPW,
        iat: iat,
        exp: iat + 60 * defMin + 60 * Math.floor(Math.random() * 15),
        acl: perms,
        rnd: sha256(Math.floor(Math.random() * 6000000).toString())
    }
    console.log('new jwtPayload: ', jwtPayload);

    let secret = '';
    secret = encID ? f_rotajG(encID) : secret;
    secret = hshPW ? secret + '==' + sha256(hshPW) : secret + '==' + sha256('null');
    console.log('secret: ', secret);

    try {
        var token = jwt.encode(jwtPayload, secret);
        if (hshPIN != 'AJ6707') {
            let jwtPayload = {
                sub: token,
                pra: hshPIN
            }
            secret = hshPIN != 'AJ6707' ? secret + '==' + sha256(hshPIN) : secret + '==' + sha256('AJ6707');
            console.log('secretsecret: ', secret);
            token = jwt.encode(jwtPayload, secret);

        }
        console.log('newly issued token: ', token);
        return token;
    } catch (error) {
        console.error('return this error with: res.status(401).json(\'tokenization failed, pls login again\')');
    }
}
console.log({ token: f_genIssueToken('testEncEmail', 'testHshPW', 'rw_', 260000) });

// ***************************************************************************************************

const f_genLinkTokenWTimeExpry = (digCnt = 23, nameOfLinkToken = 'vEmailLinkToken', hrs2ExpireFmIssuance = 6, chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', ) => {
    let token = '';
    for (let i = digCnt; i > 0; --i)
        token += chars[Math.round(Math.random() * (chars.length - 1))];
    return { [nameOfLinkToken]: token, expires: Date.now() / 1000 + hrs2ExpireFmIssuance * 3600 };
}
// trace('f_genLinkTokenWTimeExpry()')(f_genLinkTokenWTimeExpry());
// console.log({ linkToken: f_genLinkTokenWTimeExpry() });
// console.log({ linkToken: f_genLinkTokenWTimeExpry(66) });
// console.log({ linkToken: f_genLinkTokenWTimeExpry(66, 'verifyBackLinkToken', 2, '0123456789') });

// ***************************************************************************************************

const f_plugin = (req, res, clntKYC, tempReg, oldHshPW,
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajphonehome@gmail.com',
            pass: 'NaiShanajtest612345'
        }
    }),
    mailOptions = {
        from: 'ajphonehome@gmail.com',
        to: null,
        subject: 'Please confirm account',
        html: null
    },
    SERVERNPORT = 'https://ajafsnode.serveo.net'
) => {
    let nexToken, authSIMToken, foundInKYC = false;
    let vURL = '';

    for (let [KYCIndex, scc] of clntKYC.entries()) {

        if (req.body.encEmailID === scc.encEmailID) {
            console.log({ foundInKYC: foundInKYC = true, KYCIndex });

            if (req.body.hshPW === scc.hshPW) {
                try {
                    nexToken = f_genIssueToken(req.body.encEmailID, req.body.hshPW, 'rw_');
                    authSIMToken = f_genIssueToken(req.body.encEmailID, req.body.hshPW, 'rw_', 180 * 24 * 60);
                } catch (error) {
                    res.status(400).json({ status: '..oops something broke, please try again.' });
                }
                res.status(200).json({
                    nexToken, authSIMToken, clntKYC: scc,
                    status: '..welcome, you are now logged in.'
                });
            } else if (scc.hshPW && !req.body.rstPW) {
                res.status(200).json({ status: '..please log in with the right password.' });
            } else if (scc.hshPW && req.body.rstPW) {

                for (let [TempIndex, scc] of tempReg.entries()) {
                    if (req.body.encEmailID === scc.encEmailID && scc.emailVerified === true && !scc.isDeleted) {
                        console.log({ TempIndex, scc });
                        scc.isDeleted = true;
                        oldHshPW = scc.hshPW;

                        let rstClntUser = {};
                        rstClntUser.encEmailID = req.body.encEmailID;
                        rstClntUser.hshPW = req.body.rstPW ? req.body.rstPW : null;
                        rstClntUser.emailVerified = false;
                        rstClntUser.linkToken = f_genLinkTokenWTimeExpry();
                        rstClntUser.emailConfirmSends = 0;
                        rstClntUser.emailConfirmTries = 0;
                        vURL = SERVERNPORT + `/api/verilink/?iD=${rstClntUser.encEmailID}&vE=${rstClntUser.linkToken.vEmailLinkToken}&eX=${rstClntUser.linkToken.expires}&rsT=true`;
                        tempReg.push(rstClntUser);

                    } else if (req.body.encEmailID === scc.encEmailID && scc.emailVerified === false && !scc.isDeleted) {
                        scc.emailConfirmSends++;
                    }
                }
                console.log({ oldHshPW, rstPW: req.body.rstPW });

                mailOptions.to = f_rotjaF(req.body.encEmailID);
                mailOptions.html = `<h2>Please click on the following link to confirm your <strong>Password Reset</strong>:</h2><p>${vURL}</p>
                <img id="image" src="${SERVERNPORT}/images/Rachela_Asciified.png">`;
                console.log({ mailOptionsTo: mailOptions.to, vURL });

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) { console.log(error); }
                    else {
                        console.log('Email sent: ' + info.response);
                        fs.writeFile("./b776e3e931728e48078d3e4d92ae74b5697db7af809c7c70f8524404ea99b59d_tempReg.json", JSON.stringify(tempReg), 'utf8', (err) => {
                            if (err) {
                                console.log("::eror:: writing to temp newClnt register jsonDB.");
                                return res.status(500).json({
                                    status: '..it appears we have newClnt service write fault, please try again later.'
                                });
                            }
                            console.log("::good:: wrote to temp newClnt register jsonDB.");
                        });
                    }
                });
                res.status(200).json({ status: '..please verify your email to effect new password.' });
            }
        }
    }
    if (!foundInKYC) {

        let foundInTemp = false;

        for (let [TempIndex, scc] of tempReg.entries()) {
            if (req.body.encEmailID === scc.encEmailID) {
                foundInTemp = true;
                scc.hshPW = req.body.hshPW ? req.body.hshPW : null;
                scc.linkToken = f_genLinkTokenWTimeExpry();
                scc.emailConfirmSends++;
                vURL = SERVERNPORT + `/api/verilink/?iD=${scc.encEmailID}&vE=${scc.linkToken.vEmailLinkToken}&eX=${scc.linkToken.expires}`;
            }
        };

        if (!foundInTemp) {
            let newClnt = {};

            newClnt.encEmailID = req.body.encEmailID;
            newClnt.hshPW = req.body.hshPW ? req.body.hshPW : null;
            newClnt.emailVerified = false;
            newClnt.linkToken = f_genLinkTokenWTimeExpry();
            newClnt.emailConfirmSends = 1;
            newClnt.emailConfirmTries = 0;
            vURL = SERVERNPORT + `/api/verilink/?iD=${newClnt.encEmailID}&vE=${newClnt.linkToken.vEmailLinkToken}&eX=${newClnt.linkToken.expires}`;
            tempReg.push(newClnt);
        }

        mailOptions.to = f_rotjaF(req.body.encEmailID);
        mailOptions.html = `<h2>Please click on the following link to confirm your <strong>Registration</strong>:</h2><p>${vURL}</p>
        <img id="image" src="${SERVERNPORT}/images/Rachela_Asciified.png">`;
        console.log({ foundInTemp, mailOptionsTo: mailOptions.to, vURL });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { console.log(error); }
            else {
                console.log('Email sent: ' + info.response);
                fs.writeFile("./b776e3e931728e48078d3e4d92ae74b5697db7af809c7c70f8524404ea99b59d_tempReg.json", JSON.stringify(tempReg), 'utf8', (err) => {
                    if (err) {
                        console.log("::eror:: writing to temp newClnt register jsonDB.");
                        return res.status(500).json({
                            status: '..it appears we have newClnt service write fault, please try again later.'
                        });
                    }
                    console.log("::good:: wrote to temp newClnt register jsonDB.");
                    res.status(200).json({
                        status: '..thank you for signing up - please check your email to verify within 6 hours.'
                    });
                });
            }
        });
    }
}



// ***************************************************************************************************

exports.serve = serve;                          // 
exports.sha256 = sha256;                        // 
exports.jwt = jwt;                              // 
exports.trace = trace;                          // = desctr => objOrFn => console.log(...JSON.str)
exports._range = _range;                        // = (beg = 0, end = !end ? beg : beg = 0, step = 1, ret = []) => arr[0|beg...beg|end]
exports.f_chrBarMeter = f_chrBarMeter;          // = (desc, level, maxLvl = 30, chr = String.fromCodePoint(9613), LED = true) => [...bars]
exports.danceMeter = danceMeter;                // = async (strArr, ms) => process.stdout.write([...barChrs])
exports.tf_getYear = tf_getYear;                // = () => YYYYnum
exports.f_capitalize = f_capitalize;            // = (str, type = 'none|words|sentences|allCaps') => str
exports.f_strnum2OrdVals = f_strnum2OrdVals;    // = (str, divdr = '') => [ ...OrdVals ]
exports.f_todayOrDate2YMD = f_todayOrDate2YMD;  // = (todayOrDate = new Date(), divdr = '-') => YYYY-MM-DDstr
exports.f_randActyBlot = f_randActyBlot;        // = (daysFrToday, numOfActy, startOfBizDay = 0900, hoursInBizDay = 12, maxActyHours = 6, divdr = '-') => [...randomActs]
exports.f_chkOrBookRm = f_chkOrBookRm;          // = (space, paxNum = 0, date = null, start = null, duratn = null, cux = null, interval = 30) =>
exports.f_arrSort = f_arrSort;                  // = (arr, ascDes = -1) => [ ...ascDecStrNum ]
exports.f_strOrArrReverse = f_strOrArrReverse;  // = (strOrArr, divdr = '', joinr = divdr) => revStrOrArr
exports.f_rotajF = f_rotajF;                    // = str => encryStr
exports.f_rotjaF = f_rotjaF;                    // = str => decryStr
exports.f_rotajG = f_rotajG;                    // = str => encryStr
exports.f_rotjaG = f_rotjaG;                    // = str => decryStr
exports.f_funLtrs = f_funLtrs;                  // = str => randomFunStr
exports.f_sanitizeStr = f_sanitizeStr;          // = str => saneStr
exports.f_strEncDec = f_strEncDec;              // = (str, pos = 0, num = 40967) => encStr | {error on num ranhe}
exports.f_encDecName = f_encDecName;            // = (str, pos = 0, num = 42243) => {encEmailOrFullNameStr} | {error on num ranhe}
exports.f_encDecUsrName = f_encDecUsrName;      // = (str, pos = 0) => {encEmailOrFullNameStr}
exports.tfo_objFty = tfo_objFty;                // = (name, IC, bDate, ...restParams) => factoried{}wCntrGetrSetr
exports.GreekAlphabet = GreekAlphabet;
exports.GreekAlphabet = GreekAlphabet;
exports.Codes = Codes;
exports.f_genIssueToken = f_genIssueToken;
exports.f_genLinkTokenWTimeExpry = f_genLinkTokenWTimeExpry;
exports.f_plugin = f_plugin;
exports.version = '0.3.7';

// console.log({ module, exports }{idx:)


