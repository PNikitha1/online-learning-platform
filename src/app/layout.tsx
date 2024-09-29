// app/layout.tsx
import React from 'react';
import './globals.css'; // Optional: Global CSS

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/components">Courses</a></li>
              
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Your Learning Platform</p>
        </footer>
      </body>
    </html>
  );
}
