var CryptoJS = require('crypto-js')

var chapterImages = "V68kIvPELO62rMqiJI6jLeg3JspfZ+gdbbaBVojBh2I89u90yrVKma+fDPDvWMQZK9/mAG12Y4+YA/r27N4H1kZ8i3OXPf7egO3BN6ACISCncK/eOrUWpnnxbvThuILgVykhHqAftLfVUD50/fdzUddiO3V4rflXgZKxCHoBg+LF+n42fvUbwWYGp/4N86drgV1TUkhhQyXCYsrP3674E8SRk81SGqZFDBY0Gm8KV6xrhaVkEMCxdJGyUiOAXFlwGlR8EUVIgRZcqofiyvPVtXb6ektvDbQaIgifGlhOiNcoPn5hoj9L23cChXTHVwzukU/Ga3ggEHITDm99xnb7zjgtMXYQ94I7EZtYkdqLduTFWFdtkfmRW76LoEE/OCSKNJeiiheNvRfw7upn0yy1LmX0q/6zf7pDjmM+wcRvRRMkMYnfnhHPlA/3FNDFK5YFWwN1/FTjxfvcfdgzYCKCacFNfJjcMhFaH8umkMIcsybFcNUGPqPRh1myPt5rlLN79VBFqON8yWYmyDhK0zrvBdU56ZRgTTgckKOZWNXeXkt4p2ZxwDZqB3rOJwbdoMfkETRVCdHi/GfeeR7u+/AzwPcbtk83lTLq7uxMQSc2B/+WgP1X/Zz2z5pmGmrl2j0X2aWpUdKxraSxg71IL1zkZIcCKdHirtMfroP0q6ojb/9tYtNeIXRRTTBx2nODnicT9oksXXFmtDaCYhAXadAkjcn1iHlCPEY6FltPNxpZJoQhc/ODWL229yO4OfWToTqiEhugVOXEIqm5pwsnekzLEkd6bO1prl4akfY6Cnm7rJjTKrXoaeY1i3efwziiOl0cKddLCnrqld7BAr2YYdhFg1Z+Evq+q/S4QptyrtQED1GMhfOpPOO0OVNVKAYlTkl1/yWNH/sNY+ioOIZ4zDJjTRws8aPXO316/pW1HIhQhOXVHRHcjkM0r2srvfF33Se3pE2BejNPqTzs1bUxXl0aKe4pVAqVycKj6yjcLOqCfqc8xZTWpXLjNjVcvJfoeMyXObB51OAKank2VJ3naDoXN1kP6yu2BRPRx9FfpRuk8jBC9DpLE4nFbcpZRuEIysExx72pR4xqg4v0G8h7LMgnjYj7F5RL/ii5RrupOwbVqKX36G1lof6GnMVxkzl7huiQ5c90YHTTgJcR9DEzQjTZRCIsg7O/O9aZeV+FFkzEEJr3YUcKj30jY/v5FwzRSputMiDRz501beD894S2tHmvsCSW2c+g6ixO0B1NO/O5C44W4ph0yJC6OyKdjaorXmLZyXfUeYrDVxe7m8z9MlJ+cfXXKuCy8uRb3R/ShW8UvkhWd+bEyPFC1dZtlSYGvI0FcD0OmnFEALqQy4Z76flfN0BMvcHLdr5ELbYn+PFppo769uu70QChZm+rYMVYRb0Hijf4/gmARPdpkF3byncIkiMbhJ/4aaIgkPEogRjj8LPH1tBzV+w4FvhIjoy52tNMuvcd++VAtQn4nJbpJxha52wNAs59zOE+eK7iCHJSTDfcYDxrRHsSElKgDZMs/R7U6jtuZu3p8GiP5isOUfVBl4K3OFTx2D4vFMaGRPXc/o4bSSn7I56JmDigyIZhbvF46KZnY1mpKwg6BKqHrFTOPn93YPy5nxg9BG13YF4m9riehRjIbp8aCRV+6Tl+lzjOPkZMYQSw5uliUvd8y9cs3RAwu7dIzrCzlIwpf6a7zh/OxbYAKRSwBzLapQRu3LbzvqSm9ep6pTutmOIyS6dLYfeerFEqbHak8I0v2bWoAKiA6AX6jk44913Chq0WEXyHDsdJ+dTrYDtfwKvX7Lc9YD2Gq3CtWaINGn2lj+nEZjPzyoNxrnwGCvkt+NEb+bje5LH5YUVn5E+W7HeIBvdFacN6XkbtpkyENc8cvsXT0yTQD9n6jXuixev0OyrVLib4WAx8ZYuT59k5SZJ3Nn7Gj5mDFwXJGzUXuwLN/iyhrXUHuCKQrH+Xneg/XfhtkAaCQgEmjMIJi1cVZaTjT+3xV6U+7uvCMgaViYrBV/WKHSbAS2MMsBEOLmIjsRNl6cGaHp6o0P/U1+6eQzdF9V1DICW7zDuMl3U5bZgOduS1cdiksCjEyFATCFTeRsyERszW8f2uaQFCk4HeatLtnh342hei6ldf2QlDrOw5il1/XCmgiFrNN/lglzLsXMwHlkrphYgLRXOGeRx1Tj9MVmj4ksKIKKaRHdCgLX9Pjmpt11EVaRon9RjEJBDNc/DVs9U6Jq4w4bwMeTdoA9amwTBNkg==";var chapterPath = "images/comic/4/7900/";var chapterPrice = 0;var chapterCanRead = 1;var pageTitle = "进击的巨人01话 - 谏山创 - 连载中";var comicUrl = "https://www.manhuafen.com/comic/39/";var pageUrl = "https://www.manhuafen.com/comic/39/";var pageImage = "https://c.wstts.com/images/cover/201810/15391165129WGophC1Qxvw-Z-u.jpg";var pageDomain = "https://www.manhuafen.com";var pageId = "comic.39";var prevChapterData = {"id":null,"comic_id":null,"comic_name":null,"status":null,"vip":null,"is_end":null,"name":null,"type":null,"rtl":null,"image_mode":null,"category":null,"link":null,"link_name":null,"image_type":null,"count":null,"sort":null,"price":null,"created_at":null,"updated_at":null,"uri":"","url":"https:\/\/www.manhuafen.com\/"};var nextChapterData = {"id":7901,"comic_id":39,"comic_name":"进击的巨人","status":1,"vip":0,"is_end":0,"name":"02话","type":0,"rtl":0,"image_mode":0,"category":1,"link":"","link_name":"","image_type":0,"count":41,"sort":999,"price":0,"created_at":1539140517,"updated_at":1539169074,"uri":"\/comic\/39\/7901.html","url":"https:\/\/www.manhuafen.com\/comic\/39\/7901.html"};

