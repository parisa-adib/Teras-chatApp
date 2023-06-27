import { Route, Routes } from "react-router-dom";

// Components
import Login from "./component/Login";
import Chats from "./component/Chats";
//context
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
            <Route path="/Chats" element={<Chats />} />
            <Route path="/" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
