import React from 'react'
import CustomLoader from '@/components/CustomLoader'


export default function loading() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <CustomLoader />
        </main>
    )
}
