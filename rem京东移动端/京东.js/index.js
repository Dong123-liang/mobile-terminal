window.addEventListener("load",function(){
    /* 轮播图 */
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
            // 如果需要分页器
            pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        
        // 如果需要前进后退按钮
    /*     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }, */
      
      })

      /* 计时器 */

      var hour=document.querySelector("#hour");
      var min = document.querySelector("#min");
      var second = document.querySelector("#second");
      var settime = +new Date("2088-10-1 20:00:00");
      count();
      setInterval(count,1000);
      function count(){
       var  date = +new Date();
       var  numdate = (settime - date)/1000;
       var h = parseInt(numdate / 60 / 60 % 24);
       h = h<10?'0'+h:h;
       hour.innerHTML = h;
       var m = parseInt(numdate / 60 % 60);
       m = m<10?'0'+m:m;
       min.innerHTML = m;
       var s = parseInt(numdate % 60);
       s = s<10?'0'+s:s;
       second.innerHTML = s;
      }
})