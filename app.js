// Chapter 21 to 25;

// var fname = prompt("Enter your First Name");
// var lname = prompt("Enter your Last Name");
// var fullname = fname + lname;
// alert('God Bless You Mr.' + fullname + '<br>');

// var fmobile = prompt("Please tell me your favourite mobile phone model");
// document.write('My Favourite Phone is: ' + fmobile + '<br>');
// document.write('Length of String: ' + fmobile.length + '<br>');

// var a = 'Pakistani';
// document.write('String: ' + a + '<br>')
// document.write('Index no. 7: ' + a.charAt(7) + '<br>');

// var b = 'Hello World';
// document.write("String " + b + "<br>");
// document.write("Index no. 9: " + b.charAt(9) + '<br>');

// var a = 'Pakistani';
// document.write('String: ' + a + '<br>')
// document.write('Index no. 7: ' + a.charAt(7) + '<br>');

// var r = "Q1";
// document.write(r + '<br>' + r + '<br>');

// var c = 'Hyderabad';
// var c1 = c.replace('Hyder', 'Islam');
// document.write('City: ' + c + '<br>');
// document.write('After Replacement: ' + c1 + '<br>');

// var message = "Ali and Sami are best friends. They pay Cricket and Football together.";
// message1 = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>")
// document.write("After Replacement: " + message1 + '<br>');

// var nu1 = 400;
// var nu2 = 72;
// var nu = nu1 + nu2;
// var st1 = "4";
// var st2 = "72"
// var st = "472";
// document.write('Value: ' + st + '<br>' + 'Type: String' + '<br>' + 'Value: ' + nu + '<br>' + 'Type: Number' + '<br>');

// var ui = prompt('Please Enter Any Name');
// var ui1 = ui;
// ui = ui.toUpperCase();
// document.write('User Input: ' + ui1 + '<br>');
// document.write('UpperCase: ' + ui + '<br>');

// var ui = prompt('Please Enter Any Name');
// var ui1 = ui;
// var firstchar = ui.slice(0,1); 
// var otherchar = ui.slice(1);
// firstchar = firstchar.toUpperCase();
// document.write('User Input: ' + ui + '<br>');
// document.write('TitleCase: ' + firstchar + '' + otherchar + '<br>');

// var num1 = 34;
// var num2 = 1.36;
// var num = num1 + num2;
// var a1 = "35";
// var a2 = "36";
// var s = a1 + a2;
// document.write('Number: ' + num + '<br>');
// document.write('Result: ' + s + '<br>');

// var un = prompt("Enter your Username");
// for (var i = 0; i <= un.length; i++){
//     if(i === "@"){
//         prompt("Enter a Valid Username")
//     }else if(i === "."){
//         prompt("Enter a Valid Username")
//     }else if(i === ","){
//         prompt("Enter a Valid Username")
//     }else if(i === "!"){
//         prompt("Enter a Valid Username")
//     }
// }

// var bitem = prompt("Enter your Bakery item");
// bitem = bitem.toLowerCase()
// var arr = ["cake", "apple pie", "cookies", "chips", "patties"];
// for (var i=0; i<arr.length; i++){
//     if(arr[i] === bitem){
//         alert(" is available");
//     }else{alert(" is not available" + '<br>'); 
//     }   
// }

// var name = "University of Karachi";
// var newar= ["U","n",'i','v','e','r','s','i','t','y','o','f','K','a','r','a','c','h','i']
// console.log(newar + '<br>');

// var a = 'Pakistani';
// document.write('User Input: ' + a + '<br>')
// document.write('Last character of Input: ' + a.charAt(7) + '<br>');

// Chapter 26 to 30

// Task 1

// var userin = prompt("Enter a positive integer");
// var round = Math.round(userin);
// var cei = Math.ceil(userin);
// var floo = Math.floor(userin);
// document.write("number: " + userin + '<br>');
// document.write("round off value: " + round + '<br>');
// document.write("floor value: " + floo + '<br>');
// document.write("ceil value: " + cei + '<br>');

// Task 2

// var userin = prompt("Enter a negative integer");
// var round = Math.round(userin);
// var cei = Math.ceil(userin);
// var floo = Math.floor(userin);
// document.write("number: " + userin + '<br>');
// document.write("round off value: " + round + '<br>');
// document.write("floor value: " + floo + '<br>');
// document.write("ceil value: " + cei + '<br>');

