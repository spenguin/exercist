// App.js called from index.js

// Import node components 
// import { Component } from "react";
import { 
  BrowserRouter, 
  Switch, 
  Route, 
  // Redirect 
} from 'react-router-dom';

// import build pages
// import SiteHeader from "./components/SiteHeader/SiteHeader";
// import SiteFooter from "./components/SiteFooter/SiteFooter";
// import HomePage from "./pages/HomePage/HomePage";
// import CreateClasses from "./pages/CreateClasses/CreateClasses";
// import ViewCategories from "./pages/ViewCategories/ViewCategories";
// import ViewExercises from "./pages/ViewExercises/ViewExercises";



// import SCSS
// import "../src/styles/app.scss";

function App() {
  return (
    <p>New App</p>
    // <BrowserRouter>
    //   <SiteHeader />
    //     <main>
    //     <Switch>
    //       <Route path="/" exact component={HomePage} />

    //       <Route path="/create" component={CreateClasses} />

    //       <Route path="/categories/:categoryId" component={ViewCategories} />
    //       <Route path="/categories" component={ViewCategories} />

    //       <Route path="/exercises/:exerciseId" component={ViewExercises} />
    //       <Route path="/exercises" component={ViewExercises} />

    //     </Switch>
    //     </main>
    //   <SiteFooter />
    // </BrowserRouter>
  );
}

export default App;
