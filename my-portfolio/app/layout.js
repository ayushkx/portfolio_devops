import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Ayush Kushwaha | Automation & DevOps Engineer",
  description:
    "Portfolio of Ayush Kushwaha, Automation & DevOps Engineer specializing in Ansible, Terraform, Python, ServiceNow, VMware, NetApp, AWS, and Azure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
