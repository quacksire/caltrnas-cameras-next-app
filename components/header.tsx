'use client'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {HomeIcon, InfoIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {urlToDisplay} from "@/lib/utils";

export default function Header() {
    const pathname = usePathname()
    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(pathname)
        console.log(pathname)
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
        <header className="sticky top-3 z-40 w-full bg-transparent">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 backdrop-blur-xl">
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="absolute left-10 top-5 items-center space-x-2">
                        <Link href={"/"}>
                            <Button variant={'ghost'}> <HomeIcon size={32}></HomeIcon> </Button>
                        </Link>
                        {path.split('/').map((path, index) => {
                            if (path === '/' || index == 0) return null

                            let path_up_until_current = pathname.split('/').slice(0, index + 1).join('/')

                            let pathName = urlToDisplay(path)

                            if (pathName === 'Cms') pathName = 'Change'





                            return (
                                <>
                                    {' / '}
                                    <Link href={path_up_until_current}> {/* Capitalize the first letter of the path*/}
                                        <Button variant={'ghost'}> {pathName} </Button>
                                    </Link>
                                </>

                            )
                        })}
                    </nav>
                    <nav className="absolute right-10 top-5">
                        <Link href={"/"}>
                            <Button variant={'ghost'}> <InfoIcon size={32}></InfoIcon> </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}