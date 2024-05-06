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
        <Navbar className={'m-3 max-w-screen'} position={"sticky"} isBlurred>
            <NavbarBrand className={'mt-3'}>
                <Tabs defaultValue="/" className="w-full" value={pathname}>
                    <TabsList>
                        <TabsTrigger value="/" key={'/'}>
                            <Link href={'/'} prefetch={true}> {/* Capitalize the first letter of the path*/}
                                <HomeIcon className={'w-full h-full'} />
                            </Link>
                        </TabsTrigger>
                        {path !== '/' && path.split('/').map((path, index) => {
                            if (path === '/') return null
                            if (index == 0) return null

                            let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                            let pathName = urlToDisplay(path)

                            if (pathName === 'Cms') pathName = 'CMS'





                            return (
                                <TabsTrigger value={`${path_up_until_current}`}>
                                    <Link href={path_up_until_current} prefetch={true} key={`/${path_up_until_current}/`}> {/* Capitalize the first letter of the path*/}
                                        {pathName}
                                    </Link>
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                </Tabs>
            </NavbarBrand>
            <NavbarContent justify="end" className={'mr-6'}>
                <NavbarItem>
                    <Link href="#">Login</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
/*
<Navbar shouldHideOnScroll className={'w-screen mb-3'}>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="absolute left-10 top-5 items-center space-x-2">
                        <NavbarContent className="flex" justify="start">

                            <NavbarContent className={'justify-end'}>

<NavbarItem className={''}>
    <Link href={'/about'}>
        <InfoIcon className={'w-full h-full'} />
    </Link>
</NavbarItem>
</NavbarContent>
</NavbarContent>


</nav>

</div>
</Navbar>
 */
