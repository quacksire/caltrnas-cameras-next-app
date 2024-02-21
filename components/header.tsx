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
import {districtNames} from "@/lib/lists";

export default function Header() {
    const pathname = usePathname()
    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
    }, [pathname]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    //let path_up_until = pathname.split('/').slice(0, index).join('/')
    //                                 return (
    //                                     <div>
    //                                         <Link href={path_up_until}>
    //                                             <Button variant={'ghost'}> {path} </Button>
    //                                         </Link>
    //                                         {' / '}
    //                                     </d

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
                                <NavbarItem>
                                    <Link href={"/"}>
                                        <Button variant={'ghost'} size={'lg'}>  <TypographyMuted>
                                            <HomeIcon className={'text-foreground'} />
                                        </TypographyMuted> </Button>
                                    </Link>
                                </NavbarItem>

                            {path.split('/').map((path, index) => {
                                if (path === '/' || index == 0) return null

                                let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                                let pathName = urlToDisplay(path)

                                if (pathName === 'Cms') pathName = 'CMS'





                                return (
                                    <NavbarItem key={`${path}-${index}`}>
                                        <Button variant={'ghost'} disabled className={'pointer-events-none w-min'} key={path_up_until_current}> <TypographyMuted>
                                            {'/'}
                                        </TypographyMuted> </Button>
                                        <Link href={path_up_until_current} key={`/${path_up_until_current}/`}> {/* Capitalize the first letter of the path*/}
                                            <Button variant={'ghost'}>
                                                <TypographyMuted>
                                                    {pathName}
                                                </TypographyMuted>
                                            </Button>
                                        </Link>
                                    </NavbarItem>

                                )
                            })}
                        </NavbarContent>
                        <NavbarMenu>
                            <NavbarMenuItem className={'w-full'}>
                            <Link href={"/"} className={'w-full content-center'}>
                                <Button variant={'ghost'} size={'lg'} >  <TypographyMuted>
                                    <HomeIcon />
                                </TypographyMuted> </Button>
                            </Link>
                            </NavbarMenuItem>
                            {path.split('/').map((path, index) => {
                                if (path === '/' || index == 0) return null

                                let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                                let pathName = urlToDisplay(path)

                                if (pathName === 'Cms') pathName = 'CMS'





                                return (
                                    <NavbarMenuItem key={path_up_until_current}>
                                        <Link href={path_up_until_current} key={`/${path_up_until_current}/`}> {/* Capitalize the first letter of the path*/}
                                            <Button variant={'ghost'} size={'lg'}>
                                                <TypographyMuted>
                                                    {pathName}
                                                </TypographyMuted>
                                            </Button>
                                        </Link>
                                    </NavbarMenuItem>

                                )
                            })}
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
