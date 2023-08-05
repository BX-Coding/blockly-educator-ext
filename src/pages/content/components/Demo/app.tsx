import { useEffect } from "react";
import { ContentDisplay } from "../ContentDisplay";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return <ContentDisplay />;
}
