export const metadata = {
    title: 'Godeye',
    description: 'Demo',
}

export default function DemoLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ background: "#000000" }}>{children}</body>
        </html>
    )
}