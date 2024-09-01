import BlockchainConclusion from '../components/Blockchain/blockchainConclusion'
import BlockchainExecs from '../components/Blockchain/blockchainExecs'
import BlockchainFlyer from '../components/Blockchain/blockchainFlyer'
import BlockchainIntro from '../components/Blockchain/blockchainIntro'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Blockchain() {
    return (
        <div className="">
            <Navbar />
            <BlockchainIntro />
            <BlockchainFlyer />
            <BlockchainExecs />
            <BlockchainConclusion />
            <Footer />
        </div>
    )
}
