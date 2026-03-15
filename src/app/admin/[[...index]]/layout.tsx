import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Airla CMS Editor',
    description: 'Sanity Studio for Airla',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, backgroundColor: 'white' }}>
            {children}
        </div>
    )
}
