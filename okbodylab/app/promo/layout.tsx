export default function PromoLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
            <body className="bg-black text-white">
                {children}
            </body>
        </html>
    );
}
