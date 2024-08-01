import Modal from '../Modal'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'
import { useState } from 'react'

export default function BluePrintSummary() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="mx-auto max-w-screen-lg">
            <SectionHeader title="SUMMARY" number="001" />
            <div className="mb-4">
                <SectionTitle title="Instagram-interactive!" />
            </div>
            <div className="relative rounded-[30px] border-[5px] border-gray-200">
                <div className="relative rounded-3xl border-[25px] border-black">
                    {/* INSIDE INSTAGRAM */}
                    <div className="mt-8">
                        <img src="images/Blueprint/blueprintInstaHeader.png" />
                        <hr className="mx-28" />
                        <img
                            src="images/Blueprint/blueprintInstaPostHeader.png"
                            className="mx-auto"
                        />
                        <div className="mx-28 mt-4 grid grid-flow-col grid-cols-3">
                            <button onClick={() => setOpenModal(true)}>
                                <img src="images/Blueprint/blueprintInstaPost1.png" />
                            </button>
                            <img src="images/Blueprint/blueprintInstaPost2.png" />
                            <img src="images/Blueprint/blueprintInstaPost3.png" />
                        </div>
                    </div>
                    <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                    />
                </div>
            </div>
        </div>
    )
}
