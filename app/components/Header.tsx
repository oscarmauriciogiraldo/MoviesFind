import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { SearchIcon } from "./icons/Searchicon";
import styles from "./../../styles/Header.module.scss"

const Header = () => {
    return (

        <header className={styles.header}>
            <div className={styles.headerNavbar}>
                <div className={styles.logo}>
                    <h1>MoviesFind</h1>
                </div>
                <div className={styles.contentNav}>

                </div>
            </div>
            <div className="searchContainer">

            </div>
        </header>

        

        
    );
};

export default Header;