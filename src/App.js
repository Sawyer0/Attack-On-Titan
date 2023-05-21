import React from 'react';
import AppRoutes from "./Routes";
import NavigationBar from "./NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <AppRoutes />
    </div>
  );
}

export default App;
