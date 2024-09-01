import React from 'react'
import { useState } from 'react'
function MobileOnlyMessage() {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
    }

    return (
        isVisible && (
            <div className="fixed left-0 right-0 top-0 z-50 bg-red-200 p-4 text-center text-red-800 lg:hidden">
                <div className="flex items-center justify-between">
                    <p>This site is better viewed on larger screens.</p>
                    <button
                        onClick={handleClose}
                        className="text-red-800 hover:text-red-600 focus:outline-none"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>
            </div>
        )
    )
}

export default MobileOnlyMessage
