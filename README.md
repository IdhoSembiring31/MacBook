<img width="1800" height="520" alt="image" src="https://github.com/user-attachments/assets/13f0cdde-6353-471b-985c-ea0f23dfb53e" />

Apple Vision Pro Landing Page Clone
React
Tailwind CSS
GSAP
Three.js
Sebuah rekreasi modern dan responsif dari landing page Apple Vision Pro, dibangun dengan teknologi web terkini. Proyek ini menfokuskan pada animasi halus berbasis scroll, desain premium dengan gradient border, masonry layout, dan integrasi 3D model viewer.
developer.apple.comdribbble.comsupport.apple.com


Fitur Utama

Animasi Scroll Premium → Menggunakan GSAP + ScrollTrigger untuk fade-in, slide, dan stagger effects yang responsif (disesuaikan untuk mobile/desktop).
Masonry Grid Layout → Section highlights dengan dua kolom yang sama tinggi, justify-between untuk distribusi vertikal sempurna, dan gradient border custom.
3D Product Viewer → Integrasi React Three Fiber (R3F) dengan canvas untuk model interaktif.
Desain Apple-Inspired → Tipografi bersih, gradient colorful, dark mode native, dan rounded elements yang presisi.
Fully Responsive → Optimasi untuk mobile, tablet, dan desktop dengan Tailwind breakpoints.
Performa Tinggi → Lazy animations, smooth scrolling, dan code splitting.

gsap.comgsap.com

Tech Stack

Framework: React / Next.js (atau Vite + React)
Styling: Tailwind CSS + PostCSS
Animations: GSAP (GreenSock) dengan ScrollTrigger
3D: React Three Fiber (@react-three/fiber) + Drei
Fonts: Custom OTF fonts (Regular, Medium, SemiBold, Bold)
Other: useGSAP hook, useMediaQuery untuk responsive triggers

Instalasi
Bashgit clone https://github.com/username/apple-vision-pro-clone.git
cd apple-vision-pro-clone
npm install # atau yarn install / pnpm install

# Untuk dependencies utama
npm install tailwindcss postcss autoprefixer gsap @gsap/react @react-three/fiber @react-three/drei
Cara Menjalankan
Bashnpm run dev # atau yarn dev
Buka http://localhost:3000 (atau port sesuai config) di browser.
Struktur Proyek (Ringkas)
textsrc/
├── components/     # Sections: Hero, ProductViewer, Highlights, dll
├── styles/         # PostCSS/Tailwind config
├── assets/         # Fonts, images, 3D models
├── App.jsx         # Main component
└── main.jsx        # Entry point dengan GSAP setup
Kredit

Terinspirasi dari desain resmi Apple Vision Pro (apple.com).
Animasi dibangun dengan GSAP – https://gsap.com
Gradient border technique dari berbagai best practices CSS modern.

License
MIT License – bebas digunakan untuk belajar atau portfolio pribadi. Tidak untuk komersial yang meniru brand Apple secara langsung.
