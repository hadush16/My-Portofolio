# Digital Marketing Course Platform - Design Guidelines

## Design Approach

**Hybrid Strategy:** Drawing inspiration from leading e-learning platforms (Udemy, Coursera) combined with modern SaaS aesthetics (Linear, Stripe) to create a trustworthy yet contemporary learning environment. The design balances marketing appeal with functional clarity across three distinct user experiences.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 245 70% 55% (Vibrant purple - trust and education)
- Primary Hover: 245 70% 48%
- Secondary: 210 100% 96% (Light blue - calm backgrounds)
- Accent: 160 70% 50% (Teal - success, enrollment CTAs)
- Text Primary: 222 47% 11%
- Text Secondary: 215 16% 47%
- Background: 0 0% 100%
- Surface: 220 13% 98%
- Border: 214 20% 90%
- Success: 142 76% 36%
- Warning: 38 92% 50%
- Error: 0 72% 51%

**Dark Mode:**
- Primary: 245 70% 65%
- Primary Hover: 245 70% 58%
- Secondary: 217 33% 17%
- Accent: 160 70% 55%
- Text Primary: 210 40% 98%
- Text Secondary: 215 20% 65%
- Background: 222 47% 11%
- Surface: 217 33% 17%
- Border: 215 28% 25%

### B. Typography

**Font Stack:**
- Headings: 'Inter', sans-serif (700, 600, 500)
- Body: 'Inter', sans-serif (400, 500)
- Monospace: 'JetBrains Mono' (for course codes, prices)

**Scale:**
- Hero H1: text-5xl md:text-6xl font-bold
- Section H2: text-3xl md:text-4xl font-bold
- Card Titles: text-xl font-semibold
- Body: text-base leading-relaxed
- Caption: text-sm text-secondary

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Tight spacing: p-2, gap-2 (within components)
- Standard: p-4, gap-4, p-6 (cards, sections)
- Generous: p-8, p-12, p-16 (page containers, hero)
- Section padding: py-16 md:py-24

**Grid Systems:**
- Course Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Dashboard Stats: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
- Feature Blocks: grid-cols-1 lg:grid-cols-2 gap-12
- Container max-width: max-w-7xl mx-auto px-4

### D. Component Library

**Navigation:**
- Top navbar: sticky, backdrop-blur-md, border-b, shadow-sm
- Logo + primary nav links + user dropdown/CTA
- Mobile: Hamburger with slide-out menu
- Active state: border-b-2 with primary color

**Course Cards:**
- Elevated design with hover lift: shadow-md hover:shadow-xl transition-shadow
- Image ratio: aspect-video with overlay gradient on hover
- Badge system: Skill level (top-left), Discount % (top-right) as pills
- Content: Course title (2 lines max), Instructor name with avatar, Rating stars
- Pricing: Strike-through original price, large discounted price, accent-colored "Enroll" button
- Footer: Duration, Lesson count, Student count with icons

**Dashboards:**
- Sidebar navigation: Fixed left sidebar (desktop), collapsible (tablet)
- Role-specific icon set and color coding
- Main content area: Header with page title + quick actions, Stats cards row, Content sections
- Tables: Striped rows, hover states, sortable headers, action dropdowns

**Forms:**
- Floating labels or clear top labels
- Full-width inputs with focus ring in primary color
- Error states: Red border + icon + message below
- File uploads: Drag-and-drop zones with preview
- Multi-step forms: Progress stepper for course creation

**Buttons:**
- Primary: bg-primary text-white with hover:bg-primary-hover
- Secondary: border-2 border-primary text-primary hover:bg-secondary
- Outline on images: backdrop-blur-sm bg-white/20 border-white text-white (no custom hover states)
- Icon buttons: Rounded-full with hover:bg-secondary
- Sizes: px-4 py-2 (sm), px-6 py-3 (base), px-8 py-4 (lg)

**Data Display:**
- Progress bars: Rounded-full with gradient fills
- Statistics cards: Icon + number + label + trend indicator
- Badges: Rounded-full px-3 py-1 text-xs font-medium
- Rating stars: Golden filled/outline with half-star support
- Enrollment status: Colored dots + text labels

**Modals/Overlays:**
- Backdrop: bg-black/50 backdrop-blur-sm
- Content: max-w-2xl rounded-lg shadow-2xl
- Close button: Absolute top-right with hover:bg-secondary
- Confirmation dialogs: Icon + title + description + action buttons

### E. Page-Specific Layouts

**Landing Page (Marketing):**
- Hero: Full-width with background gradient (purple to blue diagonal), large heading + subheading, dual CTAs ("Browse Courses" primary, "Become Instructor" secondary), trust indicators (student count, course count, rating)
- Featured Courses: 3-column grid, "View All" link
- Category Showcase: 6 icon-based category cards in grid
- Testimonials: 3-column cards with student photos, quotes, course taken
- Instructor CTA: Split section with instructor benefits + "Join as Instructor" form
- Footer: Rich footer with links, newsletter signup, social icons

**Course Listing:**
- Sticky filter sidebar (desktop) or collapsible panel (mobile)
- Filters: Category checkboxes, Price range slider, Skill level radio, Rating filter, Search input
- Main area: Sort dropdown + grid of course cards
- Pagination: Numbered with prev/next
- "No results" state with suggestions

**Course Detail:**
- Hero section: Course image (left 60%), Info panel (right 40% sticky) with price, enrollment button, includes list
- Tabbed content: Overview, Curriculum (accordion sections), Instructor (bio + other courses), Reviews (list + rating breakdown)
- Related courses carousel at bottom

**Dashboards:**
- Admin: Stats overview (4 cards), Recent activities table, Charts (revenue, enrollments), Quick actions
- Instructor: My courses grid with edit/stats buttons, Earnings chart, Student enrollments table, Create course CTA
- Student: Continue learning carousel, Enrolled courses grid with progress rings, Certificates earned, Recommended courses

## Images

**Hero Image:** Large, professional image of diverse students in modern learning environment, bright and aspirational. Positioned full-width with gradient overlay (purple-to-transparent) for text legibility. Image height: min-h-[600px]

**Course Thumbnails:** High-quality graphics representing course topics (e.g., social media icons for social marketing, analytics graphs for data courses). Consistent 16:9 ratio, vibrant but professional.

**Instructor Photos:** Circular avatars (64x64px in cards, 128x128px in profiles), professional headshots with neutral backgrounds.

**Category Icons:** Use Heroicons for category representations (e.g., ChartBarIcon for Analytics, DevicePhoneMobileIcon for Mobile Marketing).

**Empty States:** Friendly illustrations for "no courses," "no enrollments" - use unDraw or similar illustration library.

## Animation Principles

Minimal and purposeful:
- Card hover: Subtle lift (translateY(-4px)) + shadow increase
- Button interactions: Scale(0.98) on click
- Page transitions: Fade-in on route change
- Loading states: Skeleton screens, not spinners
- NO scroll-triggered animations, parallax, or decorative motion

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus indicators: 2px ring in primary color with offset
- Keyboard navigation: Full support with visible focus states
- ARIA labels: All interactive elements labeled
- Dark mode: Consistent implementation across all inputs, maintaining contrast ratios

This design system creates a professional, trustworthy educational platform that emphasizes course discovery and seamless enrollment while maintaining clarity across complex multi-role dashboards.