import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'

export default function About() {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-screen-lg px-12 pb-16">
                <div>
                    <p className="pt-12 font-interTight text-2xl">hey, i'm</p>
                    <div className="grid grid-flow-col grid-cols-8">
                        <div className="col-span-3">
                            <h1 className="font-highTower text-[190px] font-normal italic leading-[90px] -tracking-[0.04em] text-black">
                                sarah mou
                            </h1>
                            <div className="text-md flex space-x-7 pb-4 pt-10 font-interTight font-normal -tracking-tight">
                                <p>001</p>
                                <p>INFO</p>
                            </div>
                            <p className="text-md font-interTight leading-[23px]">
                                Hi! I’m a graphic/product designer located in
                                Berkeley and Irvine, California!
                            </p>
                            <br></br>
                            <p className="text-md font-interTight leading-[23px]">
                                As a lifelong perfectionist and naturally
                                indecisive (I’m a Libra), the tiny choices in
                                design captivate me. I love watching video
                                essays—whether they’re 30 minutes or 6 hours
                                long—that delve into art, movies, and everyday
                                objects.
                            </p>

                            <br></br>
                            <p className="text-md font-interTight leading-[23px]">
                                Design, to me, is its own little secret
                                language. A button being at the top of the page
                                versus at the bottom of the page has its own
                                backstory, and can tell so much about the
                                intention of the app, the purpose of the button,
                                and the style of the application—yet so many
                                times does this story go overlooked and
                                underappreciated.
                            </p>
                            <br></br>
                            <p className="text-md font-interTight leading-[23px]">
                                In my time as a designer, I hope to uncover that
                                story, truly understand them, and share that
                                beauty with others.
                            </p>
                        </div>
                        <div className="col-span-5 flex justify-center">
                            <img
                                className="h-max"
                                src="images/About/aboutSarah.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto bg-[#F6F6F6]">
                <div className="mx-auto mt-16 max-w-screen-lg px-12 pb-16">
                    <div>
                        <div className="grid grid-flow-col grid-cols-2">
                            <div className="pr-10 pt-12">
                                <div className="text-md flex space-x-7 pb-4 pt-20 font-interTight font-normal -tracking-tight">
                                    <p>002</p>
                                    <p>EDUCATION</p>
                                </div>
                                <h1 className="font-highTower text-5xl italic">
                                    University of California, Berkeley
                                </h1>
                                <p className="pt-8 font-interTight">
                                    Intended Cognitive Science, B.A.
                                </p>
                                <p className="font-interTight">
                                    Intended Berkeley Certification in Design
                                    Innovation
                                </p>
                                <p className="font-interTight">May 2027</p>
                            </div>
                            <div className="px-4 pt-20">
                                <img src="images\About\aboutOski.png" />
                                <p className="p-4 text-center font-interTight">
                                    Me & Oski &lt;3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-screen-lg">
                <div className="text-md flex space-x-7 pb-4 pt-20 font-interTight font-normal -tracking-tight">
                    <p>003</p>
                    <p>FUN FACTS</p>
                </div>
            </div>
            <div>
                <div className="relative">
                    <div className="absolute left-0 right-0 top-16 -mx-12 h-[300px] bg-[#F8EBF1]"></div>{' '}
                    <div className="relative z-10 mx-auto grid max-w-screen-lg grid-cols-3 gap-6">
                        <div className="p-2">
                            <img src="images/About/aboutChina.png" />
                            <p className="pt-4 text-center font-interTight">
                                I went to China this summer!{' '}
                            </p>
                        </div>
                        <div className="p-2">
                            <img src="images/About/aboutHannah.png" />
                            <p className="pt-4 text-center font-interTight">
                                I have an identical twin! (Hi Hannah :P){' '}
                            </p>
                        </div>
                        <div className="p-2">
                            <img src="images/About/aboutCats.png" />
                            <p className="pt-4 text-center font-interTight">
                                I have two cats named Soy and Bean (a reference
                                off of my dog’s name, Tofu){' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
