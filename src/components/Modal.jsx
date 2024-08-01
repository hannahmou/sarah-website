import { useEffect } from 'react'

const Modal = ({ open, onClose }) => {
    useEffect(() => {
        if (open) {
            document.body.classList.add('hide-scrollbar')
        } else {
            document.body.classList.remove('hide-scrollbar')
        }

        return () => {
            document.body.classList.remove('hide-scrollbar')
        }
    }, [open])

    if (!open) return null

    return (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center bg-black bg-opacity-50">
            <button
                onClick={onClose}
                className="absolute left-20 top-6 font-interTight text-2xl text-white"
            >
                X
            </button>

            <div className="relative m-28 flex max-h-full max-w-full flex-col overflow-hidden rounded-xl">
                <img
                    src="images\Blueprint\blueprintDetailInstaPost1.png"
                    className=""
                />
            </div>
            {/* <button className="absolute right-20">
                <img src="images\Icons\instagramArrowNext.png" />
            </button> */}
        </div>
    )
}

export default Modal
