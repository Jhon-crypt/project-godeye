import DashboardHeader from "../components/header/dashboard-header"

export const metadata = {
    title: 'Dashboard',
    description: '',
}

export default function DashboardLayout({ children}) {

    return (
        <html lang="en">
            <body>
                <DashboardHeader />
                {children}
            </body>
        </html>
    )
}
