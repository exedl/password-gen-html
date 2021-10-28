let chars_u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let chars_l = 'abcdefghijklmnopqrstuvwxyz';
let ints = '0123456789';
let spec = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function generate(nubmers, symbols, uppercase, Lowercase, length) {
  var alph = '';

  if (nubmers)
    alph += String(ints); //use nubmers
  if (symbols)
    alph += spec; //use symbols
  if (uppercase)
    alph += chars_u; //use uppercase
  if (Lowercase)
    alph += chars_l; //use lowercase

  alph = alph.split('').sort(function(){return 0.5-Math.random()}).join(''); //shuffle string
  for (i=0; i<5; i++) {
    alph = String(alph); //javascript fix
    alph += alph.split('').sort(function(){return 0.5-Math.random()}).join(''); //shuffle string and concatenate
  }

  alph = alph.split('').sort(function(){return 0.5-Math.random()}).join(''); //shuffle string

  return alph.substring(0, length);
}

function _generate() {
  $('input[name="password"]').val(
    generate(
      $('input[name="numbers"]').prop('checked'),
      $('input[name="symbols"]').prop('checked'),
      $('input[name="uppercase"]').prop('checked'),
      $('input[name="lowercase"]').prop('checked'),
      $('#slider').val()
    )
  );
}