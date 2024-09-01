// BetterViewMessage.jsx
import React from 'react'

function MobileOnlyMessage() {
    return (
        <div className="fixed left-0 right-0 top-0 z-50 bg-red-200 p-4 text-center font-interTight text-red-800 md:hidden">
            <p>This site is better viewed on larger screens.</p>
        </div>
    )
}

export default MobileOnlyMessage
