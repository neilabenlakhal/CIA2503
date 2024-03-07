
/*

1- Add a button to your web page called "Remove Div" that, 
when clicked, removes the entire <div> with the ID div1 from the page.

2- Create a button called "Hide Last Paragraph" that, when clicked, 
hides the last paragraph inside the <div> with the ID div1.

3- Add a button called "Append Paragraph" that, when clicked, appends a new paragraph 
with the text "New Paragraph" to the <div> with the ID div1.

4-Create a button "Remove Important Class" that, when clicked, 
removes the important class from the <div> with the ID div1.

5-Implement a button "Toggle Blue Class" that, when clicked, toggles the blue 
class on the <h2> element.

6- Add a button "Toggle Important Class" that, when clicked, toggles
 the important class on the <div> with the ID div1.

7- Create a button "Prompt and Change Background" that, when clicked, uses prompt()
 to ask the user for a color name and changes the background color of the <div> with the ID div1 
 to the color entered by the user.




 8-Add a button "Hide/Show Div" that toggles the visibility of the <div> 
 with the ID div1 when clicked.

 9-Implement a button "Clear Text Inputs" that, when clicked, 
 clears the text inputs with IDs fn, cc, and cn.



*/

/*

Solution:1
$(".btn7").click(function(){
  $("#div1").remove();
});

 Solution:2
$(".btn8").click(function(){
    $("#test").hide();
});

// Solution:3
$(".btn8").click(function(){
    $("#div1").append("<p>New Paragraph</p>");
});


// Solution:4
$(".btn11").click(function(){
    $("#div1").removeClass("important");
});


// Solution:5
$(".btn12").click(function(){
    $("h2").toggleClass("blue");
});


// Solution:6
$(".btn13").click(function(){
    $("#div1").toggleClass("important");
});


// Solution:7
$(".btn14").click(function(){
    var userColor = prompt("Enter a color name:");
    if (userColor) {
        $("#div1").css("background-color", userColor);
    }
});


// Solution:8
$(".btn15").click(function(){
    $("#div1").toggle();
});


// Solution: 9
$(".btn16").click(function(){
    $("#fn, #cc, #cn").val("");
});


7- Create a button "Prompt and Change Background" that, when clicked, uses prompt()
 to ask the user for a color name and changes the background color of the <div> with the ID div1 
 to the color entered by the user.


*/
window.onload = function () {
  $(function () { alert("jQuery + DOM loaded."); });
}
$(document).ready(function () {
  $(".btn1").click(function () {
    $("p").toggle();
  });

  $(".btn20").click(function () {
    var color = prompt ("please enter color ");
    $("#div1").css("background-color", color);

  });
  $(".btn7").click(function () {
    $("#div1").remove(); //h1 h2 h3 h4 ... h6 img b span div footer section  form ul li ...
  });

  // Solution:3
  $(".btn8").click(function () {
    $("#div1").append("<p>New Paragraph</p>");
  });

  $(".btn2").click(function () {
    $("h2").toggle();
  });
  $(".btn3").click(function () {
    $("#test").toggle();
  });
  // Solution:6
  $(".btn13").click(function () {
    $("h2").toggleClass("blue");
  });

  $("input").focus(function () {
    $(this).css("background-color", "lightblue");
  });
  $("input").blur(function () {
    $(this).css("background-color", "lightgreen");
    // document.getElementById("fn"). style.backgroundColor ="lightgreen";
    //DOM+JS document
  });
  $(".btn4").click(function () {
    alert("Paragraph Text: " + $("#test").text());
  });
  $(".btn5").click(function () {
    alert("Course Code: " + $("#cc").val() + " Course Name: " + $("#cn").val());
    $("#p1").text("Course Code entered: " + $("#cc").val());
    $("#p2").text("Course Name entered: " + $("#cn").val());
    $("#heading1").append(" - " + $("#fn").val());
    $("#div1").remove();

  });
  $(".btn6").click(function () {
    $("h2,#p1,#p2").addClass("blue");
    $("div").addClass("important");
  });

  $(".btn7").click(function () {
    $("#div1").remove();

  });

 

  $(".btn11").click(function () {
    $("#div1").removeClass("important");
  });

  // $("div").find("span").css({"color":"red"});
  // $("div").children().css({"color":"red"});

  // Solution: 9
  $(".btn15").click(function () {
    $("#fn, #cc, #cn").val("Hi");
  });



  $(".btn14").click(function () {
    var userColor = prompt("Enter a color name:");
    if (userColor) {
      $("#div1").css("background-color", userColor);
    }
  });

});
