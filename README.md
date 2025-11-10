# Buffy's Monster Adoption Center 🧛‍♀️✨

A gloriously nostalgic early 2000s-style website for adopting monsters from the Buffy the Vampire Slayer and Angel universes!

## Features

- **Home Page** - Flashy welcome with marquee text, animated effects, and visitor counter
- **Monster Gallery** - Browse all adoptable monsters with filters by show and adoption status
- **Monster Detail Pages** - Detailed profiles for each creature with stats, abilities, and care info
- **Adoption Cart** - Add monsters to your cart and manage your selections
- **My Collection** - View all the monsters you've adopted
- **About Page** - Learn about the adoption center and its mission
- **Guestbook** - Sign the guestbook and see what others are saying

## Early 2000s Aesthetic

This site brings back the glory days of the early web with:
- Comic Sans font (naturally)
- Bright, clashing neon colors (hot pink, lime green, cyber purple)
- Animated gradients and glowing effects
- Marquee scrolling text
- Ridge/groove borders
- Custom cursor effects
- Blinking text
- "Under construction" sections
- Hit counter and retro badges
- "Best viewed in IE6" badge

## Tech Stack

- **React 19** with TypeScript
- **TanStack Router** for type-safe routing
- **Vite** for fast development and building
- **CSS** with custom properties for the retro aesthetic
- Client-side only (no backend/database)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── routes/              # TanStack Router routes
│   ├── __root.tsx      # Root layout with navigation
│   ├── index.tsx       # Home page
│   ├── gallery.tsx     # Monster gallery
│   ├── monster.$monsterId.tsx  # Monster detail page
│   ├── cart.tsx        # Adoption cart
│   ├── collection.tsx  # User's adopted monsters
│   ├── about.tsx       # About page
│   └── guestbook.tsx   # Guestbook
├── data/
│   └── monsters.ts     # Mock monster data
├── hooks/
│   └── useAdoption.tsx # Adoption cart context/hook
├── index.css           # Early 2000s styling
└── routeTree.gen.ts    # Auto-generated route tree
```

## Monster Data

The app includes 12 memorable characters from Buffy and Angel:
- Harmony Kendall
- Spike
- Lorne
- Clem
- Drusilla
- Anya (Anyanka)
- BuffyBot
- Whistler
- Sweet
- Darla
- Illyria
- Oz

Each monster has:
- Species and show of origin
- Danger level (1-5 stars)
- Personality traits
- Special abilities
- Dietary needs
- Bio and backstory
- Age and last episode appearance

## Features Walkthrough

### Browse & Filter
- View all monsters in a grid layout
- Filter by show (Buffy/Angel)
- Filter by adoption status (Available/Pending/Adopted)
- See danger levels and quick stats

### Adopt Process
1. Browse the gallery
2. Click "Add to Cart" for monsters you like
3. Go to your cart to review selections
4. Adopt individual monsters or all at once
5. View your collection of adopted monsters

### Interactive Elements
- Sparkle cursor trail on home page
- Animated gradients and glowing borders
- Spinning stars on monster cards
- Floating emojis in header
- Blinking text effects
- Marquee scrolling announcements

## Browser Support

Built with modern browsers in mind, but styled to look like it was made for Internet Explorer 6!

## License

This is a fan project created for fun and educational purposes. All Buffy the Vampire Slayer and Angel characters and references are property of 20th Television/Disney.

## Disclaimer

⚠️ Not responsible for any dimensional rifts, apocalypses, or vampire attacks resulting from monster adoption. Adopt at your own risk! ⚠️

---

Made with 💜 and lots of early 2000s nostalgia
