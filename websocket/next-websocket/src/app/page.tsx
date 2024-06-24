"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("socket is open for communication");
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
  return (
    <>
      <div>asdfjkas</div>
      {latestMessage}
    </>
  );
}
