// ./src/index.jsx

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from "./main.component.jsx";
import Video from "./video.component.jsx";
import Home from "./download.component.jsx"


render(
    <Router  history={browserHistory}>
       <Route path="/" component={Main}>
            <IndexRoute component={Home} />
        		 <Route path="/video" >
          			   <Route path=":id" component={Video} />
          		</Route>
      </Route>
    </Router>,
    document.getElementById("main")
	);