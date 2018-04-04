//creating the custom directive
app.directive('dirLogin', function() {
    //creating object
    dirObj = [];
    dirObj.templateUrl = "./public/login.html";
    dirObj.restrict = "E";

    //return object
    return dirObj;
});