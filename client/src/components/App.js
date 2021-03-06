import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'

// const Page1 = () => {
//   return <div>Page1</div>;
// };

// const Page2 = () => {
//   return <div>Page2

//     <Link to="/">Go to Page 1</Link>
//   </div>;
// };

const App = () => {
  return <div className="ui container">
    <BrowserRouter>
      <div>
      <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/new" exact component={StreamCreate} />
        <Route path="/edit" exact component={StreamEdit} />
        <Route path="/delete" exact component={StreamDelete} />
        <Route path="/show" exact component={StreamShow} />
      </div>
    </BrowserRouter>
  </div>;
};

export default App