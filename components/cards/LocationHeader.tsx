import Shield from "@/components/sheild";
import {TypographyLead, TypographyMuted} from "@/components/ui/typography";
import {CardDescription, CardHeader, CardTitle} from "@/components/ui/card";


// @ts-ignore
export default function LocationHeader({location}) {
    return (
        <CardHeader>
            <div className="flex flex-grow-0">
                <Shield route={location.route} width={90} height={90} className={'flex-none'} />
                <div className={'pt-4 text-justify flex-grow-3'}>
                    <CardTitle className="pl-2 text-foreground">{location.nearbyPlace}</CardTitle>
                    {location.direction && (<CardDescription className="pl-2 text-muted-foreground text-center">{location.direction}bound</CardDescription>)}
                </div>
            </div>
        </CardHeader>
    )
}
