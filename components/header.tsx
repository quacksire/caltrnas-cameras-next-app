'use client'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {HomeIcon, InfoIcon, MapIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {Spacer} from "@nextui-org/react";
import {urlToDisplay} from "@/lib/utils";
import {TypographyH2, TypographyLead, TypographyMuted} from "@/components/ui/typography";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {districtNames} from "@/lib/lists";

export default function Header() {
    const pathname = usePathname()
    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
    }, [pathname]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar shouldHideOnScroll className={'w-screen mb-3'}>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="absolute left-10 top-5 items-center space-x-2">
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden mt-4"
                        >
                            <Button>
                                <HomeIcon className={'text-foreground'} />
                            </Button>
                        </NavbarMenuToggle>
                        <NavbarContent className="hidden sm:flex" justify="start">
                            <Tabs defaultValue="/" className="w-[400px]" value={pathname}>
                                <TabsList>
                                    <TabsTrigger value="/" key={'/'}>
                                        <Link href={'/'}> {/* Capitalize the first letter of the path*/}
                                            <HomeIcon />
                                        </Link>
                                    </TabsTrigger>
                                    {path.split('/').map((path, index) => {
                                        if (path === '/') return null
                                        if (index == 0) return null

                                        let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                                        let pathName = urlToDisplay(path)

                                        if (pathName === 'Cms') pathName = 'CMS'





                                        return (
                                            <TabsTrigger value={`${path_up_until_current}`}>
                                                <Link href={path_up_until_current} key={`/${path_up_until_current}/`}> {/* Capitalize the first letter of the path*/}
                                                        {pathName}
                                                </Link>
                                            </TabsTrigger>
                                        )
                                    })}
                                </TabsList>
                            </Tabs>




                        </NavbarContent>
                        <NavbarMenu>
                            <NavbarMenuItem className={'w-full'}>
                            <Link href={"/"} className={'w-full content-center'}>
                                <Button variant={'ghost'} size={'lg'} >  <TypographyMuted>
                                    <HomeIcon />
                                </TypographyMuted> </Button>
                            </Link>
                            </NavbarMenuItem>
                            <Tabs defaultValue="/" className="w-[400px]" value={pathname}>
                                <TabsList>
                                    <TabsTrigger value="/" key={'/'}>
                                        <Link href={'/'}> {/* Capitalize the first letter of the path*/}
                                            <HomeIcon />
                                        </Link>
                                    </TabsTrigger>
                                    {path.split('/').map((path, index) => {
                                        if (path === '/') return null
                                        if (index == 0) return null

                                        let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                                        let pathName = urlToDisplay(path)

                                        if (pathName === 'Cms') pathName = 'CMS'





                                        return (
                                            <TabsTrigger value={`${path_up_until_current}`}>
                                                <Link href={path_up_until_current} key={`/${path_up_until_current}/`}> {/* Capitalize the first letter of the path*/}
                                                    {pathName}
                                                </Link>
                                            </TabsTrigger>
                                        )
                                    })}
                                </TabsList>
                            </Tabs>
                        </NavbarMenu>

                    </nav>
                    <NavbarItem className={'mt-1 sm:mt-5'}>
                        <Link href={"/"} className={'m-1'}>
                            <Button variant={'ghost'}> <InfoIcon /> </Button>
                        </Link>
                    </NavbarItem>
                </div>
        </Navbar>
    )
}
