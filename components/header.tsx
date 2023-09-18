'use client'
import Link from "next/link";
import {Button} from "@nextui-org/react";
import {HomeIcon, InfoIcon, MapIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {Spacer} from "@nextui-org/react";
import {urlToDisplay} from "@/lib/utils";
import {TypographyH2, TypographyLead, TypographyMuted} from "@/components/ui/typography";

export default function Header() {
    const pathname = usePathname()
    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
    }, [pathname]);


    //let path_up_until = pathname.split('/').slice(0, index).join('/')
    //                                 return (
    //                                     <div>
    //                                         <Link href={path_up_until}>
    //                                             <Button variant={'ghost'}> {path} </Button>
    //                                         </Link>
    //                                         {' / '}
    //                                     </d

    return (
        <header className="absolute z-40 w-full z-45 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 backdrop-blur-xl">
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="absolute left-10 top-5 items-center space-x-2">
                        <Link href={"/"}>
                            <Button variant={'light'} size={'lg'}>  <TypographyMuted>
                                Home
                            </TypographyMuted> </Button>
                        </Link>
                        {path.split('/').map((path, index) => {
                            if (path === '/' || index == 0) return null

                            let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                            let pathName = urlToDisplay(path)

                            if (pathName === 'Cms') pathName = 'CMS'





                            return (
                                <>
                                    <Button variant={'light'} isDisabled className={'pointer-events-none'}> <TypographyMuted>
                                        {' / '}

                                    </TypographyMuted> </Button>
                                    <Link href={path_up_until_current} className={'ml-1 mr-1'}> {/* Capitalize the first letter of the path*/}
                                        <Button variant={'light'}>
                                            <TypographyMuted>
                                            {pathName}
                                            </TypographyMuted>
                                            </Button>
                                    </Link>
                                </>

                            )
                        })}
                    </nav>
                    <nav className="absolute right-10 top-5">
                        {
                            path === '/map' ? null : (
                                <Link href={"/map"} className={''}>
                                    <Button variant={'light'} isIconOnly> <MapIcon size={16}></MapIcon> </Button>
                                </Link>
                            )
                        }
                        <Link href={"/"} className={'m-1'}>
                            <Button variant={'light'} isIconOnly> <InfoIcon size={16}></InfoIcon> </Button>
                        </Link>
                    </nav>
                </div>
        </header>
    )
}