var app = angular.module('myApp', []);
app.controller('playerCtrl', function($scope, $http) {
   $scope.players = [
        {name : "Ruben Marchán", position : "Pivot" ,age: "26"},
        {name : "Erwin Feuchtmann", position : "Left Side" ,age: "30"},
        {name : "Natán Antonio Suárez Díaz", position : "Central" ,age: "26"},
        {name : "Tin lučin", position : "Central" ,age: "21"},
        {name : "Pedro Martinez Cami", position : "Central" ,age: "21"},
        {name : "Drew Donlin", position : "Pivot" ,age: "28"},
        {name: "Milan gostovic", position: "Right side", age: "19"},
        {name: "Jose Mario Carrillo Gutierrez", position: "Leftmost", age: "30"},
        {name: "Dino Slavić", position: "Leftmost", age: "28"},
        {name: "Jaime Fernandez Fernandez", position: "Goalkeeper", age: "23"},
        {name: "Gonzalo perez arce", position: "Rightmost", age: "22"},
        {name: "Khalifa ghedbane", position: "Goalkeeper", age: "24"},
        {name: "Alex sludge", position: "Left side", age: "18"},
        {name: "Antonio Martinez Llamazares", position: "Rightmost", age: "17"},
        {name: "Leandro Elías Borges Silva Semedo", position: "Left side", age: "26"},
        {name: "Mateusz piechowski", position: "Pivot", age: "25"},
        {name: "Oleg Kisselev Kisseleva", position: "Left side", age: "23"},
        {name: "Adrián Casqueiro López", position: "Left most", age: "20"},
        {name: "Carlos Honrado Cristobalena", position: "Goalkeeper", age: "17"},
    ]; 
});

app.controller('cropsCtrl', function($scope, $http) {
   $scope.crops = [
        {name : "Manuel Cadenas Montañés", occupation : "Coach" ,city: "Valdebimbre, Leon"},
        {name : "Belén Gutíerrez Santamarta", occupation : "Medical" ,city: "Lion"},
        {name : "Jorge Fernandez Cabezón", occupation : "Physiotherapist" ,city: "Lion"},
        {name : "Luis Puertas Castrillo", occupation : "Physical trainer / Assistant coach" ,city: "Lion"},
        {name : "Miguel Garcia Good", occupation : "Material manager" ,city: "Lion"},
        {name : "Pablo Castro Alvarez", occupation : "Delegate" ,city: "Lion"},
    ]; 
});

app.controller('thorCtrl', function($scope, $http) {
   $scope.thor = [
        {name : "ASOBAL CUP CHAMPION 2009"},
        {name : "RECOPA 2004-2005"},
        {name: "LEAGUE CHAMPION 2000-2001"},
        {name : "CUP OF THE KING 2001-2002"},
        {name : "ASOBAL CUP CHAMPION 1998-1999"},  
    ];
});

app.controller('organization', function($scope, $http) {
  $scope.org = [
    {mission: "PRESIDENT",name:"Cayetano Franco Juan"},
    {mission: "VICE PRESIDENT",name:"René Mira Rubio"},
    {mission: "ECONOMIC VICE PRESIDENT",name:"Rocio Garcia Gimeno"},
    {mission: "SPORTS VICE PRESIDENT",name:"Jose Carlos Cabero Amez	"},
    {mission: "SECRETARY",name:"Blanca Inés Garcia Martinez"},
    {mission: "TREASURER",name:"Mª José García Martinez"},
    {mission: "DEPUTY SECRETARY",name:"Sergio Sánchez Pacho"},
    {mission: "VOCAL",name:"Juan Francisco Puertas Gutierrez"},
  ]
    $scope.showMe = false;
    $scope.showOrg = function() {
        $scope.showMe = !$scope.showMe;
    }
});

app.controller('achievementsCtrl', function($scope, $http) {
   $scope.achv = [
        {year: "1984/85", name: "Promotion to Division of Honor"},
        {year: "1982/83", name: "Relegation to the First National Division."},
        {year: "1989/90", name: "Promotion to First National Division."},
        {year: "1993/94", name: "Promotion to the ASOBAL League."},
        {year: "1998/99", name: "Asobal Cup Champion"},
        {year: "2001/2002", name: "Cup of the King"},  
    ];
});

app.controller('technical', function($scope, $http) {
  $scope.tech = [
    {mission: "ADMINISTRATION",name:"Fernando Pollan"},
    {mission: "MARKETING",name:"Francisco Fuertes"},
    {mission: "FOUNDATION MANAGER",name:"Javier Gabela"},
    {mission: "TEAM DELEGATE",name:"Pablo castro"}
  ]
    $scope.showMe = false;
    $scope.showOrg = function() {
        $scope.showMe = !$scope.showMe;
    }
});

app.controller('formcontrol', function($scope) {
    $scope.user = '';
    $scope.email = '';
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

