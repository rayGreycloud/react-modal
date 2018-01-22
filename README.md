### Modals in react ###

## Problem: CSS issues ##
When modal is nested within React component structure, CSS problems can arise because of stacking and z-index

## Solution: Make modal child of document.body##
Create fake modal component nested within root component

Use lifecycle method componentWillMount to create new modal component that is child of body

Use separate render method to inject modal child elements into it

Use componentWillUpdate to update modal if changed

Use componentWillUnmount to remove modal and clean up DOM

Import Provider and store into modal to connect colors.js

Wrap props.children inside Provider and pass in store
