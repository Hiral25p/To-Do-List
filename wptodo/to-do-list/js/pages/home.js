function displayModal(modalID){
    document.querySelector(modalID).style.display="flex";
}

function hideModal(){
    document.querySelector(modalID).style.display="none";
}

const single_task_delete_buttons = document.querySelectorAll('.task-delete');

single_task_delete_buttons.forEach(el => el.addEventListener('click', event => {
  console.log(el.id);
  id = el.id;
  document.querySelector("#singleTaskDeleteConfirm").href = `delete.php?type=singleTask&id=${id}`;
}));

const section_delete_buttons = document.querySelectorAll('.section-delete');

section_delete_buttons.forEach(el => el.addEventListener('click', event => {
  console.log(el.id);
  id = el.id;
  document.querySelector("#sectionDeleteConfirm").href = `delete.php?type=section&id=${id}`;
}));

function getQueryStrings() {
    let queryParams = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
    let vars = [];
    queryParams.forEach(params => {
        let pair = params.split("=");
        let key = pair[0];
        let value = pair[1];
        vars[key] = value;
    });
    return vars;
}

let query = getQueryStrings();
console.log(query);

let operation = query["op"];
let stat = query["status"];

if(operation == "delete" && stat == "success"){
    toast = document.getElementById("delete-successful");
    toast.className = "toast display";
    setTimeout(function(){ toast.className = toast.className.replace("display", ""); }, 3000);;
}
else if(operation == "delete" && stat == "failure"){
    toast = document.getElementById("delete-unsuccessful");
    toast.className = "toast display";
    setTimeout(function(){ toast.className = toast.className.replace("display", ""); }, 3000);;
}
else if(operation == "add" && stat == "success"){
    toast = document.getElementById("add-successful");
    toast.className = "toast display"
    setTimeout(function(){toast.className = toast.className.replace("display", ""); }, 3000);
}

function removeFilters(params){
    console.log("Hello");
    console.log(params.has("op"));
    if(params.has('op')){
        params.delete("op");
        params.delete("status");
    }
}

let category_form = document.querySelector("#category-input-form");
let priority_form = document.querySelector("#priority-input-form");
let creation_form = document.querySelector("#creation-input-form");
let completion_form = document.querySelector("#completion-input-form");

category_form.addEventListener("submit",(evt) => addFilterQueryStrings("category", category_form, evt))
priority_form.addEventListener("submit",(evt) => addFilterQueryStrings("priority", priority_form, evt))
creation_form.addEventListener("submit",(evt) => addFilterQueryStrings("creation", creation_form, evt))
completion_form.addEventListener("submit",(evt) => addFilterQueryStrings("completion", completion_form, evt))

function addFilterQueryStrings(type, form, e){
    e.preventDefault();
    let params = new URLSearchParams(location.search);
    removeFilters(params);
    let filter_with = form.children[0].value;
    params.set('filter', type);
    params.set('filter-by', filter_with);
    window.location.replace(`${location.pathname}?${params.toString()}`);
}

let sort_name = document.querySelector('#sort-item-name');
let sort_priority = document.querySelector('#sort-item-priority');
let sort_creation = document.querySelector('#sort-item-creation');
let sort_completion = document.querySelector('#sort-item-completion');

sort_name.addEventListener("click", (evt) => addSortQueryStrings("name", evt));
sort_priority.addEventListener("click", (evt) => addSortQueryStrings("priority", evt));
sort_creation.addEventListener("click", (evt) => addSortQueryStrings("creation", evt));
sort_completion.addEventListener("click", (evt) => addSortQueryStrings("completion", evt));

function addSortQueryStrings(type, e){
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    removeFilters(params);
    params.set("sort", type);
    window.location.replace(`${location.pathname}?${params.toString()}`)
}

let sort_remove = document.querySelector("#sort-item-remove");
let filter_remove = document.querySelector("#filter-item-remove");

sort_remove.addEventListener("click", (evt) => removeQueryStrings("sort", evt));
filter_remove.addEventListener("click", (evt) => removeQueryStrings("filter", evt));

function removeQueryStrings(type, e){
    e.preventDefault();
    let params = new URLSearchParams(location.search);
    removeFilters(params);
    if(type == "filter"){
        params.delete("filter");
        params.delete("filter-by");
    }   else if (type == "sort"){
        params.delete("sort");
    }
    window.location.replace(`${location.pathname}?${params.toString()}`);   
}