TO DO

FRONT END
+edit buttons: cancel should be a button in the style of 'create new', maybe the check, too.
+get companies tabs working: create companies/clients, prospects api route
-get rid of bootstrap: will have to modify nav bar and make sure reset is OK.
-sort: add sort to list: will have to add a sort param in API.
-safely delete: 'end date' a 'deleted' item.
-button animation and maybe shadow
-'create new' button should have item type name.
-'create new' modal doesn't rerender list.
-delete modal doesn't rerender.
-required fields creating new record.
-make List a HOC (its children should be arguments or elements of a hash map)
-select date for new job order modal (import library);
-create new company
-create loading animation
-date picker popper hidden in modal if screen size vertical is too small. need scroll.
-notes input needs to automatically get bigger. multiple notes??
-upon create new item and save, show new item expanded.


API
+create /companies/clients, prospects api route for companies tabs.
-extract API from project. should have two apps. i think.
-see sort requirement in front end
-safely delete: 'end date' a 'deleted' item.
-console.log is repeated for every model function. create 'middleware' that will prevent this repetition.
