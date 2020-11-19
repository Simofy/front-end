let list = [
  'abbr',
  'address',
  'b',
  'blockquote',
  'cite',
  'code',
  'del',
  'dfn',
  'em',
  'i',
  'ins',
  'kbd',
  'mark',
  'meter',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'small',
  'strong',
  'sub',
  'sup',
  'template',
  'time',
  'u',
  'var',
  'wbr'
];
let res = '';
for (let i = 0; i < list.length; i += 1) {
  res += `
<div>
    (TAG ${list[i]}) Text before
    <${list[i]}>Tag ${list[i]}</${list[i]}>
    text after
</div>
`
}
