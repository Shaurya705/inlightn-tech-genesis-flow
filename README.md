# Inlightn Tech Genesis Flow

![Inlightn Tech Logo](public/favicon.ico)

## Project Overview

Inlightn Tech Genesis Flow is a modern, responsive web application built for an educational technology platform that offers specialized training programs in cutting-edge tech fields. The application features a clean, professional UI with interactive elements, smooth animations, and a comprehensive set of sections showcasing the company's offerings.

**Live Demo**: [Inlightn Tech Genesis Flow](https://lovable.dev/projects/48c9a3f6-037c-4445-b217-c50bd33cb909)

## Features

### 🚀 Modern UI/UX
- Responsive design that works on all devices
- Interactive animations and particle system
- Dark/Light theme toggle with persistent user preference
- Smooth scrolling navigation

### 📚 Featured Sections
- **Hero Section**: Dynamic introduction with animated particle background
- **About Section**: Company values and unique selling points
- **Programs Section**: Detailed showcase of educational programs
  - Cybersecurity
  - Full Stack Development
  - Data Science
  - And more...
- **Verification Section**: Tools to verify certificates and credentials
- **Contact Section**: Easy to use contact form

### 🛠️ Technical Features
- Component-based architecture
- Theme management system
- Toast notifications
- Form validation
- Routing system
- React Query for data fetching

## Tech Stack

- **React**: UI Library
- **TypeScript**: Static typing
- **Vite**: Fast build tooling
- **React Router**: Routing
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality UI components
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Beautiful SVG icons
- **React Query**: Data fetching library
- **React Hook Form**: Form management

## Getting Started

### Prerequisites

- Node.js (v16.0 or later)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <REPOSITORY_URL>

# Navigate to project directory
cd inlightn-tech-genesis-flow

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
inlightn-tech-genesis-flow/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── animations/    # Animation components
│   │   └── ui/           # UI components from shadcn
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── .eslintrc.json        # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run build:dev`: Build for development
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Customization

### Theming
The application uses Tailwind CSS for styling and supports both light and dark modes. Theme preferences are stored in localStorage.

To customize the theme:
1. Edit the `tailwind.config.ts` file to modify colors, fonts, etc.
2. Update the `ThemeProvider.tsx` component for theme switching logic

### Adding New Pages
1. Create a new component in the `pages` directory
2. Add a new route in `App.tsx`
```tsx
<Route path="/your-new-page" element={<YourNewPage />} />
```

## Deployment

### Using Lovable
1. Visit [Lovable Project](https://lovable.dev/projects/48c9a3f6-037c-4445-b217-c50bd33cb909)
2. Click on Share -> Publish

### Manual Deployment
The project can be deployed to any platform that supports static site hosting:

1. Run `npm run build` to generate production files
2. Upload the contents of the `dist` directory to your hosting provider

### Custom Domain Setup
To connect a custom domain to your Lovable project:

1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the instructions provided

For more details, see: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Lovable](https://lovable.dev/) for the development and deployment platform
