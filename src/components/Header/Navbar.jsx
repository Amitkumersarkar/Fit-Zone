import { useState } from "react";
import Link from "../Link/Link";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { GiSkullCrossedBones } from "react-icons/gi";
const Navbar = () => {

    // declared state for toggling menubar
    const [open, setOpen] = useState(false);

    // navbar data
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" }
    ];

    return (
        <nav className=" text-xl p-4">
            <div className="md:hidden p-4 text-2xl" onClick={() => setOpen(!open)}>
                {/* applying an conditions */}
                {/* when open show cross icon and when closed show menu bar icon */}
                {
                    open === true ? <GiSkullCrossedBones /> : <BsFillMenuButtonFill />
                }

            </div>
            <ul className={`md:flex  p-5 absolute md:static rounded-xl bg-gray-800 duration-1000 ${open ? 'top-20' : '-top-60'}`}>
                {/* mapping routes data */}
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

// declared propTypes

export default Navbar;