import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return ( 
    <div>
        <Outlet />
        <Directory /> 
    </div>
    );
};


export default Homepage;