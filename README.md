# React snackbar/toast component

##Installation

```
npm install --save react-snackbar-toast
```

or

```
yard add react-snackbar-toast
```

##Usage

Wrap your application with SnackbarProvider

```
// App.js
import React from 'react'
import {SnackbarProvider} from 'react-snackbar-toast'
import MessageComponent from './MessageComponent'

export default function App() {
  return (
    <SnackbarProvider>
        <MessageComponent/>
    </SnackbarProvider>
  )
}
```

Then you can use useSnackbar() hook on any descendant functional component:

```
// MessageComponent.js
import React from 'react'
import useSnackbar from 'react-snackbar-toast'

export default function SomeChildComponent() {
  const {addToast} = useSnackbar()

  return (
    <div>
      <button onClick={() => addToast('Snackbar content')}>
        Click to open the Snackbar!
      </button>
    </div>
  )
}
```

These methods are are returned from useSnackbar() hook in array destructuring syntax:

```
const [addToast, removeToast] = useSnackbar()
```

### addToast(node, [options])

```
    addToast('Hey')
    addToast('<b>Hey</b>')
    addToast('Hey', {autoDismiss: false, type: 'success'})
```

### removeToast(id)

Remove the particular snackbar with returned id from addToast.

```
    let toastId = addToast('Hey', {autoDismiss: false});
    removeToast(toastId)
```
    

## Options

Options object can be passed to customize the Snackbar. This option can be passed with useSnackbar(node, options):

    autoDismissTime: Used to give auto dismissal time for snackbar. By Default it is 3000ms.
                    addToast('Hey', {autoDismissTime: 10000});

    autoDismiss: To disable auto dismissal of snackbar.
                 addToast('Hey', {autoDismiss: false});

    icon: To provide custom icon for snackbar. 
          addToast('Hey', {icon: 'http://www.img.com/img});

    type: Two types 'success' and 'error'.
          addToast('Hey', {autoDismiss: false, type: 'success'})
          
    component: We can custom component for snackabr.
                addToast(<somecomponent/>)
    retry: To show retry button in snackbar.
            addToast('something wrong',, {autoDismiss: false, type: 'error', retry: () => {//do retry here}} )

