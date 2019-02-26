# selecTOR
Plugin for new custom select. We can stylize and change the elements of the select as we like.

The script.js file has several functions, but we need only some of them.
For example, consider the createSelect function — the function creates an html structure for the select.
Function "select" - adds options for our select.
In the function "select" it is necessary to transfer 2 parameters (the identifier of the select and the array with the data).
The array should look like this (Change the array name to your own):

let arrayDepartment = 

[{
  'id': '1',
  'title': 'IT'
},

{
  'id': '2',
  'title': 'Frontend development'
},

{
  'id': '3',
  'title': 'Backend development'
}];

In order to initialize the select, you need to create a tag in the html file with the class "item-select".
