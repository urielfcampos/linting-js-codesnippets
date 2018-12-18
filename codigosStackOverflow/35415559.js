store.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
setTimeout(() => {
  store.dispatch({ type: 'HIDE_NOTIFICATION' })
}, 5000)

this.props.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
setTimeout(() => {
  this.props.dispatch({ type: 'HIDE_NOTIFICATION' })
}, 5000)

// actions.js
export function showNotification(text) {
    return { type: 'SHOW_NOTIFICATION', text }
  }
  export function hideNotification() {
    return { type: 'HIDE_NOTIFICATION' }
  }
  
  // component.js
  import { showNotification, hideNotification } from '../actions'
  
  this.props.dispatch(showNotification('You just logged in.'))
  setTimeout(() => {
    this.props.dispatch(hideNotification())
  }, 5000)

  this.props.showNotification('You just logged in.')
setTimeout(() => {
  this.props.hideNotification()
}, 5000)

// actions.js
function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  
  let nextNotificationId = 0
  export function showNotificationWithTimeout(dispatch, text) {
    // Assigning IDs to notifications lets reducer ignore HIDE_NOTIFICATION
    // for the notification that is not currently visible.
    // Alternatively, we could store the timeout ID and call
    // clearTimeout(), but we’d still want to do it in a single place.
    const id = nextNotificationId++
    dispatch(showNotification(id, text))
  
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }

// component.js
showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')

// otherComponent.js
showNotificationWithTimeout(this.props.dispatch, 'You just logged out.')   

// store.js
export default createStore(reducer)

// actions.js
import store from './store'

// ...

let nextNotificationId = 0
export function showNotificationWithTimeout(text) {
  const id = nextNotificationId++
  store.dispatch(showNotification(id, text))

  setTimeout(() => {
    store.dispatch(hideNotification(id))
  }, 5000)
}

// component.js
showNotificationWithTimeout('You just logged in.')

// otherComponent.js
showNotificationWithTimeout('You just logged out.')    

// actions.js

// ...

let nextNotificationId = 0
export function showNotificationWithTimeout(dispatch, text) {
  const id = nextNotificationId++
  dispatch(showNotification(id, text))

  setTimeout(() => {
    dispatch(hideNotification(id))
  }, 5000)
}

// component.js
showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')

// otherComponent.js
showNotificationWithTimeout(this.props.dispatch, 'You just logged out.')  

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// It still recognizes plain object actions
store.dispatch({ type: 'INCREMENT' })

// But with thunk middleware, it also recognizes functions
store.dispatch(function (dispatch) {
  // ... which themselves may dispatch many times
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })

  setTimeout(() => {
    // ... even asynchronously!
    dispatch({ type: 'DECREMENT' })
  }, 1000)
})

// actions.js
function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    return function (dispatch) {
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
  
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }

// component.js
showNotificationWithTimeout('You just logged in.')(this.props.dispatch)

// component.js
showNotificationWithTimeout('You just logged in.')(this.props.dispatch)

// actions.js

function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
  }
  
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    return function (dispatch) {
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
  
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }
  
  // component.js
  
  import { connect } from 'react-redux'
  
  // ...
  
  this.props.showNotificationWithTimeout('You just logged in.')
  
  // ...
  
  export default connect(
    mapStateToProps,
    { showNotificationWithTimeout }
  )(MyComponent)

 // component.js
if (this.props.areNotificationsEnabled) {
    showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')
  }
  
  let nextNotificationId = 0
  export function showNotificationWithTimeout(text) {
    return function (dispatch, getState) {
      // Unlike in a regular action creator, we can exit early in a thunk
      // Redux doesn’t care about its return value (or lack of it)
      if (!getState().areNotificationsEnabled) {
        return
      }
  
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
  
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }
  
  store.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
  setTimeout(() => {
    store.dispatch({ type: 'HIDE_NOTIFICATION' })
  }, 5000)
  
  
  