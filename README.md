###Modals in react###

##Problem: CSS issues##
When modal is nested within React component structure, CSS problems can arise because of stacking and z-index

##Solution: Make modal child of document.body##
Use fake modal component to create new modal component that is child of body
