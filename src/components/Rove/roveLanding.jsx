import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'
import { useEffect } from 'react';

export default function RoveLanding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="mt-20 bg-[#F6F6F6] pb-20">
                <div className="mx-auto max-w-screen-lg">
                    <SectionHeader title="ROVE MILES LANDING PAGE" number="001" />
                    <h2 className="mt-4 font-interTight text-4xl ">
                        Rove Miles Landing Page
                    </h2>
                    <img
                        src="images/Revised Final.png"
                        className="h-[530px] max-w-full mx-auto mt-10"
                    />
                    <img
                        src="images/Revised Final 2.png"
                        className="h-[530px] max-w-full mx-auto mt-10"
                    />
                    <img
                        src="images/image 308.png"
                        className="h-[530px] max-w-full mx-auto mt-10"
                    />
                </div>
            </div>
            <div className="mt-2 bg-[white] pb-20">
                <div className="mx-auto max-w-screen-lg">
                    <SectionHeader title="ROVE MILES USER DASHBOARD" number="002" />
                    <img
                        src="images/userdashboard2.png"
                        className="h-[530px] max-w-full mx-auto mt-10"
                    />
                    <img
                        src="images/User dashboard Mobile.png"
                        className="h-[730px] max-w-full mx-auto mt-10"
                    />
                </div>
            </div>
        </div>
    )
}
