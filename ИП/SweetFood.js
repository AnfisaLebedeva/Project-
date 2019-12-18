var inp = document.getElementsByClassName('lightbox1');
for (var i = 0; i < inp.length; i++) {
  inp[i].onclick = function() {
    document.documentElement.style.overflow=(this.checked ? 'hidden' : 'auto');
    document.documentElement.style.marginRight=(this.checked ? '17px' : '');
  }
}

script ="text/javascript"
function BlogGood()
{location.href='Безе.html'}


$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});

$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


$(document).ready(function(){
$(".imgblock").click(function(){
  $("#panel").slideDown("slow");
});
});

var minlen = 3; // минимальная длина слова
 var paddingtop = 30; // отступ сверху при прокрутке
 var scrollspeed = 200; // время прокрутки
 var keyint = 1000;

 function dosearch() {
  term = jQuery('#spterm').val();
  jQuery('span.highlight').each(function(){ //удаляем старую подсветку
   jQuery(this).after(jQuery(this).html()).remove();  
  });
  var t = '';
  jQuery('div.entry-content').each(function(){ // в селекторе задаем область поиска
   jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>')); // выделяем найденные фрагменты
   n = jQuery('span.highlight').length; // количество найденных фрагментов
   console.log('n = '+n);
   if (n==0)
    jQuery('#spresult').html('Ничего не найдено');
   else
    jQuery('#spresult').html('Результатов: '+n); 
  });
 }

jQuery('#spterm').keyup(function(){
  if (jQuery('#spterm').val()!=term) // проверяем, изменилась ли строка
   if (jQuery('#spterm').val().length>=minlen) { // проверяем длину строки
    dosearch(); // если все в порядке, приступаем к поиску
   }
   else
    jQuery('#spresult').html(' '); // если строка короткая, убираем текст из DIVа с результатом 
 });
 
//let get = window.location.href.split('?');
//if(get[1]=='imgblock'){
 //   document.getElementsByClassName('imgblock')[0].style.display = 'block';
//}