/* Flows the blocks inside #flow-src onto US Letter pages so nothing is clipped, in the browser and in print. */
document.addEventListener('DOMContentLoaded', function () {
  var src = document.getElementById('flow-src'), out = document.getElementById('flow-out');
  if (!src || !out) return;
  var label = src.getAttribute('data-label') || '';
  var mast = src.querySelector('.mast-tpl').innerHTML;
  var blocks = Array.prototype.slice.call(src.querySelector('.blocks').children);
  var units = [];
  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i], n = blocks[i + 1];
    if (/^H[1-3]$/.test(b.tagName) && n && !/^H[1-3]$/.test(n.tagName)) {
      var w = document.createElement('div'); w.appendChild(b); w.appendChild(n); units.push(w); i++;
    } else units.push(b);
  }
  var MAXH = 870, pages = [];
  function newPage() {
    var s = document.createElement('section'); s.className = 'page';
    s.innerHTML = '<div class="mast">' + mast + '</div><div class="content"></div><div class="foot"><span>Training simulation. All people, businesses and events are fictional.</span><span class="pn"></span></div>';
    out.appendChild(s); pages.push(s); return s;
  }
  function used(s) {
    var c = s.querySelector('.content'), last = c.lastElementChild;
    return last ? last.getBoundingClientRect().bottom - c.getBoundingClientRect().top : 0;
  }
  var cur = newPage();
  units.forEach(function (u) {
    cur.querySelector('.content').appendChild(u);
    if (used(cur) > MAXH && cur.querySelector('.content').children.length > 1) {
      cur = newPage(); cur.querySelector('.content').appendChild(u);
    }
  });
  pages.forEach(function (p, i) {
    p.querySelector('.pn').textContent = label + (pages.length > 1 ? ' · p.' + (i + 1) + '/' + pages.length : '');
  });
  src.parentNode.removeChild(src);
});
