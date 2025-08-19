<<<<<<< HEAD
=======
[README.md](https://github.com/user-attachments/files/21843227/README.md)
>>>>>>> 08ddf8c707e4af1cfcc508501d158797c27fd1c1
# CortexaLab Website

A modern, responsive website for CortexaLab Pvt Ltd featuring a dark AI theme with cutting-edge design and interactive elements.

## 🚀 Features

- **Dark AI Theme**: Modern dark design with electric blue and purple accents
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and particle animations
- **Contact Form**: Functional contact form with validation and notifications
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern Typography**: Clean, professional font styling
- **Loading Animations**: Staggered animations for enhanced user experience

## 📁 File Structure

```
CortexaLab Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Deep dark (#0a0a0a, #111111)
- **Accent Colors**: Electric blue (#00d4ff), Purple (#6366f1)
- **Text Colors**: White, light grays for readability
- **Gradients**: Modern gradient combinations for visual appeal

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive**: Scales appropriately across devices

### Animations
- **Particle Effects**: Floating particles in hero section
- **Scroll Animations**: Elements animate in as you scroll
- **Hover Effects**: Interactive card and button animations
- **Loading Animations**: Staggered element loading

## 🛠️ Customization

### Colors
To change the color scheme, modify the CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --accent-primary: #00d4ff;    /* Primary accent */
    --accent-purple: #6366f1;     /* Secondary accent */
    /* ... other colors */
}
```

### Content
Update the content in `index.html`:
- Company information in the hero section
- Service descriptions in respective sections
- Contact information in the footer
- Form fields in the contact section

### Images
To add images:
1. Create an `images/` folder
2. Add your images
3. Update the HTML to reference them

### Fonts
To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify the font-family in `styles.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Local Development
1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Web Hosting
Upload the files to your web hosting provider:
- **Shared Hosting**: Upload via FTP/cPanel
- **Vercel**: Drag and drop the folder
- **Netlify**: Connect your repository or upload files
- **GitHub Pages**: Push to a repository and enable Pages

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact Form

The contact form includes:
- **Validation**: Email format and required fields
- **Notifications**: Success/error messages
- **Simulation**: Currently simulates form submission
- **Integration**: Ready for backend integration

To connect to a real backend:
1. Update the form action in `index.html`
2. Modify the form handling in `script.js`
3. Add your server endpoint

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images (when added)
- Fast loading times

## 🔒 Security

- Form validation on both client and server side
- XSS protection through proper input sanitization
- HTTPS recommended for production

## 📈 Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading animations
- Efficient DOM manipulation

## 🤝 Contributing

To customize or extend the website:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** across different devices
5. **Submit** a pull request

## 📄 License

This project is created for CortexaLab Pvt Ltd. All rights reserved.

## 🆘 Support

For technical support or customization requests:
- Check the code comments for guidance
- Review the CSS variables for easy customization
- Test changes across different browsers and devices

## 🎉 Getting Started

1. **Download** or **clone** the files
2. **Open** `index.html` in your browser
3. **Customize** the content and styling as needed
4. **Deploy** to your web hosting provider

The website is ready to use and can be easily customized to match your specific needs!
