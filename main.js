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

    const params = {
        'f.Language': 3510,
        'f.Status': 'AC', // WA, TLE, MLE, RE, CE, QLE, OLE, IE, WJ, WR, Judging
        'orderBy': 'source_length', // score, time_consumption, memory_consumption
        // 'f.Task': '',
        // 'f.User': '',
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
