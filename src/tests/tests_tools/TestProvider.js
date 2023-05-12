import { Provider } from "react-redux";
import { store } from "../../store";

const TestProvider = ({ children }) => {
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default TestProvider;