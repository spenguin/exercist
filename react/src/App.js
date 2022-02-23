import React from 'react';
import ReactDOM from 'react-dom';

import { 
    BrowserRouter, 
    Switch, 
    Route, 
    // Redirect 
  } from 'react-router-dom';

// const Root = () => <h1>Hello World from React</h1>;

// import build pages
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import HomePage from "./pages/HomePage/HomePage";

import "./App.css";

let container = document.getElementById('app');
let component = <App/>;


function App() {
    return (
      <BrowserRouter>
        <SiteHeader />
          <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
  
            {/* <Route path="/create" component={CreateClasses} />
  
            <Route path="/categories/:categoryId" component={ViewCategories} />
            <Route path="/categories" component={ViewCategories} />
  
            <Route path="/exercises/:exerciseId" component={ViewExercises} />
            <Route path="/exercises" component={ViewExercises} /> */}
  
          </Switch>
          </main>
        <SiteFooter />
      </BrowserRouter>
    );
  }

ReactDOM.render(component, container);