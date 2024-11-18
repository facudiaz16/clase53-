import React from 'react';
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';

function App() {
  return (
    <Router>
      	<div id="wrapper">
          <SideBar />
          <Switch>
                    <Route exact path="/" component={ContentWrapper} />
                    <Route path="/genres-in-db" component={GenresInDb} />
                    <Route path="/last-movie-in-db" component={LastMovieInDb} />
                    <Route path="/content-row-movies" component={ContentRowMovies} />
                    <Route path="*" component={Error404}  />
                </Switch>
        </div>
    </Router>
  );
}

export default App;
