# CMS Vite App

A modern Content Management System built with Vite, React, Shadcn UI, and deployed on Cloudflare Pages.

## Features

- ⚡️ **Lightning Fast**: Built with Vite for instant HMR and optimized builds
- 🎨 **Beautiful UI**: Crafted with Shadcn UI components and Tailwind CSS
- 📝 **Content Management**: Full CRUD dashboard for managing content sections
- 💾 **Local Storage**: Persist content using browser localStorage
- 🚀 **Edge Deployment**: Optimized for Cloudflare Pages global edge network
- 📱 **Responsive**: Mobile-first design that works on all devices

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Build the project:

```bash
npm run build
# or
bun run build
```

Preview the production build:

```bash
npm run preview
# or
bun preview
```

## Deployment to Cloudflare Pages

### Option 1: Cloudflare Dashboard

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your Git repository
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy!

### Option 2: Wrangler CLI

1. Install Wrangler:

```bash
npm install -g wrangler
```

2. Login to Cloudflare:

```bash
wrangler login
```

3. Deploy:

```bash
wrangler pages deploy dist
```

### Environment Variables

No environment variables are required for basic functionality. Content is stored in the browser's localStorage.

## Project Structure

```
├── src/
│   ├── app/
│   │   └── globals.css         # Global styles and Tailwind config
│   ├── components/
│   │   └── ui/                 # Shadcn UI components
│   ├── lib/
│   │   ├── storage.ts          # localStorage utilities
│   │   └── utils.ts            # Helper functions
│   ├── pages/
│   │   ├── HomePage.tsx        # Public-facing content page
│   │   └── DashboardPage.tsx   # Content management dashboard
│   ├── App.tsx                 # Main app component with routing
│   └── main.tsx                # Application entry point
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── wrangler.toml               # Cloudflare Pages configuration
└── _redirects                  # SPA routing configuration
```

## Usage

### Managing Content

1. Navigate to `/dashboard` to access the content management interface
2. Click "Add Section" to create new content blocks
3. Edit existing sections using the pencil icon
4. Toggle visibility with the eye icon
5. Delete sections with the trash icon
6. Reorder sections by changing the "Order" value

### Viewing Content

1. Navigate to `/` to see the public-facing website
2. Only visible sections are displayed, ordered by their order value
3. Content updates immediately after saving in the dashboard

## Features Roadmap

- [ ] Export/Import content as JSON
- [ ] Image upload functionality
- [ ] Rich text editor for descriptions
- [ ] Drag-and-drop reordering
- [ ] Content versioning
- [ ] Multi-language support
- [ ] Theme customization

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.