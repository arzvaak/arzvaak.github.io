# Tailwind CSS Migration Guide

## Overview
This project has been successfully migrated from custom CSS to **Tailwind CSS using the CDN approach** for seamless GitHub Pages deployment.

## What Changed

### Before
- Custom CSS files: `css/style.css`, `css/subject.css`, `css/notes.css`, `css/quiz.css`
- Manual styling with custom classes
- Separate maintenance of CSS files

### After
- **Tailwind CSS CDN**: All styling now uses Tailwind utility classes
- **Single source of truth**: Configuration embedded in HTML files
- **No build step required**: Works perfectly with GitHub Pages
- **Consistent design system**: Unified color scheme and spacing

## Files Migrated

### Main Pages (1)
- `index.html` ✅

### Subject Overview Pages (4)
- `terms/qualifier/maths-for-ds.html` ✅
- `terms/qualifier/stats-for-ds.html` ✅
- `terms/qualifier/english.html` ✅
- `terms/qualifier/computational-thinking.html` ✅

### Mathematics for Data Science (15 files)
- `terms/qualifier/maths-for-ds/subject.html` ✅
- `terms/qualifier/maths-for-ds/week1-notes.html` ✅
- `terms/qualifier/maths-for-ds/week1-quiz.html` ✅
- `terms/qualifier/maths-for-ds/topic1.html` through `topic10.html` ✅
- `terms/qualifier/maths-for-ds/topics-overview.html` ✅
- `terms/qualifier/maths-for-ds/quizzes/index.html` ✅

### Other Subjects (6 files)
- Statistics for Data Science: week1-notes.html, week1-quiz.html ✅
- English 1: week1-notes.html, week1-quiz.html ✅
- Computational Thinking: week1-notes.html, week1-quiz.html ✅

**Total: 26 HTML files migrated**

## Design System

### Color Palette
```javascript
colors: {
    primary: {
        DEFAULT: '#3b82f6',  // Bright blue
        dark: '#2563eb'       // Darker blue
    },
    dark: {
        primary: '#111827',   // Deep black-blue
        secondary: '#1f2937', // Lighter dark
        border: '#374151'     // Border gray
    },
    text: {
        primary: '#f9fafb',   // Almost white
        secondary: '#d1d5db'  // Light gray
    }
}
```

### Typography
- **Font Family**: Inter (with system fallbacks)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Custom Utilities

#### Gradient Text
```html
<span class="gradient-text">IITM Journey</span>
```

#### Discord Pattern (for buttons)
```html
<div class="discord-pattern"></div>
```

#### Progress Bar Widths
```html
<div class="w-25">  <!-- 25% width -->
<div class="w-50">  <!-- 50% width -->
<div class="w-75">  <!-- 75% width -->
<div class="w-100"> <!-- 100% width -->
```

Available: `w-8`, `w-10`, `w-20`, `w-25`, `w-30`, `w-50`, `w-75`, `w-80`, `w-100`

## Common Patterns

### Navigation Bar
```html
<nav class="fixed top-0 w-full bg-dark-secondary shadow-md border-b border-dark-border z-50">
    <div class="max-w-7xl mx-auto px-5 flex justify-between items-center h-15">
        <!-- Nav content -->
    </div>
</nav>
```

### Card Component
```html
<div class="bg-dark-secondary rounded-3xl p-10 shadow-xl transition-all hover:-translate-y-2 border border-dark-border">
    <!-- Card content -->
</div>
```

### Primary Button
```html
<a href="#" class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-2xl no-underline">
    Button Text
</a>
```

### Progress Bar
```html
<div class="w-full h-1.5 bg-dark-secondary rounded-full overflow-hidden">
    <div class="h-full bg-primary rounded-full w-25"></div>
</div>
```

### Section Layout
```html
<section class="py-20 bg-dark-secondary">
    <div class="max-w-7xl mx-auto px-5">
        <h2 class="text-5xl font-bold text-center mb-4">Section Title</h2>
        <!-- Section content -->
    </div>
</section>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Grid items -->
</div>
```

## Responsive Breakpoints

Tailwind uses mobile-first breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

Example:
```html
<div class="text-2xl md:text-4xl lg:text-6xl">
    Responsive Text
</div>
```

## Benefits

### ✅ Zero Build Configuration
- No npm scripts to run
- No build process needed
- Works out of the box with GitHub Pages

### ✅ Faster Development
- Utility-first approach
- No context switching between HTML and CSS
- Rapid prototyping

### ✅ Smaller File Size
- No unused CSS shipped
- CDN is cached across sites
- Fast initial load

### ✅ Consistent Design
- Unified spacing scale
- Consistent colors
- Standardized components

### ✅ Easy Maintenance
- All styles visible in HTML
- No "dead CSS" problems
- Simple to update

## Old CSS Files

The following files have been moved to `css/old/` for reference:
- `css/old/style.css`
- `css/old/subject.css`
- `css/old/notes.css`
- `css/old/quiz.css`

**Note**: These files are no longer used by any HTML files. They are kept in the `old/` folder for reference only and are excluded from Git via `.gitignore`.

## Cleaned Up Files

The following files have been removed as they are no longer needed (using CDN approach):
- `node_modules/` - No build dependencies needed
- `package.json` - Not required for CDN
- `package-lock.json` - Not required for CDN
- `tailwind.config.js` - Config embedded in HTML files
- `src/` - No source files needed

## CDN Configuration

Every HTML file includes this configuration in the `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: { DEFAULT: '#3b82f6', dark: '#2563eb' },
                    dark: { primary: '#111827', secondary: '#1f2937', border: '#374151' },
                    text: { primary: '#f9fafb', secondary: '#d1d5db' }
                },
                fontFamily: {
                    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                }
            }
        }
    }
</script>
<style type="text/tailwindcss">
    @layer utilities {
        .gradient-text {
            @apply bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent;
        }
        .discord-pattern {
            background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px);
        }
        .w-8 { width: 8%; }
        .w-10 { width: 10%; }
        .w-20 { width: 20%; }
        .w-25 { width: 25%; }
        .w-30 { width: 30%; }
        .w-50 { width: 50%; }
        .w-75 { width: 75%; }
        .w-80 { width: 80%; }
        .w-100 { width: 100%; }
    }
</style>
```

## Adding New Pages

When creating new HTML pages, include the CDN configuration above in your `<head>` section and follow the design patterns outlined in this guide.

## Need Help?

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS CDN Documentation](https://tailwindcss.com/docs/installation/play-cdn)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

---

**Migration completed**: All 26 HTML files successfully migrated to Tailwind CSS! 🎉