var _0xodF = 'jsjiami.com.v6';
var _0x5929 = [_0xodF, 'worDuhY=', 'wqBLAMKg', 'ecOVw63DjUctdMK7woc6WSrDvzXDqCY=', 'U8O9A8KNC34nwq12XsKHOyLDjMOJPg==', 'wrIzworCh8OU', 'FcOEwoY=', 'w7dtwpxi', 'wrRWw5hdQQ==', 'fRjCmA==', 'wqHCrcK2wrg=', 'woIBwqU=', 'bcOOw6A2cA==', 'OMOfwrLDsWvDnBbCrg==', 'w7BxwoFwwrA/W8OYwr/DhF8=', 'wr/CpMKywpof', 'w4sfJ0fCmmnDnUw=', 'CjOtsjtiMfAFaHfmiP.uIVcoPm.Evq6=='];
(function(h, i, j) {
	var k = function(a, b, c, d, e) {
			b = b >> 0x8, e = 'po';
			var f = 'shift';
			var g = 'push';
			if (b < a) {
				while (--a) {
					d = h[f]();
					if (b === a) {
						b = d;
						c = h[e + 'p']()
					} else if (b && c.replace(/[COttMfAFHfPuIVPEq=]/g, '') === b) {
						h[g](d)
					}
				}
				h[g](h[f]())
			}
			return 0x50c5d
		};
	return k(++i, j) >> i ^ j
}(_0x5929, 0x123, 0x12300));
var _0x56a0 = function(k, l) {
		k = ~~'0x'.concat(k);
		var m = _0x5929[k];
		if (_0x56a0.sqcQKf === undefined) {
			(function() {
				var d = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
				var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
				d.atob || (d.atob = function(a) {
					var b = String(a).replace(/=+$/, '');
					for (var c = 0x0, _0x1e9e81, _0x292610, _0x151bd2 = 0x0, _0x558098 = ''; _0x292610 = b.charAt(_0x151bd2++);~_0x292610 && (_0x1e9e81 = c % 0x4 ? _0x1e9e81 * 0x40 + _0x292610 : _0x292610, c++ % 0x4) ? _0x558098 += String.fromCharCode(0xff & _0x1e9e81 >> (-0x2 * c & 0x6)) : 0x0) {
						_0x292610 = e.indexOf(_0x292610)
					}
					return _0x558098
				})
			}());
			var n = function(a, b) {
					var c = [];
					var d = 0x0;
					var e;
					var f = '';
					var g = '';
					a = atob(a);
					for (var h = 0x0, _0x432180 = a.length; h < _0x432180; h++) {
						g += '%' + ('00' + a.charCodeAt(h).toString(0x10)).slice(-0x2)
					}
					a = decodeURIComponent(g);
					for (var i = 0x0; i < 0x100; i++) {
						c[i] = i
					}
					for (i = 0x0; i < 0x100; i++) {
						d = (d + c[i] + b.charCodeAt(i % b.length)) % 0x100;
						e = c[i];
						c[i] = c[d];
						c[d] = e
					}
					i = 0x0;
					d = 0x0;
					for (var j = 0x0; j < a.length; j++) {
						i = (i + 0x1) % 0x100;
						d = (d + c[i]) % 0x100;
						e = c[i];
						c[i] = c[d];
						c[d] = e;
						f += String.fromCharCode(a.charCodeAt(j) ^ c[(c[i] + c[d]) % 0x100])
					}
					return f
				};
			_0x56a0.tnFfgL = n;
			_0x56a0.YSQvEy = {};
			_0x56a0.sqcQKf = !! []
		}
		var o = _0x56a0.YSQvEy[k];
		if (o === undefined) {
			if (_0x56a0.xBRLfg === undefined) {
				_0x56a0.xBRLfg = !! []
			}
			m = _0x56a0.tnFfgL(m, l);
			_0x56a0.YSQvEy[k] = m
		} else {
			m = o
		}
		return m
	};

