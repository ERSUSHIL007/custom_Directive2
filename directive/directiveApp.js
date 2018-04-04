//Creating the Custom Directive
app.directive('dirProduct', function() {
    //Creating the Object for custom directive and return object
    var directive_1 = [];
    //Define the template
    directive_1.template = "<dl><dt>Name</dt>{{product.name}}<dd></dd><dt>Price</dt>{{product.price}}<dd></dd></dl>";
    //Define the type of implementation of custom directive
    directive_1.restrict = "EAC";

    //return object
    return directive_1;
});