$(document).ready(function () {
  let tabsItem = $('.tabs-item');
  
  tabsItem.on('click', function(event) {
    // убирает # doesn't go up
    event.preventDefault(); 
    let activeContent = $(this).attr('href');
    // если есть, давайте отключим класс visible
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    // появляется цвет при нажатии
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active'); 
  });
});