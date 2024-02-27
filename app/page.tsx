import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Choices from "@/components/home/choices";
export const runtime = 'edge'

export default function Home() {
    return (
        <MaxWidthWrapper className="text-center align-middle h-full pt-20">
            <div className="border-gray-300 m-5">
                <TypographyH1 className={"m-3"}>
                    <Balancer>
                        Caltrans Cameras
                    </Balancer>
                </TypographyH1>
                <TypographyLead>
                    <Balancer>
                        A consolidated collection of all public available cameras and other road related data in the
                        state of California
                    </Balancer>
                </TypographyLead>
            </div>

            <Choices/>

        </MaxWidthWrapper>


    )
}
