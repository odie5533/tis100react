# NeoCities2K - Retro Website Builder & Social Platform

A nostalgic recreation of early 2000s personal website builders (like GeoCities/Angelfire) with modern social features. Built with React + Vite, this is a fully functional frontend prototype celebrating the creative, personal spirit of the early web.

## 🌟 Features

### Core Functionality
- **Landing Page** with random site discovery and featured sites carousel
- **Site Builder** with drag-and-drop components and live preview
- **User Dashboard** with XP system, badges, and activity feed
- **Neighborhoods** - thematic communities (Music Row, Tech Quarter, Artist Alley, Gaming Zone, Blog Boulevard)
- **Web Rings** - connect sites with shared interests
- **User Profiles** with customizable avatars, status, bio, and Top Friends
- **Site Viewing** with retro browser frame and web ring navigation
- **Explore Page** with trending sites, new sites, and "Surf Mode"

### Social Features
- **Poke System** - Poke other users to say hi!
- **Guestbook** - Leave messages with ASCII art support
- **Reactions** - React to sites with Cool!, Nostalgic!, Creative!
- **XP & Leveling** - Earn experience points and level up
- **Badges** - Unlock achievements for various activities
- **Top Friends** - Showcase your favorite connections

### Retro Aesthetics
- Web-safe color palettes
- Classic fonts: Comic Sans MS, Impact, Times New Roman, Arial, Verdana, Georgia
- Beveled borders and buttons (inset/outset styles)
- Drop shadows on text
- Animated GIF support
- Scrolling marquee text
- Blinking elements
- Visitor counters (odometer style)
- "Under Construction" graphics
- Tiled/repeating backgrounds
- Star backgrounds

### Special Features
- **Chaos Mode** - Enable for maximum retro effects (rainbow colors, spinning logos, wiggling content)
- **Konami Code Easter Egg** - Try the classic code! (↑↑↓↓←→←→BA)
- **Surf Mode** - Auto-advance through random sites
- **Browser Frame** - View sites in a retro Netscape-style browser window
- **Console ASCII Art** - Fun message in browser console

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/          # Images, GIFs, backgrounds, cursors
├── components/      # Reusable React components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── retro/       # Retro UI components
│   ├── builder/     # Site builder components
│   └── social/      # Social feature components
├── context/         # React Context for state management
├── data/            # Mock data (users, sites, web rings, etc.)
├── pages/           # Page components
│   ├── LandingPage.jsx
│   ├── Dashboard.jsx
│   ├── SiteBuilder.jsx
│   ├── Explore.jsx
│   ├── Neighborhoods.jsx
│   ├── WebRings.jsx
│   ├── UserProfile.jsx
│   └── SiteView.jsx
├── styles/          # Global styles and CSS modules
├── App.jsx          # Main App component with routing
└── main.jsx         # Entry point
```

## 🎨 Mock Data

The project includes extensive mock data:
- 30 users with varied profiles and badges
- 50+ sites across different neighborhoods
- 15 web rings with different themes
- Guestbook entries with ASCII art
- Activity feeds and notifications
- 10 unique achievement badges

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero and random site button |
| `/dashboard` | User dashboard with sites and stats |
| `/builder` | Create a new site |
| `/builder/:siteId` | Edit an existing site |
| `/explore` | Discover sites with trending and new sections |
| `/neighborhoods` | Browse all neighborhoods |
| `/neighborhoods/:name` | View specific neighborhood |
| `/rings` | Browse all web rings |
| `/rings/:ringId` | View specific web ring |
| `/user/:username` | View user profile |
| `/sites/:siteId` | View individual site |

## 🎯 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **React Context API** - State management
- **CSS Modules** - Component styling
- **LocalStorage** - Persisting pokes and visit counts

## 🎨 Design Philosophy

This project aims to authentically recreate the early 2000s web aesthetic - not as parody or irony, but as a loving celebration of that era's creativity and personal expression. The design embraces:

- Bold, expressive colors and fonts
- Personal customization over uniformity
- Creative freedom over design constraints
- Community and connection over isolation
- Fun and playfulness over seriousness

## ✨ Future Enhancements

Potential additions for future versions:
- Backend integration for real data persistence
- User authentication and registration
- Real-time chat in web rings
- Image/GIF upload functionality
- More site templates and themes
- Music player widget (MIDI/MP3 support)
- Cursor trail effects
- More web ring navigation features
- Site analytics and statistics
- Search functionality
- User messaging system

## 📝 Notes

- This is a **frontend-only prototype** with mock data
- No backend or database is required
- All data is stored in the `src/data` directory
- Some interactions use localStorage for persistence
- The site is fully responsive and works on mobile devices

## 🎮 Try the Konami Code!

Press: ↑ ↑ ↓ ↓ ← → ← → B A

Watch the console for a surprise! 🎮✨

## 💖 Made with Love

Built in the spirit of the early 2000s web - a time when the internet was weird, wonderful, and deeply personal.

---

**Best viewed in 800x600 resolution** 😉
