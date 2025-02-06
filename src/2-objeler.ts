// "Movie" türünü, aşağıdaki iki değişkenin doğru şekilde tür almasını sağlayacak şekilde
// tanımlayalım. "originalTitle" opsiyonel olsun


// interface Movie {
// Kodumuzu buraya yazıp interface'in yorum satırlarını kaldıralım...
//}

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};

const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};


// "getProfit"  isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre
// olarak bir film alsın ve bu filmin worldwide gross (dünya çapındaki brüt hasılatı)
// ile budget (bütçesi) arasındaki farkı döndürsün. Bu farka "profit" yani kâr deniyor.

// Örnekler:
// getProfit(dune) --> 235671789
// getProfit(cats) --> -21166652


// Kodu buraya yazalım...