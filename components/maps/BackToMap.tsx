import {usePathname} from "next/navigation";
import {TypographySmall} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

export default function BackToMap() {
    const pathname = usePathname()

    return (
        <>
            {pathname !== '/map' ? (
                <Link href={'/map'}>
                    <Button variant={'link'} className={'flex '}>
                        <ChevronLeft size={16} />
                    <TypographySmall>
                         Back To Map
                    </TypographySmall>
                    </Button>
                </Link>
            ) : null}
        </>)
}