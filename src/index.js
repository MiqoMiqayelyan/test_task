import React from 'react';
import { createRoot } from "react-dom/client";
import { MovieSearchPage } from "./components/MovieSearch";

const container = document.getElementById("root");
const root = container && createRoot(container);
root?.render(<MovieSearchPage />);
