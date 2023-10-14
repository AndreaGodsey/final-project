import { changePageContent } from "../model/model.js";




function initListeners(){
    $("nav #links a").on("click", function (e) {
       let btnID = e.currentTarget.id;
       changePageContent(btnID);
        });
}

// Gallery Images
var homeGallery = ".rowoneimages a";
var imageGallery = ".rowoneimages .content a";

// Gallery Click
$(document).on("click", homeGallery, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})

// Individual Click
$(document).on("click", imageGallery, function (e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})

// Blog Images
var homeBlog = ".blogcontainer a";
var imageBlog = ".blogcontainer .content a";

// Blog Click
$(document).on("click", homeBlog, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})

// Individual Blog Click
$(document).on("click", imageBlog, function (e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})



$(document).ready(function () {
    initListeners();
    changePageContent("home");
});