import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      socket.send("Hello server");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log(message.data);
      setLatestMessage(message.data);
    };
    socket.onclose = (server) => {
      console.log("Disconnected", server);
    };
  }, []);
  if (!socket) {
    return <>Connecting...</>;
  }
  return <> {latestMessage}</>;
}

export default App;
