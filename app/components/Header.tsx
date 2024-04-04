import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { SearchIcon } from "./icons/Searchicon";

const Header = () => {
    return (
        <div>
            <Navbar isBordered maxWidth="2xl">
                <NavbarContent justify="start">
                    <NavbarBrand className="mr-4">
                        <p className="hidden sm:block font-bold text-inherit">MoviesFind</p>
                    </NavbarBrand>
                    
                </NavbarContent>

                <NavbarContent as="div" className="items-center" justify="end">
                    <Input
                        classNames={{
                            base: "max-w-full md:w-[400px] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchIcon size={18} />}
                        type="search"
                    />
                    
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default Header;