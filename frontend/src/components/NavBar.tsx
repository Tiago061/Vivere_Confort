import { Input } from "@base-ui-components/react";
import { Link } from "react-router";
import { Search } from 'lucide-react';

const NavBar = () => {
    return(
       <div className="w-full flex items-center justify-center ">
          <nav className="flex items-center justify-center gap-30 h-[7vh]">
            <div className="flex items-center gap-10 text-primary">
               <Link to="/" className="font-josefin font-bold text-[34px]">Vivere Confort</Link>
               <Link to="/Home" className="font-lato">Home</Link>
               <Link to="/Pages " className="font-lato">Pages</Link>
               <Link to="/Products" className="font-lato">Products</Link>
               <Link to="/Blog" className="font-lato">Blog</Link>
               <Link to="/Shop" className="font-lato">Shop</Link>
               <Link to="/Contact" className="font-lato">Contact</Link>
            </div>
            <div className="flex items-center">
               <div className="flex h-8  ">
                  <Input type="text" className=" w-56 border-2 border-input focus:outline-none focus:ring-0 " />
                  <div className="bg-search w-10 flex items-center justify-center">
                     <Search className="w-5 h-5 text-white"/>
                  </div>
               </div>
             </div>
          </nav>
       </div>
    );
}

export default NavBar;