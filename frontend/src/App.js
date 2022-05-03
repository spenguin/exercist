// App.js called from index.js

// Import node components 
import { userState } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  // Redirect 
} from 'react-router-dom';

// Import components
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
  // const loggedIn = window.sessionStorage.getItem( 'isLoggedIn' ); console.log( 'loggedIn', loggedIn );

  return (
    <div className="container">
   
      <BrowserRouter>
        <SiteHeader />
        <main>   
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reset/:resetId" element={<ResetPage />} />

            <Route path="/classes" element={<ClassesPage/>} />

            {/* <Route path="/categories/:categoryId" component={ViewCategories} />
            <Route path="/categories" component={ViewCategories} /> */}

            <Route 
              path="/exercises/:exerciseId" 
              element={
                <PrivateRoute>
                  <ExercisesPage />
                </PrivateRoute>
              }
            />

            <Route 
              path="/exercises" 
              element={
                <PrivateRoute>
                  <ExercisesPage />
                </PrivateRoute>
              }
            />            

          </Routes>
          </main>
        <SiteFooter />
      </BrowserRouter>
      
    </div>
  );
}

export default App;