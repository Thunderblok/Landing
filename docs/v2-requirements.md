# OKO Landing V2 - Design Requirements

## Project Overview
High command has approved a complete redesign direction for the OKO Landing page, moving away from the current approach to a more interactive 3D experience.

## Design Direction Evolution

### V1 (Current)
- Modern sleek parallax with material design
- Cyberpunk/neon aesthetic
- Hero banner with SVG logos
- Static 3D elements
- GitHub Pages deployment

### V2 (New Direction)
- Interactive 3D hexagon prisms in 3D space
- Billboard-style rotation effects (inspired by 3D word clouds)
- User interaction with individual hexagonal elements
- Neon wireframe aesthetic maintained
- Enhanced 3D physics and particle systems

## Technical Requirements

### Core Technologies
- **Framework**: Next.js 15.4.4 (static export for GitHub Pages)
- **Styling**: Tailwind CSS with custom neon themes
- **3D Engine**: React Three Fiber + Drei + Three.js
- **Deployment**: GitHub Actions → GitHub Pages
- **Domain**: okoholding.com

### 3D Components Needed

#### Interactive Hexagon Prisms
- Individual hexagonal prism geometries
- Billboard-style rotation towards camera
- Hover/click interactions
- Neon glow materials
- Spherical distribution in 3D space
- Smooth animations and transitions

#### Visual Effects
- Neon wireframe grid backgrounds
- Particle systems
- Post-processing effects (bloom, glow)
- Dynamic lighting
- Fog effects for depth

#### User Interactions
- Mouse/touch interaction with 3D elements
- Orbit controls for camera movement
- Responsive design for mobile/desktop
- Performance optimization

## Design Inspiration Sources

## Technical References

### Previous CodeSandbox Examples
- **Instanced Boxes Grid**: High command liked this 3D grid of rotating boxes with hover effects
- **Word Cloud**: Spherical distribution with billboard text and TrackballControls  
- **Interactive Elements**: Users can interact with 3D elements, hover effects, cursor changes

### New Reference Examples (Latest)
- **Reference 1**: https://codesandbox.io/p/sandbox/4jr4p?file=%2Fsrc%2FApp.js
- **Reference 2**: https://codesandbox.io/p/sandbox/bst0cy?file=%2Fsrc%2FApp.js

*Note: These are the latest examples provided by high command for the new direction*

### Key Visual Elements
- **Color Palette**: Neon cyan (#00ffff), hot pink (#ff0080), electric blue (#0080ff)
- **Materials**: Wireframe, transparent, emissive neon effects
- **Animation**: Smooth rotations, pulsing effects, wave patterns
- **Layout**: Floating elements, depth-based composition

## Content Structure

### Hero Section
- 3D hexagon cloud with company branding
- Interactive elements showing different aspects of OKO
- Camera controls for exploration

### Feature Sections
- Each feature represented by interactive hexagon clusters
- Smooth transitions between sections
- Maintained neon aesthetic throughout

### Technical Specs
- Responsive design (mobile/tablet/desktop)
- Performance optimized (60fps target)
- SSR compatibility with dynamic imports
- Error boundaries for 3D content

## Implementation Plan

### Phase 1: New Repo Setup
- [ ] Create new repository structure
- [ ] Set up Next.js + Tailwind + Three.js stack
- [ ] Configure GitHub Pages deployment
- [ ] Basic 3D scene setup

### Phase 2: Core 3D Components
- [ ] Hexagon prism geometry component
- [ ] Billboard rotation system
- [ ] Spherical distribution algorithm
- [ ] Basic interaction handlers

### Phase 3: Visual Polish
- [ ] Neon materials and shaders
- [ ] Particle systems
- [ ] Post-processing pipeline
- [ ] Responsive camera controls

### Phase 4: Content Integration
- [ ] Company branding integration
- [ ] Section-based hexagon clusters
- [ ] Smooth section transitions
- [ ] Mobile optimization

## Current Tech Stack Inventory
```json
{
  "dependencies": {
    "next": "15.4.4",
    "react": "18.3.1",
    "@react-three/fiber": "8.16.8",
    "@react-three/drei": "9.114.0",
    "three": "0.164.1",
    "tailwindcss": "latest"
  },
  "build": "static export",
  "deployment": "GitHub Pages",
  "domain": "okoholding.com"
}
```

## Notes for High Command
- V1 landing page remains live during V2 development
- All existing deployment infrastructure can be reused
- Domain switching can be seamless
- 3D performance testing needed across devices

## Pending Design Elements
- [ ] Additional design references from high command
- [ ] Specific hexagon interaction behaviors
- [ ] Content mapping to 3D elements
- [ ] Performance requirements
- [ ] Mobile interaction patterns

---
*Last Updated: July 28, 2025*
*Status: Awaiting additional design elements from high command*
