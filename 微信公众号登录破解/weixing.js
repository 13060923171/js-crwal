function d(n, l) {
var e = (65535 & n) + (65535 & l);
return (n >> 16) + (l >> 16) + (e >> 16) << 16 | 65535 & e
}
function r(n, l, e, t, u, i) {
return d((o = d(d(l, n), d(t, i))) << (r = u) | o >>> 32 - r, e);
var o, r
}
function p(n, l, e, t, u, i, o) {
return r(l & e | ~l & t, n, l, u, i, o)
}
function f(n, l, e, t, u, i, o) {
return r(l & t | e & ~t, n, l, u, i, o)
}
function h(n, l, e, t, u, i, o) {
return r(l ^ e ^ t, n, l, u, i, o)
}
function g(n, l, e, t, u, i, o) {
return r(e ^ (l | ~t), n, l, u, i, o)
}
function a(n, l) {
n[l >> 5] |= 128 << l % 32,
n[14 + (l + 64 >>> 9 << 4)] = l;
var e, t, u, i, o, r = 1732584193,
a = -271733879,
s = -1732584194,
c = 271733878;
for (e = 0; e < n.length; e += 16) r = p(t = r, u = a, i = s, o = c, n[e], 7, -680876936),
c = p(c, r, a, s, n[e + 1], 12, -389564586),
s = p(s, c, r, a, n[e + 2], 17, 606105819),
a = p(a, s, c, r, n[e + 3], 22, -1044525330),
r = p(r, a, s, c, n[e + 4], 7, -176418897),
c = p(c, r, a, s, n[e + 5], 12, 1200080426),
s = p(s, c, r, a, n[e + 6], 17, -1473231341),
a = p(a, s, c, r, n[e + 7], 22, -45705983),
r = p(r, a, s, c, n[e + 8], 7, 1770035416),
c = p(c, r, a, s, n[e + 9], 12, -1958414417),
s = p(s, c, r, a, n[e + 10], 17, -42063),
a = p(a, s, c, r, n[e + 11], 22, -1990404162),
r = p(r, a, s, c, n[e + 12], 7, 1804603682),
c = p(c, r, a, s, n[e + 13], 12, -40341101),
s = p(s, c, r, a, n[e + 14], 17, -1502002290),
r = f(r, a = p(a, s, c, r, n[e + 15], 22, 1236535329), s, c, n[e + 1], 5, -165796510),
c = f(c, r, a, s, n[e + 6], 9, -1069501632),
s = f(s, c, r, a, n[e + 11], 14, 643717713),
a = f(a, s, c, r, n[e], 20, -373897302),
r = f(r, a, s, c, n[e + 5], 5, -701558691),
c = f(c, r, a, s, n[e + 10], 9, 38016083),
s = f(s, c, r, a, n[e + 15], 14, -660478335),
a = f(a, s, c, r, n[e + 4], 20, -405537848),
r = f(r, a, s, c, n[e + 9], 5, 568446438),
c = f(c, r, a, s, n[e + 14], 9, -1019803690),
s = f(s, c, r, a, n[e + 3], 14, -187363961),
a = f(a, s, c, r, n[e + 8], 20, 1163531501),
r = f(r, a, s, c, n[e + 13], 5, -1444681467),
c = f(c, r, a, s, n[e + 2], 9, -51403784),
s = f(s, c, r, a, n[e + 7], 14, 1735328473),
r = h(r, a = f(a, s, c, r, n[e + 12], 20, -1926607734), s, c, n[e + 5], 4, -378558),
c = h(c, r, a, s, n[e + 8], 11, -2022574463),
s = h(s, c, r, a, n[e + 11], 16, 1839030562),
a = h(a, s, c, r, n[e + 14], 23, -35309556),
r = h(r, a, s, c, n[e + 1], 4, -1530992060),
c = h(c, r, a, s, n[e + 4], 11, 1272893353),
s = h(s, c, r, a, n[e + 7], 16, -155497632),
a = h(a, s, c, r, n[e + 10], 23, -1094730640),
r = h(r, a, s, c, n[e + 13], 4, 681279174),
c = h(c, r, a, s, n[e], 11, -358537222),
s = h(s, c, r, a, n[e + 3], 16, -722521979),
a = h(a, s, c, r, n[e + 6], 23, 76029189),
r = h(r, a, s, c, n[e + 9], 4, -640364487),
c = h(c, r, a, s, n[e + 12], 11, -421815835),
s = h(s, c, r, a, n[e + 15], 16, 530742520),
r = g(r, a = h(a, s, c, r, n[e + 2], 23, -995338651), s, c, n[e], 6, -198630844),
c = g(c, r, a, s, n[e + 7], 10, 1126891415),
s = g(s, c, r, a, n[e + 14], 15, -1416354905),
a = g(a, s, c, r, n[e + 5], 21, -57434055),
r = g(r, a, s, c, n[e + 12], 6, 1700485571),
c = g(c, r, a, s, n[e + 3], 10, -1894986606),
s = g(s, c, r, a, n[e + 10], 15, -1051523),
a = g(a, s, c, r, n[e + 1], 21, -2054922799),
r = g(r, a, s, c, n[e + 8], 6, 1873313359),
c = g(c, r, a, s, n[e + 15], 10, -30611744),
s = g(s, c, r, a, n[e + 6], 15, -1560198380),
a = g(a, s, c, r, n[e + 13], 21, 1309151649),
r = g(r, a, s, c, n[e + 4], 6, -145523070),
c = g(c, r, a, s, n[e + 11], 10, -1120210379),
s = g(s, c, r, a, n[e + 2], 15, 718787259),
a = g(a, s, c, r, n[e + 9], 21, -343485551),
r = d(r, t),
a = d(a, u),
s = d(s, i),
c = d(c, o);
return [r, a, s, c]
}
function s(n) {
var l, e = "";
for (l = 0; l < 32 * n.length; l += 8) e += String.fromCharCode(n[l >> 5] >>> l % 32 & 255);
return e
}
function c(n) {
var l, e = [];
for (e[(n.length >> 2) - 1] = void 0, l = 0; l < e.length; l += 1) e[l] = 0;
for (l = 0; l < 8 * n.length; l += 8) e[l >> 5] |= (255 & n.charCodeAt(l / 8)) << l % 32;
return e
}
function t(n) {
var l, e, t = "0123456789abcdef",
u = "";
for (e = 0; e < n.length; e += 1) l = n.charCodeAt(e),
u += t.charAt(l >>> 4 & 15) + t.charAt(15 & l);
return u
}
function u(n) {
return unescape(encodeURIComponent(n))
}
function i(n) {
return s(a(c(l = u(n)), 8 * l.length));
var l
}
function o(n, l) {
return function(n, l) {
    var e, t, u = c(n),
    i = [],
    o = [];
    for (i[15] = o[15] = void 0, 16 < u.length && (u = a(u, 8 * n.length)), e = 0; e < 16; e += 1) i[e] = 909522486 ^ u[e],
    o[e] = 1549556828 ^ u[e];
    return t = a(i.concat(c(l)), 512 + 8 * l.length),
    s(a(o.concat(t), 640))
} (u(n), u(l))
}
function exports(n, l, e) {
return l ? e ? o(l, n) : t(o(l, n)) : e ? i(n) : t(i(n))
}
function GetPass(P) {
return exports(P);
}