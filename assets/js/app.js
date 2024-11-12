// Menü açma
document.querySelector(".bar").addEventListener("click", function (event) {
    document.querySelector(".menuBar").classList.add("active");
    event.stopPropagation(); // Tıklama olayını burada durdurarak diğer olaylara geçmesini engelleriz
  });
  
  // Menü kapatma - Çıkış ikonuna tıklayınca
  document.querySelector(".exit").addEventListener("click", function (event) {
    document.querySelector(".menuBar").classList.remove("active");
    event.stopPropagation(); // Çıkışa tıklama olayını yayılmasını önler
  });
  
  // Menü kapatma - Ekranın herhangi bir yerine tıklayınca
  document.addEventListener("click", function () {
    const menu = document.querySelector(".menuBar");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
  
  // Menü içindeki tıklamaların menüyü kapatmaması için
  document.querySelector(".menuBar").addEventListener("click", function (event) {
    event.stopPropagation();
  });
  
  