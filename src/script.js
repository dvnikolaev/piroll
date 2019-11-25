$(document).ready(function(){
   var mas = [
       {
           "quote" : "Life isn’t about getting and having, it’s about giving and being.",
           "name": "Kevin Kruse"
       },
       {
           "quote" : "Whatever the mind of man can conceive and believe, it can achieve.",
           "name" : "Napoleon Hill"
       },
       {
           "quote" : "Strive not to be a success, but rather to be of value.",
           "name" : "Albert Einstein"
       }];

   var radio1 = $('#id1');
   var radio2 = $('#id2');
   var radio3 = $('#id3');
   var radio = $(".btn_radio");
   var testimonialText = $('.testimonials__text');
   var testimonialAuthor = $('.testimonials__author');

   if (radio1.checked){
        testimonialText.text(mas[0].quote);
   }

   radio.on('click', function(){
       if (radio1.is(":checked")){
           testimonialText.text(mas[0].quote);
           testimonialAuthor.text(mas[0].name);
       } else if (radio2.is(":checked")){
           testimonialText.text(mas[1].quote);
           testimonialAuthor.text(mas[1].name);
       } else if (radio3.is(":checked")){
           testimonialText.text(mas[2].quote);
           testimonialAuthor.text(mas[2].name);
       }
   });

   var nav = $('.nav');
    var logo = document.getElementsByClassName('navigation__logo')[0];

    logo.addEventListener('click', function(){
        this.classList.toggle('animate_add');
    });
});