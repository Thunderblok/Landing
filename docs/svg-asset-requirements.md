# SVG Asset Requirements for OKO Holding Landing Page

## Overview
This document outlines the exact SVG assets needed from the art team to complete the interactive 3D landing page. All assets will be integrated into a modular React component system with particle physics and live dashboard elements.

## Primary Logo Assets (High Priority)

### 1. OKO Holding Main Logo
- **Filename**: `oko-logo-main.svg`
- **Size**: 80x80px base (scalable)
- **Style**: Modern hexagonal design with corporate feel
- **Colors**: Primary orange (#FB9260), secondary dark gray
- **Usage**: Main hero logo, navigation, branding
- **Features**: Clean lines, professional, minimal bevel effects

### 2. Thunderline Product Logo
- **Filename**: `thunderline-logo.svg`  
- **Size**: 48x48px base (scalable)
- **Style**: Lightning/speed theme with hexagonal frame
- **Colors**: Electric blue (#3B82F6), lightning white accents
- **Usage**: Product showcase module, feature sections
- **Features**: Dynamic lightning bolt, energy patterns

### 3. Thunderblock Product Logo
- **Filename**: `thunderblock-logo.svg`
- **Size**: 48x48px base (scalable)
- **Style**: Blockchain/storage theme with hexagonal frame
- **Colors**: Matrix green (#22C55E), dark accents
- **Usage**: Product showcase module, infrastructure sections
- **Features**: Connected blocks/cubes, grid patterns

### 4. Thunderbit Product Logo
- **Filename**: `thunderbit-logo.svg`
- **Size**: 48x48px base (scalable)
- **Style**: Micro-processing/bit theme with hexagonal frame
- **Colors**: Cyber purple (#9333EA), data flow accents
- **Usage**: Product showcase module, technology sections
- **Features**: Circuit patterns, data nodes, micro elements

## Interactive Elements (Medium Priority)

### 5. Particle Hexagons
- **Filename**: `particle-hex-small.svg`, `particle-hex-medium.svg`
- **Sizes**: 6x6px, 12x12px (scalable)
- **Style**: Minimal hexagonal particles for 3D scene
- **Colors**: Variable (passed as props)
- **Usage**: 3D particle system, floating animations
- **Features**: Simple, clean hex shapes, optimized for performance

### 6. Data Flow Arrows
- **Filename**: `data-arrow-horizontal.svg`, `data-arrow-vertical.svg`
- **Sizes**: 24x12px, 12x24px (scalable)
- **Style**: Futuristic directional indicators
- **Colors**: Variable (theme-based)
- **Usage**: Dashboard connections, feature lists, navigation
- **Features**: Sharp angles, tech aesthetic, animation-ready

### 7. Node Connectors
- **Filename**: `node-connector.svg`
- **Size**: 16x16px base (scalable)
- **Style**: Network node visualization
- **Colors**: Variable (status-based)
- **Usage**: Live dashboard modules, network status
- **Features**: Central hub with connection points

## Dashboard UI Elements (Low Priority)

### 8. Status Indicators
- **Filename**: `status-dot-active.svg`, `status-dot-inactive.svg`, `status-dot-warning.svg`, `status-dot-error.svg`
- **Size**: 12x12px (scalable)
- **Style**: Modern status indicators
- **Colors**: Green (#22C55E), Gray (#6B7280), Orange (#FB9260), Red (#EF4444)
- **Usage**: Live system status, health monitors
- **Features**: Clear visual states, subtle glow effects

### 9. Progress Elements
- **Filename**: `progress-ring.svg`, `data-bar.svg`
- **Sizes**: 48x48px, 24x100px (scalable)
- **Style**: Minimal progress visualization
- **Colors**: Variable (data-driven)
- **Usage**: Live metrics, performance indicators
- **Features**: Clean geometry, animation-ready paths

## Technical Specifications

### File Requirements
- **Format**: SVG (optimized, cleaned)
- **Viewbox**: Properly set for scaling
- **Colors**: Use currentColor where possible for theme flexibility
- **Paths**: Simplified, optimized for web performance
- **Size**: Keep under 2KB each for optimal loading

### Design Guidelines
- **Style**: Sharp, beveled edges (no glows)
- **Aesthetic**: Cyberpunk/corporate hybrid
- **Consistency**: Unified visual language across all assets
- **Scalability**: Must work from 16px to 200px sizes

### Color Palette
```css
Primary Orange: #FB9260
Electric Blue: #3B82F6  
Matrix Green: #22C55E
Cyber Purple: #9333EA
Warning Orange: #FB9260
Error Red: #EF4444
Neutral Gray: #6B7280
Background Dark: #0F172A
```

## Integration Plan

1. **Phase 1**: Primary logos (OKO, Thunderline, Thunderblock, Thunderbit)
2. **Phase 2**: Interactive elements (particles, arrows, connectors)
3. **Phase 3**: Dashboard UI elements (status, progress)

Each asset will be:
- Imported into React components as modular SVG elements
- Integrated with the 3D particle physics system
- Connected to live dashboard data feeds
- Optimized for performance and interactivity

## Asset Directory Structure
```
public/assets/svg/
├── logos/
│   ├── oko-logo-main.svg
│   ├── thunderline-logo.svg
│   ├── thunderblock-logo.svg
│   └── thunderbit-logo.svg
├── particles/
│   ├── particle-hex-small.svg
│   ├── particle-hex-medium.svg
│   └── node-connector.svg
├── ui/
│   ├── data-arrow-horizontal.svg
│   ├── data-arrow-vertical.svg
│   ├── status-dot-active.svg
│   ├── status-dot-inactive.svg
│   ├── status-dot-warning.svg
│   ├── status-dot-error.svg
│   ├── progress-ring.svg
│   └── data-bar.svg
```

## Next Steps
1. Art team creates assets based on specifications above
2. Developer integrates assets into existing placeholder components
3. Test performance and visual consistency across all screen sizes
4. Deploy updated site with professional assets

**Timeline**: Ready to integrate assets immediately upon delivery. All placeholder components and integration logic are already in place.
