The purpose of this file is to further explain concepts in depth what cannot be explained by simple comments within index.js itself.


**Line 11:**
document.querySelector allows us to select something from the DOM.
header is a variable(? or is it a DOM element? can it be both?) that we assigned document.querySelector("#main") to. document.querySelector("#main") uses DOM syntax to connect the index.html file, and manipulate any elements with the id tag "main". the # is an indicator for selecting by id (just like CSS)

**Line 12:**
=> "flatuser123's Personal Webpage" 
.textContent allows us to change the text of the webpage (wihtout hardcoding)
we can use .textContent after any selected or created DOM element, thus header is a DOM element
we use header here to reference line 11
userInfo is an object taken in as a parameter, and we use object syntax to locate the property named "username"

**Line 13:**
we can use .className after any selected or created DOM element to change the class to an existing css element
as long as the class exists within our style.css the css changes will be reflected on out webpage

**Line 15-16:**
we can apply .createElement after document to create any html element. this element does not yet exist with just this line in our html but will be added later (with lines 18-19 (and maybe more lines?)) to inject this html element into the existing page
to add the description to the page we want to create a p element and select the body element. THe p element will contain our description and the body is where we want this description to go
no prefix (such as #) because we are selecting based on the html element and not any id or class

**Lines 18-19:**
refer to lines 12 and 13 for explanation
for now the p element containing our description is just floating unattached to our DOM. if we refresh and look at our webpage, there will be no change

**Line 21:**
by applying .append to any existing element, you will add the *argument* of .append as a *child* of the existing element- ensuring that the new created element is reflected on your webpage.
in this case, we are calling the body element and using .append on the body and passing in the argument of description. this will take our p element and add it as a child of the body element. we pass description and not p as the argument because description is defined as the variable, not p.