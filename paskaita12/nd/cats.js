// "use strict";

// for(let i = 0; i < catList.length; i++){
//   const page = catList[i].thumbnail;
//   const image = Object.values(page)[0]?.pageimage;
//   fetch(`https://commons.wikimedia.org/w/api.php?action=query&titles=File:${image}&format=json&prop=imageinfo&iiprop=url`).then(response => response.json()).then(result => catList[i].imageUrl = result.query.pages)
//   }

const catListOld = [
  {
    "href": "https://en.wikipedia.org/wiki/American_Ringtail",
    "title": "American Ringtail"
  },
  {
    "href": "https://en.wikipedia.org/wiki/American_Shorthair",
    "title": "American Shorthair",
    "image": "File:14 years old american shorthair.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/14_years_old_american_shorthair.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/American_Wirehair",
    "title": "American Wirehair"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Cyprus_cat#Aphrodite_Giant",
    "title": "Cyprus cat"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Arabian_Mau",
    "title": "Arabian Mau",
    "image": "File:Arabian Mau.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Arabian_Mau.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Asian_cat",
    "title": "Asian cat"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Asian_Semi-longhair",
    "title": "Asian Semi-longhair",
    "image": "File:Tiffanie at cat show.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tiffanie_at_cat_show.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Burmese_cat",
    "title": "Burmese cat",
    "image": "File:Blissandlucky11.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/Blissandlucky11.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Australian_Mist",
    "title": "Australian Mist",
    "image": "File:Australian Mist.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Australian_Mist.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Abyssinian_cat",
    "title": "Abyssinian cat",
    "image": "File:Abykitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Abykitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siamese_cat",
    "title": "Siamese cat",
    "image": "File:1410624986-cats1-o.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/1410624986-cats1-o.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bambino_cat",
    "title": "Bambino cat"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Munchkin_cat",
    "title": "Munchkin cat",
    "image": "File:Longhairedmunchkin.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Longhairedmunchkin.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bengal_cat",
    "title": "Bengal cat",
    "image": "File:BEN Russicats White Angel (5274194975).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/BEN_Russicats_White_Angel_%285274194975%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Abyssinian_cat",
    "title": "Abyssinian cat",
    "image": "File:Abykitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Abykitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siamese_cat",
    "title": "Siamese cat",
    "image": "File:1410624986-cats1-o.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/1410624986-cats1-o.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Persian_cat",
    "title": "Persian cat",
    "image": "File:Blue Persian \"Gentian\".jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Blue_Persian_%22Gentian%22.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bombay_cat",
    "title": "Bombay cat",
    "image": "File:Close up of a black domestic cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/Close_up_of_a_black_domestic_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Brazilian_Shorthair",
    "title": "Brazilian Shorthair"
  },
  {
    "href": "https://en.wikipedia.org/wiki/British_Longhair",
    "title": "British Longhair",
    "image": "File:British Longhair - Blue Bicolor.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2a/British_Longhair_-_Blue_Bicolor.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/British_Shorthair",
    "title": "British Shorthair",
    "image": "File:BKH-kitten-blue.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/51/BKH-kitten-blue.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Burmese_cat",
    "title": "Burmese cat",
    "image": "File:Blissandlucky11.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/Blissandlucky11.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Burmilla",
    "title": "Burmilla",
    "image": "File:Burmilla1.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Burmilla1.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Burmese_cat",
    "title": "Burmese cat",
    "image": "File:Blissandlucky11.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/Blissandlucky11.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/California_Spangled",
    "title": "California Spangled",
    "image": "File:Star Spangled Cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Spangled_Cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Abyssinian_cat",
    "title": "Abyssinian cat",
    "image": "File:Abykitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Abykitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Tabby_cat",
    "title": "Tabby cat",
    "image": "File:Cat November 2010-1a.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Chartreux",
    "title": "Chartreux",
    "image": "File:IC Blue Melody Flipper CHA male EX1 CACIB.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Chausie",
    "title": "Chausie",
    "image": "File:ChausieA.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/06/ChausieA.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Abyssinian_cat",
    "title": "Abyssinian cat",
    "image": "File:Abykitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Abykitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Abyssinian_cat",
    "title": "Abyssinian cat",
    "image": "File:Abykitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Abykitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Cymric_cat",
    "title": "Cymric cat",
    "image": "File:CymricCatPerched.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/CymricCatPerched.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Cyprus_cat",
    "title": "Cyprus cat",
    "image": "File:Cyprus-Cat-Cape-Greco.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Cyprus-Cat-Cape-Greco.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Devon_Rex",
    "title": "Devon Rex",
    "image": "File:BlueDevonRex.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f2/BlueDevonRex.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Donskoy_cat",
    "title": "Donskoy cat",
    "image": "File:DSX World Premior RU*Don Xuk's Login WOW (14037189016).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/35/DSX_World_Premior_RU%2ADon_Xuk%27s_Login_WOW_%2814037189016%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Dragon_Li",
    "title": "Dragon Li",
    "image": "File:Dragon Li - Li Hua Mau1.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Dragon_Li_-_Li_Hua_Mau1.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/American_Curl",
    "title": "American Curl",
    "image": "File:ACL Pointocurl Fiorentina.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/ACL_Pointocurl_Fiorentina.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Egyptian_Mau",
    "title": "Egyptian Mau",
    "image": "File:Egy mau.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Egy_mau.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/European_Shorthair",
    "title": "European Shorthair",
    "image": "File:European Cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/European_Cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Exotic_Shorthair",
    "title": "Exotic Shorthair",
    "image": "File:Brown Exotic Shorthair Kitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Brown_Exotic_Shorthair_Kitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/American_Shorthair",
    "title": "American Shorthair",
    "image": "File:14 years old american shorthair.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/14_years_old_american_shorthair.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Foldex_cat",
    "title": "Foldex cat",
    "image": "File:Caribou from Wagon Trails.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Caribou_from_Wagon_Trails.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Exotic_Shorthair",
    "title": "Exotic Shorthair",
    "image": "File:Brown Exotic Shorthair Kitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Brown_Exotic_Shorthair_Kitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Havana_Brown",
    "title": "Havana Brown",
    "image": "File:Havana Brown - brown whiskers.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Havana_Brown_-_brown_whiskers.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siamese_cat",
    "title": "Siamese cat",
    "image": "File:1410624986-cats1-o.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/1410624986-cats1-o.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Himalayan_cat",
    "title": "Himalayan cat",
    "image": "File:8 week old female Himalayan Kitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/8_week_old_female_Himalayan_Kitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Persian_cat",
    "title": "Persian cat",
    "image": "File:Blue Persian \"Gentian\".jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Blue_Persian_%22Gentian%22.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Javanese_cat",
    "title": "Javanese cat",
    "image": "File:Javanese cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Javanese_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Balinese_cat",
    "title": "Balinese cat",
    "image": "File:Balinese blue lynx point.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Balinese_blue_lynx_point.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/African_wildcat",
    "title": "African wildcat",
    "image": "File:AfricanWildcat distribution.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b5/AfricanWildcat_distribution.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Khao_Manee",
    "title": "Khao Manee",
    "image": "File:Ka2.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Ka2.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Kinkalow",
    "title": "Kinkalow",
    "image": "File:Tinkerbella.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tinkerbella.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Dwarf_cat",
    "title": "Dwarf cat",
    "image": "File:Munchkin cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Munchkin_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Korat",
    "title": "Korat",
    "image": "File:Entrance-phimai.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Entrance-phimai.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Korean_Bobtail",
    "title": "Korean Bobtail"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Kurilian_Bobtail",
    "title": "Kurilian Bobtail"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Lambkin_(cat)",
    "title": "Lambkin (cat)"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Dwarf_cat",
    "title": "Dwarf cat",
    "image": "File:Munchkin cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Munchkin_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/LaPerm",
    "title": "LaPerm",
    "image": "File:BlackLaPerm.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/2/28/BlackLaPerm.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Lykoi",
    "title": "Lykoi",
    "image": "File:8-month-old male Lykoi.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/8-month-old_male_Lykoi.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Maine_Coon",
    "title": "Maine Coon",
    "image": "File:3dayMaineCoon.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/3dayMaineCoon.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Manx_cat",
    "title": "Manx cat",
    "image": "File:A Rumpy Manx Cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/A_Rumpy_Manx_Cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Mekong_Bobtail",
    "title": "Mekong Bobtail",
    "image": "File:Mekong bobtail (Thai bobtail). Chocolate point colour..jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/95/Mekong_bobtail_%28Thai_bobtail%29._Chocolate_point_colour..jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Minskin",
    "title": "Minskin",
    "image": "File:Minskin Kitten Female blue tabby color-pattern.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Minskin_Kitten_Female_blue_tabby_color-pattern.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Munchkin_cat",
    "title": "Munchkin cat",
    "image": "File:Longhairedmunchkin.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Longhairedmunchkin.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Minuet_cat",
    "title": "Minuet cat",
    "image": "File:Aardvark2 (PSF).png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/12/Aardvark2_%28PSF%29.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Persian_cat",
    "title": "Persian cat",
    "image": "File:Blue Persian \"Gentian\".jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Blue_Persian_%22Gentian%22.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Munchkin_cat",
    "title": "Munchkin cat",
    "image": "File:Longhairedmunchkin.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Longhairedmunchkin.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Dwarf_cat",
    "title": "Dwarf cat",
    "image": "File:Munchkin cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Munchkin_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Nebelung",
    "title": "Nebelung",
    "image": "File:Kemuri my bby.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Kemuri_my_bby.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Norwegian_Forest_cat",
    "title": "Norwegian Forest cat",
    "image": "File:18 Months old Norwegian forest cat..jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/18_Months_old_Norwegian_forest_cat..jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Ocicat",
    "title": "Ocicat",
    "image": "File:Chocolate-Spotted-Ocicat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Chocolate-Spotted-Ocicat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Abyssinian_cat",
    "title": "Abyssinian cat",
    "image": "File:Abykitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Abykitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Oregon_Rex",
    "title": "Oregon Rex"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Oriental_bicolour",
    "title": "Oriental bicolour",
    "image": "File:Oriental shorthair 20070130 caroline.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Oriental_shorthair_20070130_caroline.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Oriental_Longhair",
    "title": "Oriental Longhair",
    "image": "File:OLH-GIP Divan Cesar.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/OLH-GIP_Divan_Cesar.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Oriental_Shorthair",
    "title": "Oriental Shorthair",
    "image": "File:BlackWhiteOrientalShorthair.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/BlackWhiteOrientalShorthair.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Domestic_long-haired_cat",
    "title": "Domestic long-haired cat",
    "image": "File:Cat harness and leash.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/95/Cat_harness_and_leash.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Oriental_Shorthair",
    "title": "Oriental Shorthair",
    "image": "File:BlackWhiteOrientalShorthair.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/BlackWhiteOrientalShorthair.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/European_Shorthair",
    "title": "European Shorthair",
    "image": "File:European Cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/European_Cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siamese_cat",
    "title": "Siamese cat",
    "image": "File:1410624986-cats1-o.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/1410624986-cats1-o.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Persian_cat",
    "title": "Persian cat",
    "image": "File:Blue Persian \"Gentian\".jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Blue_Persian_%22Gentian%22.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Traditional_Persian",
    "title": "Traditional Persian",
    "image": "File:SnowyandHazy.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/SnowyandHazy.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Greater_Iran",
    "title": "Greater Iran",
    "image": "File:1753vaugondy.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/1753vaugondy.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Peterbald",
    "title": "Peterbald",
    "image": "File:Peterbald male Shango by Irina Polunina.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Peterbald_male_Shango_by_Irina_Polunina.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Donskoy_cat",
    "title": "Donskoy cat",
    "image": "File:DSX World Premior RU*Don Xuk's Login WOW (14037189016).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/35/DSX_World_Premior_RU%2ADon_Xuk%27s_Login_WOW_%2814037189016%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bobcat",
    "title": "Bobcat",
    "image": "File:Bobbie 2010 2.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Bobbie_2010_2.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Ragamuffin_cat",
    "title": "Ragamuffin cat",
    "image": "File:20050922AmarilloRes.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/20050922AmarilloRes.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Ragdoll_cat",
    "title": "Ragdoll cat"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Himalayan_cat",
    "title": "Himalayan cat",
    "image": "File:8 week old female Himalayan Kitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/8_week_old_female_Himalayan_Kitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Birman_cat",
    "title": "Birman cat"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Russian_Blue",
    "title": "Russian Blue",
    "image": "File:Cat Janna.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cat_Janna.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Russian_Blue",
    "title": "Russian Blue",
    "image": "File:Cat Janna.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cat_Janna.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Thai_cat",
    "title": "Thai cat",
    "image": "File:Ayutthaya cat 9999.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Ayutthaya_cat_9999.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Savannah_cat",
    "title": "Savannah cat",
    "image": "File:Savannah.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Savannah.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Cat",
    "title": "Cat",
    "image": "File:Black Cat (7983739954).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Black_Cat_%287983739954%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bone",
    "title": "Bone",
    "image": "File:603 Anatomy of Long Bone.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/603_Anatomy_of_Long_Bone.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Serengeti_cat",
    "title": "Serengeti cat",
    "image": "File:Aardvark2 (PSF).png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/12/Aardvark2_%28PSF%29.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bengal_cat",
    "title": "Bengal cat",
    "image": "File:BEN Russicats White Angel (5274194975).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/BEN_Russicats_White_Angel_%285274194975%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siamese_cat",
    "title": "Siamese cat",
    "image": "File:1410624986-cats1-o.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/1410624986-cats1-o.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Thai_cat",
    "title": "Thai cat",
    "image": "File:Ayutthaya cat 9999.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Ayutthaya_cat_9999.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siberian_cat",
    "title": "Siberian cat",
    "image": "File:1 Year old male Siberian cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/85/1_Year_old_male_Siberian_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Singapura_cat",
    "title": "Singapura cat",
    "image": "File:4Singapura.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/4Singapura.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Burmese_cat",
    "title": "Burmese cat",
    "image": "File:Blissandlucky11.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/Blissandlucky11.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/American_Shorthair",
    "title": "American Shorthair",
    "image": "File:14 years old american shorthair.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/14_years_old_american_shorthair.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Siamese_cat",
    "title": "Siamese cat",
    "image": "File:1410624986-cats1-o.png",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/1410624986-cats1-o.png"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Sokoke",
    "title": "Sokoke",
    "image": "File:Sokoke dalili.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Sokoke_dalili.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Somali_cat",
    "title": "Somali cat",
    "image": "File:Blue Somali kitten age 3 months.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Blue_Somali_kitten_age_3_months.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Sphynx_cat",
    "title": "Sphynx cat",
    "image": "File:2 Sphynx cats sleeping together.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/2_Sphynx_cats_sleeping_together.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Suphalak",
    "title": "Suphalak",
    "image": "File:SuphalakAyodia.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/SuphalakAyodia.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Thai_cat",
    "title": "Thai cat",
    "image": "File:Ayutthaya cat 9999.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Ayutthaya_cat_9999.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Korat",
    "title": "Korat",
    "image": "File:Entrance-phimai.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Entrance-phimai.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Tonkinese_cat",
    "title": "Tonkinese cat",
    "image": "File:Chatons tonkinois poil court lilac mink et lilac point.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chatons_tonkinois_poil_court_lilac_mink_et_lilac_point.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Burmese_cat",
    "title": "Burmese cat",
    "image": "File:Blissandlucky11.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/Blissandlucky11.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Bengal_cat",
    "title": "Bengal cat",
    "image": "File:BEN Russicats White Angel (5274194975).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/BEN_Russicats_White_Angel_%285274194975%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Turkish_Van",
    "title": "Turkish Van",
    "image": "File:Hobie the cat (rear view).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Hobie_the_cat_%28rear_view%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Van_cat",
    "title": "Van cat",
    "image": "File:KittE a Van cat kitten.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/2/28/KittE_a_Van_cat_kitten.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Ukrainian_Levkoy",
    "title": "Ukrainian Levkoy",
    "image": "File:Ukrainian Levkoy cat.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/Ukrainian_Levkoy_cat.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/Donskoy_cat",
    "title": "Donskoy cat",
    "image": "File:DSX World Premior RU*Don Xuk's Login WOW (14037189016).jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/35/DSX_World_Premior_RU%2ADon_Xuk%27s_Login_WOW_%2814037189016%29.jpg"
  },
  {
    "href": "https://en.wikipedia.org/wiki/New_York_(state)",
    "title": "New York (state)",
    "image": "File:1800LowsNYstate.jpeg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/be/1800LowsNYstate.jpeg"
  }
];


