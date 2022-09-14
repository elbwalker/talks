// Example to demonstrate the advantages of a descritpve approach

// Loop all entities
queryScope(document.body, "[data-elb]", function (entity) {
  console.log(`------`);
  const entityName = entity.getAttribute("data-elb");

  // Loop all acctions
  queryScope(entity, "[data-elbaction]", function (action) {
    const actionName = action.getAttribute("data-elbaction");
    console.log("event", entityName, actionName);
  });

  // Get all properties
  const properties = [];
  const propertyAttr = `data-elb-${entityName}`;
  queryScope(entity, `[${propertyAttr}]`, function (prop) {
    properties.push(prop.getAttribute(propertyAttr));
  });
  console.log("properties", properties);
});

// Ugly helper functions, please just ignore it and look above
function queryScope(scope, selector, func) {
  [scope, ...scope.querySelectorAll(selector)]
    .filter((el) => el.matches(selector))
    .map((elem) => {
      func.call(scope, elem);
    });
}