// Task 3

// var useri = prompt("Enter a value");
// var abs = Math.absolute(useri);
// document.write("number: " + abs + '<br>');

// Task 4

// var num = Math.random() *6;
// var cont = num.toFixed();
// var num1 = Math.random() *6;
// var cont1 = num1.toFixed();
// document.write("random dice value 1: " + cont  + "<br>")
// document.write("random dice value 2: " + cont1 + "<br>")

// Task 5

// var headsuser = prompt("Select your toss (Heads or Tails)");

// var toss = Math.random() * 6;
// var floor = Math.floor(toss);

// if(floor <= 3){
//     document.write("2" + "<br>" + "Random coin value: Heads" + "<br>")
// }else{
//     document.write("1" + "<br>" + "Random coin value: Tails" + "<br>")
// }

// Task 6

// var r = Math.random() * 100;
// var floor = Math.floor(r);

// document.write("Random no. between 1 and 100 is " + floor);

// Task 7

// var userweight = prompt("Enter your weight");
// document.write("The weight of user is: " + userweight + "  Kilograms" + "<br>")

// Task 8

// var secretinput = +prompt("Please guess the secret number");
// var num = 7;

// if(secretinput === num){
//     alert("Congratulations! Your guess is correct")
// }else{
//     alert("Please Try Again")
// }

// Chapter 31 to 34

// Task 1

// var a = new Date();
// document.write(a);

// Task 2

// var now = new Date();
// var mon = now.getMonth();
// document.write("Current Month: " + mon + "<br>");

// Task 3

// var now = new Date();
// var dai = now.getDay();
// document.write("Today is " + dai);

// Task 4

// var now = new Date();
// var dai = now.getDay();

// if(dai == "0" || dai == "6" ){
//     alert("It's Fun Day")
// }else{
//     alert("It's working Day")
// }

// Task 5

// var now = new Date();
// var dat = now.getDate();

// if(dat <= "15"){
//     alert("First Fifteen Days of the Month")
// }else{
//     alert("Last Fifteen Days of the Month")
// }

// Task 6

// var now = new Date();
// var dat = now.getDate();

// var d = new Date("Jan 1, 1970");
// var dobmili = d.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili
// var diffmili = diff/(1000)

// var d1 = new Date("Jan 1, 1970");
// var dobmin = d1.getMinutes();
// var today = new Date();
// var todaymin = today.getMinutes();
// var diff1 = todaymin - dobmin
// var diffmin = diff/(1000*60*60)

// document.write("Current Date: " + dat + "<br>");
// document.write("Elapsed Millisecods since Jan 1, 1970: " + diffmili + "<br>");
// document.write("Elapsed Minutes since Jan 1, 1970: " + diffmin + "<br>");

// Task 7

// var now = new Date();
// var dat = now.getHours();

// if(dat < "12"){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// Task 8

// var now = new Date();

// now.setMonth(11);
// now.setDate(31);
// now.setHours(0);
// now.setMinutes(0);
// now.setSeconds(0);

// var laterDate = now;
// document.write(laterDate);
 
// Task 9

// var d = new Date("June 18, 2015");
// var dobmili = d.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili
// var diffmili = diff/(1000*60*60*24);
// var diffmili1 = Math.floor(diffmili);

// document.write(diffmili1 + "  days have passed since 1st Ramadan 2015" + "<br>");

// Task 10

// var now = new Date();

// now.setFullYear(2015);
// now.setMonth(11);
// now.setDate(05);
// now.setHours(22);
// now.setMinutes(50);
// now.setSeconds(16);

// var d = new Date("Dec 05, 2015");
// var dobmili = d.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili
// var diffmili = diff/(1000*60);
// var diffmili1 = Math.floor(diffmili);

// document.write("On Reference Date " + now + "<br>")
// document.write(diffmili1 + "  seconds had passed since beginning of 2015" + "<br>");

// Task 11

// var now1 = new Date();
// var now = now1

// now.setHours(21);

// document.write("Current Date: " + now1 + "<br>");
// document.write("Few hour ago, it was: " + now + "<br>")