/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Table from "./Table.js";

const OfficeTable = new Table(10,10);
const OfficeTable2 = new Table(10,10);
console.log(OfficeTable);
console.log(OfficeTable.height);
OfficeTable.setHeight(5);
console.log(OfficeTable2.height);
