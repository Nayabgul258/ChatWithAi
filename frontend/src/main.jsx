import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ChatProvider } from "./context/ChatContaxt.jsx";

export const server = "http://localhost:5000";

createRoot(document.getElementById("root")).render(

  <UserProvider>
    <ChatProvider>
    <StrictMode>
       <App />
     </StrictMode>
  </ChatProvider>
  </UserProvider>
 
);
