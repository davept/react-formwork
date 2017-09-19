# React-Formwork

#### Conventions

* If no title is supplied the name will be used.  In this case the name will be split by capital letters or spaces into words.
  This works in most cases.  Notably it fails for acronyms such as ISBN where you get "I S B N"  In failure cases you should
  supply a title.  N.b., spaces are legal in HTML form names and JavaScript object property names.
* An array supplied to elements means full definitions are included.  The expectation then is that each array element is an object containing form element definitions.
* An object supplied to elements means text names only.  The reason is so that a form can easily be constructed from a json object. 

#### Testing

npm run test

#### Create dist build

npm run dist
