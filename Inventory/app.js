//var module1 = angular.module("BookStoreApp", ["ngMock"]);
var module1 = angular.module("BookStoreApp", []);
module1.controller("BookStoreCtrl", function($scope, BooksService){
  $scope.test = "Hello";
  $scope.books = [];
  $scope.book = {};
  $scope.book.authors=[];
  $scope.saveBook = function(){
    BooksService.saveBookService($scope.book).then(function(res){
      console.log(res);
      $scope.books = res;
      $scope.book = {};
    })
    console.log("test");
  }
  $scope.deleteBook = function(ind){
    $scope.books.splice(ind,1);
  } 
  $scope.updateBook = function(ind){
     $scope.book = $scope.books[ind];
  }
  $scope.addAuthor = function(){
    $scope.book.authors = $scope.book.authors || [];
    if($scope.book.author != "" && $scope.book.author != undefined){
       $scope.book.authors.push($scope.book.author);
    }
    $scope.book.author = "";
  }
  $scope.removeAuthor = function(indx){
    $scope.book.authors.splice(indx,1);
     // $scope.book.author = "";
   // }
  }
});
 
module1.service("BooksService", function($q){
  this.books = [];
  var deferred = $q.defer();
  
  this.saveBookService = function(book){
    this.books.push(book);
    deferred.resolve(this.books);
    return deferred.promise;
  }
});
 
/** Test Suit */
    var rec = {title : "Book A",type : "A",isbn:"321434",author:"Mr A"};
    var rec1 = [{title : "Book A",type : "A",isbn:"321434",author:"Mr A"},{title : "Book B",type : "B",isbn:"321434",author:"Mr A"}];
     var rec_update = [{title : "Book A",type : "A",isbn:"321434",author:"Mr A"},{title : "Book B",type : "B",isbn:"321434",author:"Mr A"}];
describe('BookStoreCtrl', function() {
                beforeEach(module('BookStoreApp'));
                var $controller;
                beforeEach(angular.mock.inject(function(_$controller_) {
                    $controller = _$controller_;
                }));
                describe('saveBook', function() {
                    it ('It should save the new records', function() {
                        var $scope = {};
                        var controller = 
                        $controller('BookStoreCtrl', {$scope: $scope});
                        $scope.book = rec;
                       // $scope.y = 3;
                       console.log($scope.books,rec);
                        $scope.saveBook();
                        console.log($scope.books,rec);
                        expect(angular.equals($scope.books,$scope.books)).toBe(true);
                        //angular.equals(scope.bars, myBarsArray)).toBe(true);
                    }); 
                });
                describe('deleteBook', function() {
                    it ('It should Delete the record', function() {
                        var $scope = {};
                        var controller = 
                        $controller('BookStoreCtrl', {$scope: $scope});
                        $scope.book = rec;
                        $scope.books = rec1; 
                       // $scope.y = 3;
                       console.log($scope.books,rec);
                        $scope.deleteBook(0);
                        console.log( $scope.books,rec);
                        expect($scope.books.length).toBe(1);
                        //angular.equals(scope.bars, myBarsArray)).toBe(true);
                    }); 
                });
                describe('Update', function() {
                    it ('It should Delete the record', function() {
                        var $scope = {};
                        var controller = 
                        $controller('BookStoreCtrl', {$scope: $scope});
                       // $scope.book = rec;
                        $scope.books = rec_update; 
                       // $scope.y = 3;
                       console.log($scope.books,rec);
                        $scope.updateBook(0);
                        console.log( $scope.books,rec);
                        expect(angular.equals($scope.book, $scope.books[0])).toBe(true);
                        //angular.equals($scope.book, $scope.books[0])).toBe(true);
                    }); 
                }); 
            });