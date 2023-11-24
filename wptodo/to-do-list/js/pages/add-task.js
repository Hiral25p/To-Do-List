//DEFINING CONSTANTS
const colorButton = document.querySelector("#color-picker");
const colorDiv = document.querySelector("#color-value");
const colorText = document.querySelector("#task-color");
const taskNameText = document.querySelector("#task-name");
const taskPriorityText = document.querySelector("#task-priority");
const taskCategoryText = document.querySelector("#task-category");
const taskDescriptionText = document.querySelector("#task-description");
const taskCompletionText = document.querySelector("#task-completion");
const taskReminderText = document.querySelector("#task-reminder");
const submitBtn = document.querySelector("#submit-button")
const form = document.querySelector("#add-task-form");

var colors = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
"darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"};
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

let name_field = false;
let category_field = true;
let priority_field = false;
let color_field = true;
let description_field = false;
let completion_field = false;

colorButton.addEventListener("input", checkHex);
function checkHex(e) {
    hexVals = Object.values(colors);
    colorDiv.innerHTML = colorButton.value;
    colorDiv.style.color = colorButton.value;
    if(hexVals.indexOf(colorButton.value) != -1){  
        colorText.value = getKeyByValue(colors, colorButton.value);
    }   else    {
        colorText.value = colorButton.value;
    }
}

colorText.addEventListener("blur", checkColor);
function checkColor(){
    var color = colorText.value.toLowerCase();
    let digit_regex = /^(\w{3}){1,2}$/;
    if(color == ""){
        colorDiv.innerHTML = "#000000";
        colorDiv.style.color = "#000000";
        colorButton.value = "#000000";
        color_field = true;
        document.getElementById("error-color").innerHTML = "";  
    }   else if(digit_regex.exec(color) != null){
        colorDiv.innerHTML = "#"+color;
        colorDiv.style.color = "#"+color;
        colorButton.value = "#"+color;
        color_field = true;
        document.getElementById("error-color").innerHTML = "";  
    }   else if(color.indexOf("#") == 0 && (color.length == 7 || color.length == 4)){
        colorDiv.innerHTML = color;
        colorDiv.style.color = color;
        colorButton.value = color;
        color_field = true;
        document.getElementById("error-color").innerHTML = "";  
    }   else if (typeof colors[color] != 'undefined'){
        colorDiv.innerHTML = colors[color];
        colorDiv.style.color = colors[color];
        colorButton.value = colors[color];
        color_field = true;
        document.getElementById("error-color").innerHTML = "";  
    }   else    {
        document.getElementById("error-color").innerHTML = "Please enter a valid color name";   
        color_field = false;
    }
}

taskNameText.addEventListener("blur", checkName);
function checkName(){
    taskName = taskNameText.value;
    if(taskName == ""){
        document.getElementById("error-name").innerHTML = "Please enter a task name!";
        name_field = false;
    }   else if(taskName.length < 2){
        document.getElementById("error-name").innerHTML = "Task name has to be at least 2 letters!";
        name_field = false;
    }   else if(taskName.length > 20){
        document.getElementById("error-name").innerHTML = "Task name can not be longer than 20 letters!";
        name_field = false;
    }   else    {
        document.getElementById("error-name").innerHTML = "";
        name_field = true;
    }
}

taskPriorityText.addEventListener("blur", checkPriority);
function checkPriority(){
    taskPriority = taskPriorityText.value;
    if(taskPriority > 3){
        document.getElementById("error-priority").innerHTML = "Task priority can not be larger than 3";
        priority_field = false;
    }   else if(taskPriority < 1){
        document.getElementById("error-priority").innerHTML = "Task priority can not be smaller than 1";
        priority_field = false;
    }   else    {
        document.getElementById("error-priority").innerHTML = "";
        priority_field = true;
    }
}

taskCategoryText.addEventListener("blur", checkCategory);
function checkCategory(){
    taskCategory = taskCategoryText.value;
    if(taskCategory == ""){
        category_field = true;
    }   else if(taskCategory.length < 2){
        document.getElementById("error-category").innerHTML = "Task category has to be at least 2 letters!";
        category_field = false;
    }   else if(taskCategory.length > 15){
        document.getElementById("error-category").innerHTML = "Task category can not be longer than 15 letters!";
        category_field = false;
    }   else    {
        document.getElementById("error-category").innerHTML = "";
        category_field = true;
    }
}

taskDescriptionText.addEventListener("blur", checkDescription);
function checkDescription(){
    taskDescription = taskDescriptionText.value;
    if(taskDescription == ""){
        document.getElementById("error-description").innerHTML = "Please enter a task description!";
        description_field = false;
    }   else if(taskDescription.length < 2){
        document.getElementById("error-description").innerHTML = "Task description has to be at least 2 letters!";
        description_field = false;
    }   else if(taskDescription.length > 50){
        document.getElementById("error-description").innerHTML = "Task description can not be longer than 50 letters!";
        description_field = false;
    }   else    {
        document.getElementById("error-description").innerHTML = "";
        description_field = true;
    }
}

taskCompletionText.addEventListener("blur", checkCompletionDate);
function checkCompletionDate(){
    taskCompletion = taskCompletionText.value;
    if(taskCompletion == ""){
        document.getElementById("error-completion").innerHTML = "Please enter a task completion date!";
        taskCompletionText.type = "text";
        completion_field = false;
    }   else    {
        document.getElementById("error-completion").innerHTML = "";
        taskReminderText.setAttribute("max", taskCompletion);
        completion_field = true;
    }
}

taskReminderText.addEventListener("blur", checkReminderDate);
function checkReminderDate(){
    taskReminder = taskReminderText.value;
    if(taskReminder == ""){
        taskReminderText.type = "text";
    }   else    {
        reminder_field = true;
    }
}

submitBtn.addEventListener("", checkValidation);
form.addEventListener("submit",checkValidation);
function checkValidation(e){
    e.preventDefault();
    console.log(name_field, color_field, priority_field, category_field, description_field, completion_field);
    if(name_field && color_field && priority_field && category_field && description_field && completion_field){
        form.submit();
    }   else    {
        checkHex();
        checkColor();
        checkName();
        checkPriority();
        checkCategory();
        checkDescription();
        checkCompletionDate();
    }
}

