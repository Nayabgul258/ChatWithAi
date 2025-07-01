import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ChatProvider } from "./context/ChatContaxt.jsx";

export const server = "https://chatwithai-backend-m6wa.onrender.com";

createRoot(document.getElementById("root")).render(

  <UserProvider>
    <ChatProvider>
    <StrictMode>
       <App />
     </StrictMode>
  </ChatProvider>
  </UserProvider>
 
);
