import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Logo } from "@/components/Logo/Logo";
import { ROUTER } from "@/router/router.enum";

export default function Header() {
  return (
    <Navbar position="sticky" maxWidth="full" className="px-[50px]">
      <NavbarBrand className="grow-[0.6]">
        <Link color="foreground" href={ROUTER.HOME}>
          <Logo />
          <p className="font-semibold text-xl">thewatchspot</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-10" >
        <NavbarItem>
          <Link color="foreground" size="sm" href={ROUTER.ABOUT}>
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" size="sm" href={ROUTER.CATALOG}>
            CATALOG
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" size="sm" href={ROUTER.SALE}>
            SALE
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="gap-10" justify="end">
        <NavbarItem>
          <Button radius="sm" color="default" variant="flat" size="lg">
            +7(987)654-3210
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}