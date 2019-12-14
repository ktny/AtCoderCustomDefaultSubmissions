// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://atcoder.jp/contests/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

$(function() {
    'use strict';

    const lang = 'C++'; // langsの中からよく使用する言語に変更
    const langs = {
        'C++': 3003,
        'C#': 3006,
        'C': 3002,
        'Python3': 3023,
        'PyPy3': 3510,
        'Ruby': 3024,
        'Java': 3016,
        'JavaScript': 3017,
        'TypeScript': 3521,
        'PHP': 3524,
        'Haskell': 3014,
        'Go': 3013,
        'Scala': 3025,
        'Perl': 3020,
        'Swift': 3503,
        'Rust': 3504,
        'Kotlin': 3523
    };

    const params = {
        'f.Language': langs[lang],
        'f.Status': 'AC', // WA, TLE, MLE, RE, CE, QLE, OLE, IE, WJ, WR, Judging
        'orderBy': 'source_length', // score, time_consumption, memory_consumption
    };

    const esc = encodeURIComponent;
    const querystring = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    const $links = $('#contest-nav-tabs').find('a');
    $links.each(function() {
        const link = $(this).attr('href');
        if (link.endsWith('submissions')) {
            console.log(link);
            $(this).attr('href', `${link}?${querystring}`);
        }
    })
});
