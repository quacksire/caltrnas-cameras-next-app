import MaxWidthWrapper from "@/components/max-width-wrapper";
import TopContent from "@/components/TopContent";


export default function Layout({children}) {
    return (
        <MaxWidthWrapper className="text-center align-middle h-full">
            <TopContent link={'chain-control'} />
            <div className={'m-3'}>
                {children}
            </div>
        </MaxWidthWrapper>
    )
}