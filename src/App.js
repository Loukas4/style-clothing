import { Routes, Route } from "react-router-dom";

import Homepage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from './routes/authentication/authentication.component'
import Shop from "./routes/shop/shop.component";

const App = () => {
  return  (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element= {<Homepage />}/>
      <Route path='/shop' element={<Shop />} />
      <Route path='/auth' element={<Authentication />} />
    </Route>
  </Routes>)
};

export default App;