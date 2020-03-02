# React snackbar/toast component
Find demo [here](https://codesandbox.io/s/recursing-flower-0xrvz?fontsize=14&hidenavigation=1&theme=dark)
## Installation

```
npm install --save react-snackbar-toast
```

or

```
yard add react-snackbar-toast
```

## Usage

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

export default function MessageComponent() {
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

if you are having class component then wrap your component withSnackbar()

```
import React from 'react'
import { withSnackbar } from 'react-snackbar-toast'
 
class SomeComponent extends React.Component {
  render() {
    const { addToast, removeAllToast } = this.props
 
    return (
      <div>
        <button onClick={() => addToast('This is the content of the Snackbar.')}>
          Click here to open the Snackbar.
        </button>
        <button onClick={removeAllToast}>
          Click here to remove all snackbars.
        </button>
      </div>
    )
  }
}
export default withSnackbar(SomeComponent)

```

These methods are are returned from useSnackbar() hook in array destructuring syntax:

```
const {addToast, removeToast, removeAllToast} = useSnackbar()
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

### removeAllToast()

Remove all active snackbars.

```
    addToast('Hey', {autoDismiss: false});
    addToast('Hey', {autoDismiss: false});
    removeAllToast()
```
    

## Options

Options object can be passed to customize the Snackbar. This option can be passed with useSnackbar(node, options):

    autoDismissTime:(number) Used to give auto dismissal time for snackbar. By Default it is 3000ms.
                    addToast('Hey', {autoDismissTime: 10000});

    autoDismiss:(Boolean) To disable auto dismissal of snackbar.
                 addToast('Hey', {autoDismiss: false});

    icon:(string) To provide custom icon for snackbar. 
          addToast('Hey', {icon: 'http://www.img.com/img});

    type:(string) Two types 'success' and 'error'.
          addToast('Hey', {autoDismiss: false, type: 'success'})

    className:(string) adds the custom className to snackbar.
          addToast('Hey', {className: 'customClass'})

    closeButton:(Boolean) adds the close button to snackbar.
          addToast('Hey', {closeButton: true})

    closeIcon:(string) To provide custom icon to close button.
          addToast('Hey, How are you today?', {closeButton: true, closeIcon: 'http://www.img.com/img});
          
    component:(ReactNode) We can custom component for snackabr.
                addToast(<somecomponent/>)

    retry:(Function) To show retry button in snackbar.
            addToast('something wrong', {autoDismiss: false, type: 'error', retry: () => {//do retry here}} )

