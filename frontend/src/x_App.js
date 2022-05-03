// App.js called from index.js

// Import node components 
// import { Component } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  // Redirect 
} from 'react-router-dom';

// import build pages
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import HomePage from "./pages/HomePage/HomePage";
import ResetPage from './pages/ResetPage/ResetPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import ClassesPage from "./pages/ClassesPage/ClassesPage";
// import ViewCategories from "./pages/ViewCategories/ViewCategories";

// import SCSS
import "../src/styles/app.scss";

function App() { 
  const loggedIn = window.sessionStorage.getItem( 'isLoggedIn' ); console.log( 'loggedIn', loggedIn );

  return (
    <div className="container">
   
      <BrowserRouter>
        <SiteHeader />
        <main>   
          <Routes>
            <Route path="/" element={<HomePage loggedIn={loggedIn} />} />
            <Route path="/reset/:resetId" element={<ResetPage />} />

            <Route path="/classes" element={<ClassesPage/>} />

            {/* <Route path="/categories/:categoryId" component={ViewCategories} />
            <Route path="/categories" component={ViewCategories} /> */}

            <Route path="/exercises/:exerciseId" element={<ExercisesPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />

          </Routes>
          </main>
        <SiteFooter />
      </BrowserRouter>
      
    </div>
  );
}

export default App;