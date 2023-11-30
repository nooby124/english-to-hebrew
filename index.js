document.getElementById('convert').onclick = function() {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ',', '.', ';', '/']
    var lettersh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var msgvalue = document.getElementById("msg").value
    var msgvaluesplit = msgvalue.split("")
    var a = msgvalue.replaceAll("a", "ש")
    var b = a.replaceAll("b", "נ")
    var c = b.replaceAll("c", "ב")
    var d = c.replaceAll("d", "ג")
    var e = d.replaceAll("e", "ק")
    var f = e.replaceAll("f", "כ")
    var g = f.replaceAll("g", "ע")
    var h = g.replaceAll("h", "י")
    var i = h.replaceAll("i", "ן")
    var j = i.replaceAll("j", "ח")
    var k = j.replaceAll("k", "ל")
    var l = k.replaceAll("l", "ך")
    var m = l.replaceAll("m", "צ")
    var n = m.replaceAll("n", "מ")
    var o = n.replaceAll("o", "ם")
    var p = o.replaceAll("p", "פ")
    var q = p.replaceAll("q", "/")
    var r = q.replaceAll("r", "ר")
    var s = r.replaceAll("s", "ד")
    var t = s.replaceAll("t", "א")
    var u = t.replaceAll("u", "ו")
    var v = u.replaceAll("v", "ה")
    var w = v.replaceAll("w", "'")
    var x = w.replaceAll("x", "ס")
    var y = x.replaceAll("y", "ט")
    var z = y.replaceAll("z", "ז")
    var z1 = z.replaceAll(";", "ף")
    var z2 = z1.replaceAll(",", "ת")
    var z3 = z2.replaceAll(".", "ץ")
    var z4 = z3.replaceAll("'", ',')
    var z5 = z4.replaceAll("/", ".")
    if (z5 == '') {
        document.getElementById('end').innerHTML = "you didnt enter any text"
        return
    }
    document.getElementById('end').innerHTML = "that is: " + z5
};