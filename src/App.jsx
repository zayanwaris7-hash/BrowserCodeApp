
import Backyard from "./componenets/Backyard"
import { Provider } from "react-redux"
import { store } from "./createConext/Store"

function App() {
  
  return (
    <>
    <Provider store={store}>
    <Backyard/>
    </Provider>
    </>
  )
}

export default App