const catList = [];

for (let i = 0; i < catListOld.length; i += 1) {
  const cat = catListOld[i];
  const index = catList.findIndex((value) => value.title === cat.title);
  if (index === -1) {
    catList.push(cat);
  }
}


catList.sort(function (a, b) {
  const titleA = a.title;
  const titleB = b.title;
  if (titleA > titleB) {
    return 1;
  }
  if (titleA < titleB) {
    return -1;
  }
  return 0;
});

// for (let i = 0; i < catList.length; i += 1) {
//   const cat = catList[i];
//   const {
//     href,
//   } = cat;
//   const titleSplit = href.split('/');
//   const title = titleSplit[titleSplit.length - 1];

//   fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&format=json&prop=images`, {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8"
//     }
//   })
//     .then(response => response.json())
//     .then((result) => {
//       try {

//         const { query: {
//           pages
//         } } = result;

//         const pagesList = Object.keys(pages);

//         for (let k = 0; k < pagesList.length; k += 1) {
//           const imageList = pages[pagesList[k]].images;
//           for (let l = 0; l < imageList.length; l += 1) {
//             const { title: a } = imageList[l];
//             if (a.endsWith('jpg') || a.endsWith('jpeg') || a.endsWith('png')) {
//               cat['image'] = a;
//               return fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${a}&prop=imageinfo&iiprop=url&format=json`, {
//                 headers: {
//                   "Content-Type": "application/json; charset=UTF-8"
//                 }
//               });
//             }
//           }
//         }
//       } catch (e) { }
//       return;
//     })
//     .then(response => response && response.json())
//     .then((result) => {
//       try {

//         const { query: {
//           pages
//         } } = result;

//         const pagesList = Object.keys(pages);

//         for (let k = 0; k < pagesList.length; k += 1) {
//           const imageList = pages[pagesList[k]].imageinfo;
//           for (let l = 0; l < imageList.length; l += 1) {
//             const { url } = imageList[l];
//             cat['imageUrl'] = url;
//           }
//         }
//       } catch (e) { }
//     });
// }