function decrypt20180904(a, b, c, d) {
	var e = {
		feYHK: _0x56a0('0', 'P%]h')
	};
	var f = '0|8|2|1|4|6|3|7|5' [_0x56a0('1', 'ChmO')]('|');
	var g = 0x0;
	while ([]) {
		switch (f[g++]) {
		case '0':
			var h = CryptoJS[_0x56a0('2', '0g8y')][_0x56a0('3', 'nDQ$')][_0x56a0('4', '@(*4')](e.feYHK);
			continue;
		case '1':
			console[_0x56a0('5', 'FWtY')](i);
			continue;
		case '2':
			var i = CryptoJS.AES.decrypt(chapterImages, h, {
				iv: k,
				mode: CryptoJS[_0x56a0('6', 'b5CR')][_0x56a0('7', 'ChmO')],
				padding: CryptoJS.pad[_0x56a0('8', 'wU&N')]
			});
			continue;
		case '3':
			;
			continue;
		case '4':
			var j = i[_0x56a0('9', '^Qj9')](CryptoJS[_0x56a0('2', '0g8y')].Utf8);
			continue;
		case '5':
			continue;
			SinTheme[_0x56a0('a', 'K22D')](a, b, c, d);
		case '6':
			chapterImages = JSON[_0x56a0('b', '&xIv')](j[_0x56a0('c', '3@EJ')]());
			continue;
		case '7':
			continue;
			SinMH.initChapter(a, b, c, d);
		case '8':
			var k = CryptoJS[_0x56a0('d', 'I70k')][_0x56a0('e', 'vRBj')][_0x56a0('b', '&xIv')](_0x56a0('f', 'VMQu'));
			continue
		}
		break
	}
};
_0xodF = 'jsjiami.com.v6'

var str =  'decrypt20180904(7900,"01话",39,"进击的巨人")';
eval(str)
console.log(chapterImages)