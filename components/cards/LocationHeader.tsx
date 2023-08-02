import Shield from "@/components/sheild";
import {TypographyLead, TypographyMuted} from "@/components/ui/typography";
import {CardHeader} from "@/components/ui/card";


// @ts-ignore
export default function LocationHeader({location}) {
    return (
        <CardHeader>
            <div className="flex flex-grow-0">
                <Shield route={location.route} width={90} height={90} className={'flex-none'} />
                <div className={'pt-4 text-left flex-grow-3'}>
                    <TypographyLead className="pl-2 text-black">{location.nearbyPlace}</TypographyLead>
                    {location.direction && (<TypographyMuted className="pl-2 text-muted-foreground text-center">{location.direction}bound</TypographyMuted>)}
                </div>
            </div>
        </CardHeader>
    )
}