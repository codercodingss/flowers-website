var app = angular.module("myapp",[]);

app.controller("cop",function($scope){
  $scope.items=[
    {img:"Birthday Smiles White Floral.jpg",flwname:"Birthday Smiles White Floral",price:"₦40,000 - ₦80,000",goto:"Birthday Smiles White Floral.html"},
    {img:"Sunkissed Gerbera Bouquet.webp",flwname:"Sunkissed Gerbera Bouquet",price:"	₦80,000 - ₦150,000",goto:"Sunkissed Gerbera Bouquet.html"},
    {img:"Roses Bouquet – Fleur Aries.jpg",flwname:"Roses Bouquet – Fleur Aries",price:"₦70,000 - ₦100,000",goto:"Roses Bouquet – Fleur Aries.html"},
    {img:"Mixed Rose Bouquet – Candy Floss.jpg",flwname:"Mixed Rose Bouquet – Candy Floss",price:"₦70,000 - ₦100,000",goto:"Mixed Rose Bouquet – Candy Floss.html"},
    {img:"Light of My Life Bouquet & Happy Birthday Topper.jpg",flwname:"Light of My Life Bouquet & Happy Birthday Topper",price:"₦100,000 - ₦150,000",goto:"Light of My Life Bouquet  Happy Birthday Topper.html"},
    {img:"XOXO Rosalea.jpg",flwname:"XOXO Rosalea",price:"₦100,000 - ₦150,000",goto:"XOXO Rosalea.html"},
    {img:"Rainbow Tulip Bulb Garden.jpg",flwname:"Rainbow Tulip Bulb Garden",price:"₦100,000 - ₦200,000",goto:"Rainbow Tulip Bulb Garden.html"},
    {img:"The Cheerleader Bouquet.webp",flwname:"The Cheerleader Bouquet",price:"	₦100,000 - ₦150,000",goto:"The Cheerleader Bouquet.html"},

  ];
  $scope.occasion=[
    {img:"Birthday Brights bouquet.jpg",flwname:"Birthdays",goto:"birthday.html"},
    {img:"thank you.jpg",flwname:"Anniversary",goto:"Anniversary.html"},
    {img:"marraige.jpg",flwname:"Marraige",goto:"Marraige.html"},
    {img:"Florist Original Mixed Bouquet.jpg",flwname:"Gradution",goto:"Gradution.html"},
    {img:"thank you.jpg",flwname:"Thank You",goto:"Thankyou.html"},
  ];
  $scope.flower=[
    {img:"roses.jpg",flwname:"Roses",goto:"rose.html"},
    {img:"daisies.jpg",flwname:"Daisies",goto:"Daisies.html"},
    {img:"sunflower.jpg",flwname:"Sunflowers",goto:"Sunflowers.html"},
    {img:"lily.jpg",flwname:"Lilies",goto:"Lilies.html"},
    {img:"iris.jpg",flwname:"Irisis",goto:"Irisis.html"},
  ];
  $scope.birthday=[
    {img:"Best Day Bouquet & Lovepop® Birthday Pop-Up Card.jpg",flwname:"Best Day Bouquet & Lovepop® Birthday Pop-Up Card",price:"₦50,000 - ₦100,000",goto:"Best Day Bouquet.html"},
    {img:"Birthday Brights bouquet.jpg",flwname:"Birthday Brights bouquet",price:"₦40,000 - ₦80,000",goto:"Birthday Brights bouquet.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},
    {img:"Birthday Smiles White Floral.jpg",flwname:"Birthday Smiles White Floral",price:"₦40,000 - ₦80,000",goto:"Birthday Smiles White Floral.html"},
    {img:"Light of My Life Bouquet & Happy Birthday Topper.jpg",flwname:"Light of My Life Bouquet & Happy Birthday Topper",price:"₦100,000 - ₦150,000",goto:"Light of My Life Bouquet  Happy Birthday Topper.html"},
    {img:"Mixed Rose Bouquet – Candy Floss.jpg",flwname:"Mixed Rose Bouquet – Candy Floss",price:"₦70,000 - ₦100,000",goto:"Mixed Rose Bouquet – Candy Floss.html"},
    {img:"Roses Bouquet – Fleur Aries.jpg",flwname:"Roses Bouquet – Fleur Aries",price:"₦70,000 - ₦100,000",goto:"Roses Bouquet – Fleur Aries.html"},
    {img:"Apple Blossom Inspired Floral Arrangement.jpg",flwname:"Apple Blossom Inspired Floral Arrangement",price:"₦200,000 - ₦250,000",goto:"Apple Blossom Inspired Floral Arrangement.html"},
    {img:"BENEVA HAPPY BLOOMS BASKET.jpg",flwname:"BENEVA HAPPY BLOOMS BASKET",price:"₦100,000 - ₦130,000",goto:"BENEVA HAPPY BLOOMS BASKET.html"}
  ];
  $scope.birthdays=[
    {img:"Best Day Bouquet & Lovepop® Birthday Pop-Up Card.jpg",flwname:"Best Day Bouquet & Lovepop® Birthday Pop-Up Card",price:"₦50,000 - ₦100,000",goto:"Best Day Bouquet.html"},
    {img:"Birthday Brights bouquet.jpg",flwname:"Birthday Brights bouquet",price:"₦40,000 - ₦80,000",goto:"Birthday Brights bouquet.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},
    {img:"Light of My Life Bouquet & Happy Birthday Topper.jpg",flwname:"Light of My Life Bouquet & Happy Birthday Topper",price:"₦100,000 - ₦150,000",goto:"Light of My Life Bouquet  Happy Birthday Topper.html"},
    {img:"Mixed Rose Bouquet – Candy Floss.jpg",flwname:"Mixed Rose Bouquet – Candy Floss",price:"₦70,000 - ₦100,000",goto:"Mixed Rose Bouquet – Candy Floss.html"},
    {img:"Roses Bouquet – Fleur Aries.jpg",flwname:"Roses Bouquet – Fleur Aries",price:"₦70,000 - ₦100,000",goto:"Roses Bouquet – Fleur Aries.html"},
    {img:"Apple Blossom Inspired Floral Arrangement.jpg",flwname:"Apple Blossom Inspired Floral Arrangement",price:"₦200,000 - ₦250,000",goto:"Apple Blossom Inspired Floral Arrangement.html"},
    {img:"BENEVA HAPPY BLOOMS BASKET.jpg",flwname:"BENEVA HAPPY BLOOMS BASKET",price:"₦100,000 - ₦130,000",goto:"BENEVA HAPPY BLOOMS BASKET.html"}
  ];
  $scope.roses=[
    {img:"Light of My Life Bouquet & Happy Birthday Topper.jpg",flwname:"Light of My Life Bouquet & Happy Birthday Topper",price:"₦100,000 - ₦150,000",goto:"Light of My Life Bouquet  Happy Birthday Topper.html"},
    {img:"Tango In Paris Bouquet & Bear Set.jpg",flwname:"Tango In Paris Bouquet & Bear Set",price:"₦130,000 - ₦150,000",goto:"Tango In Paris Bouquet & Bear Set.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},
    {img:"Birthday Smiles White Floral.jpg",flwname:"Birthday Smiles White Floral",price:"₦40,000 - ₦80,000",goto:"Birthday Smiles White Floral.html"},
    {img:"Fiesta Bouquet.jpg",flwname:"Fiesta Bouquet",price:"	₦130,000 - ₦150,000",goto:"Fiesta Bouquet.html"},
    {img:"Eustoma Bouquet – Bundle of Love.jpg",flwname:"Eustoma Bouquet – Bundle of Love",price:"₦130,000 - ₦190,000",goto:"Eustoma Bouquet – Bundle of Love.html"},
    {img:"Mixed Rose Bouquet – Candy Floss.jpg",flwname:"Mixed Rose Bouquet – Candy Floss",price:"₦70,000 - ₦100,000",goto:"Mixed Rose Bouquet – Candy Floss.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},
    {img:"Tango In Paris Bouquet & Bear Set.jpg",flwname:"Tango In Paris Bouquet & Bear Set",price:"₦130,000 - ₦150,000",goto:"Tango In Paris Bouquet & Bear Set.html"}

  ]
  $scope.roses1=[
    {img:"Light of My Life Bouquet & Happy Birthday Topper.jpg",flwname:"Light of My Life Bouquet & Happy Birthday Topper",price:"₦100,000 - ₦150,000",goto:"Light of My Life Bouquet  Happy Birthday Topper.html"},
    {img:"Tango In Paris Bouquet & Bear Set.jpg",flwname:"Tango In Paris Bouquet & Bear Set",price:"₦130,000 - ₦150,000",goto:"Tango In Paris Bouquet & Bear Set.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},
    {img:"Birthday Smiles White Floral.jpg",flwname:"Birthday Smiles White Floral",price:"₦40,000 - ₦80,000",goto:"Birthday Smiles White Floral.html"},
    {img:"Fiesta Bouquet.jpg",flwname:"Fiesta Bouquet",price:"	₦130,000 - ₦150,000",goto:"Fiesta Bouquet.html"},
    {img:"Eustoma Bouquet – Bundle of Love.jpg",flwname:"Eustoma Bouquet – Bundle of Love",price:"₦130,000 - ₦190,000",goto:"Eustoma Bouquet – Bundle of Love.html"},
    {img:"Mixed Rose Bouquet – Candy Floss.jpg",flwname:"Mixed Rose Bouquet – Candy Floss",price:"₦70,000 - ₦100,000",goto:"Mixed Rose Bouquet – Candy Floss.html"},
    {img:"Tango In Paris Bouquet & Bear Set.jpg",flwname:"Tango In Paris Bouquet & Bear Set",price:"₦130,000 - ₦150,000",goto:"Tango In Paris Bouquet & Bear Set.html"}

  ]
  $scope.anniversary=[
    {img:"Blush Crush Bouquet.jpg",flwname:"Blush Crush Bouquet",price:"₦130,000 - ₦150,000",goto:"Blush Crush Bouquet.html"},
    {img:"Eustoma Bouquet – Bundle of Love.jpg",flwname:"Eustoma Bouquet – Bundle of Love",price:"₦130,000 - ₦190,000",goto:"Eustoma Bouquet – Bundle of Love.html"},
    {img:"Ever After Rose Bouquet.jpg",flwname:"Ever After Rose Bouquet",price:"₦150,000 - ₦200,000",goto:"Ever After Rose Bouquet.html"},
    {img:"Fiesta Bouquet.jpg",flwname:"Fiesta Bouquet",price:"	₦130,000 - ₦150,000",goto:"Fiesta Bouquet.html"},
    {img:"Mixed Rose Bouquet – Your Minek.jpg",flwname:"Mixed Rose Bouquet – Your Minek",price:"	₦130,000 - ₦150,000",goto:"Mixed Rose Bouquet – Your Minek.html"},
    {img:"Rainbow Tulip Bulb Garden.jpg",flwname:"Rainbow Tulip Bulb Garden",price:"₦100,000 - ₦200,000",goto:"Rainbow Tulip Bulb Garden.html"},
    {img:"Sunflower Bouquet – Happy Vibes.jpg",flwname:"Sunflower Bouquet – Happy Vibes",price:"₦40,000 - ₦90,000",goto:"Sunflower Bouquet – Happy Vibes.html"},
    {img:"Tango In Paris Bouquet & Bear Set.jpg",flwname:"Tango In Paris Bouquet & Bear Set",price:"₦130,000 - ₦150,000",goto:"Tango In Paris Bouquet & Bear Set.html"},
    {img:"XOXO Rosalea.jpg",flwname:"XOXO Rosalea",price:"₦100,000 - ₦150,000",goto:"XOXO Rosalea.html"},

  ]
  $scope.thankyou=[
    {img:"Apple Blossom Inspired Floral Arrangement.jpg",flwname:"Apple Blossom Inspired Floral Arrangement",price:"₦200,000 - ₦250,000",goto:"Apple Blossom Inspired Floral Arrangement.html"},
    {img:"BENEVA HAPPY BLOOMS BASKET.jpg",flwname:"BENEVA HAPPY BLOOMS BASKET",price:"₦100,000 - ₦130,000",goto:"BENEVA HAPPY BLOOMS BASKET.html"},
    {img:"Ever After Rose Bouquet.jpg",flwname:"Ever After Rose Bouquet",price:"₦150,000 - ₦200,000",goto:"Ever After Rose Bouquet.html"},
    {img:"Fiesta Bouquet.jpg",flwname:"Fiesta Bouquet",price:"	₦130,000 - ₦150,000",goto:"Fiesta Bouquet.html"},
    {img:"Tango In Paris Bouquet & Bear Set.jpg",flwname:"Tango In Paris Bouquet & Bear Set",price:"₦130,000 - ₦150,000",goto:"Tango In Paris Bouquet & Bear Set.html"},
    {img:"XOXO Rosalea.jpg",flwname:"XOXO Rosalea",price:"₦100,000 - ₦150,000",goto:"XOXO Rosalea.html"},
    {img:"Mixed Rose Bouquet – Your Minek.jpg",flwname:"Mixed Rose Bouquet – Your Minek",price:"	₦130,000 - ₦150,000",goto:"Mixed Rose Bouquet – Your Minek.html"},
    {img:"Rainbow Tulip Bulb Garden.jpg",flwname:"Rainbow Tulip Bulb Garden",price:"₦100,000 - ₦200,000",goto:"Rainbow Tulip Bulb Garden.html"},
    {img:"Sunflower Bouquet – Happy Vibes.jpg",flwname:"Sunflower Bouquet – Happy Vibes",price:"₦40,000 - ₦90,000",goto:"Sunflower Bouquet – Happy Vibes.html"},
    
  ]

  $scope.anniversary=[
    {img:"Bliss White Orchid.jpg",flwname:"Bliss White Orchid",price:"	₦130,000 - ₦150,000",goto:"Bliss White Orchid.html"},
    {img:"Box of Pink Beauty-min.jpg",flwname:"Box of Pink Beauty-min",price:"₦200,000 - ₦250,000",goto:"Box of Pink Beauty-min.html"},
    {img:"Island Time Coral Orchid.jpeg",flwname:"Island Time Coral Orchid",price:"₦100,000 - ₦150,000",goto:"Island Time Coral Orchid.html"},
    {img:"Perfect Purple Hyacinth Bulb Garden.jpg",flwname:"Perfect Purple Hyacinth Bulb Garden",price:"₦40,000 - ₦80,000",goto:"Perfect Purple Hyacinth Bulb Garden.html"},
    {img:"Romeo's Rose Garden.jpg",flwname:"Romeo's Rose Garden",price:"₦50,000 - ₦100,000",goto:"Romeo's Rose Garden.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},

  ]

  $scope.marraige=[
    {img:"Fiesta Bouquet.jpg",flwname:"Fiesta Bouquet",price:"	₦130,000 - ₦150,000",goto:"Fiesta Bouquet.html"},
    {img:"Island Time Coral Orchid.jpeg",flwname:"Island Time Coral Orchid",price:"₦100,000 - ₦150,000",goto:"Island Time Coral Orchid.html"},
    {img:"Perfect Purple Hyacinth Bulb Garden.jpg",flwname:"Perfect Purple Hyacinth Bulb Garden",price:"₦40,000 - ₦80,000",goto:"Perfect Purple Hyacinth Bulb Garden.html"},
    {img:"Romeo's Rose Garden.jpg",flwname:"Romeo's Rose Garden",price:"₦50,000 - ₦100,000",goto:"Romeo's Rose Garden.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},
    {img:"Bliss White Orchid.jpg",flwname:"Bliss White Orchid",price:"	₦130,000 - ₦150,000",goto:"Bliss White Orchid.html"},
    {img:"Box of Pink Beauty-min.jpg",flwname:"Box of Pink Beauty-min",price:"₦200,000 - ₦250,000",goto:"Box of Pink Beauty-min.html"},
    {img:"Rainbow Tulip Bulb Garden.jpg",flwname:"Rainbow Tulip Bulb Garden",price:"₦100,000 - ₦200,000",goto:"Rainbow Tulip Bulb Garden.html"},
    {img:"Sunflower Bouquet – Happy Vibes.jpg",flwname:"Sunflower Bouquet – Happy Vibes",price:"₦40,000 - ₦90,000",goto:"Sunflower Bouquet – Happy Vibes.html"},
   
  ]
  $scope.sunflower=[
    {img:"Sweetest Sunflower Succulent Bouquet.webp",flwname:"Sweetest Sunflower Succulent Bouquet",price:"	₦130,000 - ₦150,000",goto:"Sweetest Sunflower Succulent Bouquet.html"},
    {img:"Deluxe Sunflower Bouquet.webp",flwname:"Deluxe Sunflower Bouquet",price:"	₦100,000 - ₦150,000",goto:"Deluxe Sunflower Bouquet.html"},
    {img:"Free Spirit Bouquet.webp",flwname:"Free Spirit Bouquet",price:"	₦100,000 - ₦150,000",goto:"Free Spirit Bouquet.html"},
    {img:"The Cheerleader Bouquet.webp",flwname:"The Cheerleader Bouquet",price:"	₦100,000 - ₦150,000",goto:"The Cheerleader Bouquet.html"},
    {img:"Best Day Box Bouquet.webp",flwname:"Best Day Box Bouquet",price:"	₦100,000 - ₦150,000",goto:"Best Day Box Bouquet.html"},
    {img:"Floral Confetti Bouquet Set.webp",flwname:"Floral Confetti Bouquet Set",price:"	₦100,000 - ₦150,000",goto:"Floral Confetti Bouquet Set.html"} 
]
$scope.daisy=[
  {img:"Red Hot Bouquet.webp",flwname:"Red Hot Bouquet",price:"	₦120,000 - ₦250,000",goto:"Red Hot Bouquet.html"},
  {img:"Birthday Brights bouquet.jpg",flwname:"Birthday Brights bouquet",price:"₦40,000 - ₦80,000",goto:"Birthday Brights bouquet.html"},
  {img:"Fiesta Bouquet.jpg",flwname:"Fiesta Bouquet",price:"	₦130,000 - ₦150,000",goto:"Fiesta Bouquet.html"},
  {img:"Light of My Life Bouquet & Happy Birthday Topper.jpg",flwname:"Light of My Life Bouquet & Happy Birthday Topper",price:"₦100,000 - ₦150,000",goto:"Light of My Life Bouquet  Happy Birthday Topper.html"},
  {img:"Sunkissed Gerbera Bouquet.webp",flwname:"Sunkissed Gerbera Bouquet",price:"	₦80,000 - ₦150,000",goto:"Sunkissed Gerbera Bouquet.html"},
  {img:"Heartfelt Condolences Arrangement.webp",flwname:"Heartfelt Condolences Arrangement",price:"	₦80,000 - ₦150,000",goto:"Heartfelt Condolences Arrangement.html"}
]
$scope.lilly=[
  {img:"Heartfelt Condolences Arrangement.webp",flwname:"Heartfelt Condolences Arrangement",price:"	₦80,000 - ₦150,000",goto:"Heartfelt Condolences Arrangement.html"},
  {img:"Sweetest Sunflower Succulent Bouquet.webp",flwname:"Sweetest Sunflower Succulent Bouquet",price:"	₦130,000 - ₦150,000",goto:"Sweetest Sunflower Succulent Bouquet.html"},
  {img:"XOXO Rosalea.jpg",flwname:"XOXO Rosalea",price:"₦100,000 - ₦150,000",goto:"XOXO Rosalea.html"},
  {img:"Rainbow Tulip Bulb Garden.jpg",flwname:"Rainbow Tulip Bulb Garden",price:"₦100,000 - ₦200,000",goto:"Rainbow Tulip Bulb Garden.html"},
  {img:"Box of Pink Beauty-min.jpg",flwname:"Box of Pink Beauty-min",price:"₦200,000 - ₦250,000",goto:"Box of Pink Beauty-min.html"},
  {img:"The Cheerleader Bouquet.webp",flwname:"The Cheerleader Bouquet",price:"	₦100,000 - ₦150,000",goto:"The Cheerleader Bouquet.html"},

]
  $scope.graduation=[
    {img:"Sweetest Sunflower Succulent Bouquet.webp",flwname:"Sweetest Sunflower Succulent Bouquet",price:"	₦130,000 - ₦150,000",goto:"Sweetest Sunflower Succulent Bouquet.html"},
    {img:"Deluxe Sunflower Bouquet.webp",flwname:"Deluxe Sunflower Bouquet",price:"	₦100,000 - ₦150,000",goto:"Deluxe Sunflower Bouquet.html"},
    {img:"Free Spirit Bouquet.webp",flwname:"Free Spirit Bouquet",price:"	₦100,000 - ₦150,000",goto:"Free Spirit Bouquet.html"},
    {img:"Bliss White Orchid.jpg",flwname:"Bliss White Orchid",price:"	₦130,000 - ₦150,000",goto:"Bliss White Orchid.html"},
    {img:"Romeo's Rose Garden.jpg",flwname:"Romeo's Rose Garden",price:"₦50,000 - ₦100,000",goto:"Romeo's Rose Garden.html"},
    {img:"Box of Pink Beauty-min.jpg",flwname:"Box of Pink Beauty-min",price:"₦200,000 - ₦250,000",goto:"Box of Pink Beauty-min.html"},
    {img:"Island Time Coral Orchid.jpeg",flwname:"Island Time Coral Orchid",price:"₦100,000 - ₦150,000",goto:"Island Time Coral Orchid.html"},
    {img:"Perfect Purple Hyacinth Bulb Garden.jpg",flwname:"Perfect Purple Hyacinth Bulb Garden",price:"₦40,000 - ₦80,000",goto:"Perfect Purple Hyacinth Bulb Garden.html"},
    {img:"Classic Love Red Rose Bouquet.jpg",flwname:"Classic Love Red Rose Bouquet",price:"₦30,000 - ₦100,000",goto:"Classic Love Red Rose Bouquet.html"},

  ]

});





function goToPage() {
  window.location.href ="index.html";
}
function goTocontact() {
  window.location.href ="contact.html";
}


// occasions
function goToThankYou(){
  window.location.href ="Thankyou.html";
}

function goToAnniversary(){
  window.location.href ="Anniversary.html";
}

function goToMarraige() {
  window.location.href ="Marraige.html";
}

function goToBirthday() {
  window.location.href ="birthday.html";
}

function goToGradution() {
  window.location.href ="Gradution.html";
}


//flowers
function Daisies() {
  window.location.href ="Daisies.html";
}

function roses() {
  window.location.href ="rose.html";
}

function Sunflowers() {
  window.location.href ="Sunflowers.html";
}

function Lilies() {
  window.location.href ="Lilies.html";
}

function Irisis() {
  window.location.href ="Irisis.html";
}


function clearInput() {
  // Get all the elements with the ID "myInput"
  var inputs = document.querySelectorAll("#inp");
  // Loop through the inputs and set their values to an empty string
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}