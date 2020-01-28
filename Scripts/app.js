/*
    Student Name  : Bhoomika Patel
    StudentID     : 100730738
    Date Completed: 2020-01-28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;



(function(app){
    
let newL;

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       
       
   newL = document.getElementById("largeButton");
   newL.innerHTML = " Learn More";


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

