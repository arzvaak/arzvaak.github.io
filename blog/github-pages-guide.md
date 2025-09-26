# Getting Started with GitHub Pages

*Published on September 26, 2025*

GitHub Pages is a fantastic way to host your personal website, portfolio, or project documentation directly from your GitHub repository. In this comprehensive guide, I'll walk you through setting up your first GitHub Pages site and making it shine.

## What is GitHub Pages?

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub and publishes a website. It's free, fast, and integrates seamlessly with your development workflow.

### Why Choose GitHub Pages?

- **Free hosting** for public repositories
- **Custom domain support** 
- **Automatic deployment** from your repository
- **Version control** for your website
- **HTTPS support** by default
- **Jekyll integration** for blog-aware static sites

## Setting Up Your First Site

### Step 1: Create a Repository

1. Go to GitHub and create a new repository
2. Name it `yourusername.github.io` (replace with your actual username)
3. Make sure it's public
4. Initialize with a README

### Step 2: Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to the "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 3: Create Your First Page

Create an `index.html` file in your repository root:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My GitHub Pages Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #007acc;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Site!</h1>
    <p>This is my first GitHub Pages website.</p>
</body>
</html>
```

## Making It Look Professional

### Add CSS Styling

Create a `style.css` file:

```css
/* Modern, clean styling */
:root {
    --primary-color: #007acc;
    --secondary-color: #f8f9fa;
    --text-color: #333;
    --border-color: #e9ecef;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: var(--secondary-color);
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    text-align: center;
}

nav {
    background: var(--primary-color);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;
}

nav a:hover {
    opacity: 0.8;
}

.card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Add Interactive Features

Include JavaScript for dynamic behavior:

```javascript
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add fade-in animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});
```

## Advanced Features

### Using Jekyll for Blogging

GitHub Pages supports Jekyll out of the box. Create a `_config.yml` file:

```yaml
title: Your Site Title
description: A brief description of your site
url: "https://yourusername.github.io"
baseurl: ""

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# Social media
github_username: yourusername
twitter_username: yourusername
linkedin_username: yourusername
```

### Adding a Blog

Create a `_posts` directory and add blog posts in Markdown format:

```markdown
---
layout: post
title: "My First Blog Post"
date: 2025-09-26 10:00:00 +0000
categories: blogging tutorial
---

# Welcome to My Blog

This is my first blog post using Jekyll on GitHub Pages!

## What I'll Be Writing About

- Web development tutorials
- Programming tips and tricks
- My learning journey
- Project showcases

Stay tuned for more content!
```

### Custom Domain Setup

1. Buy a domain from any registrar
2. Create a `CNAME` file in your repository root
3. Add your domain name to the file (e.g., `www.yoursite.com`)
4. Configure DNS settings with your registrar:
   - Add a CNAME record pointing `www` to `yourusername.github.io`
   - Add A records for the apex domain pointing to GitHub's IP addresses

## Optimization Tips

### Performance

1. **Optimize images**: Use compressed images and modern formats like WebP
2. **Minimize CSS/JS**: Remove unused code and minify files
3. **Use a CDN**: Leverage GitHub's global CDN for fast loading
4. **Enable caching**: Set proper cache headers

### SEO

1. **Meta tags**: Include proper title, description, and keywords
2. **Structured data**: Use JSON-LD for rich snippets
3. **Sitemap**: Generate and submit a sitemap to search engines
4. **Alt text**: Add descriptive alt text to all images

### Accessibility

1. **Semantic HTML**: Use proper heading hierarchy and semantic tags
2. **Color contrast**: Ensure sufficient contrast ratios
3. **Keyboard navigation**: Make sure all interactive elements are keyboard accessible
4. **Screen reader support**: Use ARIA labels and roles where appropriate

## Common Issues and Solutions

### Site Not Updating

- Check the Actions tab for build errors
- Ensure you're pushing to the correct branch
- Clear browser cache and wait a few minutes

### Custom Domain Not Working

- Verify DNS settings with your registrar
- Check that the CNAME file is in the repository root
- Wait up to 24 hours for DNS propagation

### Jekyll Build Errors

- Check for syntax errors in `_config.yml`
- Ensure proper front matter in posts
- Validate Markdown syntax

## Next Steps

Once you have your basic site running, consider:

1. **Adding analytics** with Google Analytics or similar
2. **Implementing a contact form** using Formspree or Netlify Forms
3. **Adding a search feature** with Jekyll's built-in search or Algolia
4. **Creating a portfolio section** to showcase your projects
5. **Setting up automated testing** with GitHub Actions

## Conclusion

GitHub Pages is an excellent platform for hosting static websites, whether you're showcasing your portfolio, sharing your thoughts through blogging, or documenting your projects. With the combination of GitHub's reliability, Jekyll's power, and your creativity, you can build a professional web presence that grows with you.

The best part? It's completely free and integrates seamlessly with your development workflow. Start simple, then gradually add more features as you learn and grow.

Happy coding! 🚀

---

*Have questions about GitHub Pages? Feel free to reach out or check the [official documentation](https://docs.github.com/en/pages).*