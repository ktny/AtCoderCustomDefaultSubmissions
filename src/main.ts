// ==UserScript==
// @name         AtCoderCustomDefaultSubmissions
// @namespace    https://github.com/ktny
// @version      1.0
// @description  AtCoderのすべての提出をデフォルトで使用言語、ACで絞り込みコード長の昇順にする
// @author       ktnyori
// @license      MIT
// @include      https://atcoder.jp/contests/*
// ==/UserScript==

(function () {
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

    const params: {[key:string]: string|number} = {
        'f.Language': langs[lang],
        // AC, WA, TLE, MLE, RE, CE, QLE, OLE, IE, WJ, WR, Judging
        'f.Status': 'AC',
        // source_length, time_consumption, memory_consumption, score
        'orderBy': 'source_length',
    };

    const esc = encodeURIComponent;
    const querystring = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    const links = document.querySelectorAll('#contest-nav-tabs a');
    for (let i = 0; i < links.length; i++) {
        const href = links[i].getAttribute('href');
        if (href && href.endsWith('submissions')) {
            links[i].setAttribute('href', `${href}?${querystring}`);
        }
    }
})();
