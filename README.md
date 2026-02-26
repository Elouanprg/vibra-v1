# VIBRA Event Agency Website

Sophisticated 8-page website for VIBRA event agency featuring DJ services, artist booking, and event organization.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS
- **GSAP 3.x** - Professional animations
- **Particles.js** - Particle effects
- **Swiper.js** - Carousels
- **Lenis** - Smooth scrolling
- **LazyLoad** - Image optimization

## Vendor Libraries (CDN)

The following libraries are loaded via CDN in the HTML files:

```html
<!-- GSAP Core + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Particles.js -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<!-- Swiper -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Lenis Smooth Scroll -->
<script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

<!-- LazyLoad -->
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.5/dist/lazyload.min.js"></script>
```

## File Structure

```
Site v1/
├── index.html                          # Home page
├── prestations-techniques.html         # Technical Services
├── evenements-particuliers.html        # Events for Individuals
├── portfolio.html                      # Portfolio
├── equipe-djs.html                     # DJ Team
├── equipe-solo-groupes.html           # Solo & Groups
├── mix-playlists.html                 # Mixes & Playlists
├── evenements-professionnels.html     # Professional Events
└── assets/
    ├── css/                           # Stylesheets
    ├── js/                            # JavaScript
    ├── images/                        # Images
    └── fonts/                         # Web fonts
```

## Brand Colors

- **Primary Orange:** `#FF6B35`
- **Orange Light:** `#FF8C61`
- **Orange Dark:** `#E6532B`

## Development

1. **Local Server:** Use a local server to view the site (e.g., Live Server extension in VS Code)
2. **Images:** Place your images in the respective `assets/images/` subdirectories
3. **Fonts:** Add any custom fonts to `assets/fonts/`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance Targets

- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <4s

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatible
- Respects `prefers-reduced-motion`

## License

© 2026 VIBRA Event Agency. All rights reserved.
