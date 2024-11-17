<div align="center">
  
# 🌟 3D Interactive Portfolio

<p style="font-size: 1.2em"><em>A unique and immersive way to showcase your skills and projects</em></p>

[![3D Environment](https://img.shields.io/badge/-3D%20Environment-blueviolet?style=for-the-badge)](https://github.com/sinanptm/portfolio)
[![Customizable](https://img.shields.io/badge/-Customizable-orange?style=for-the-badge)](https://github.com/sinanptm/portfolio)
[![Responsive](https://img.shields.io/badge/-Responsive-blue?style=for-the-badge)](https://github.com/sinanptm/portfolio)
[![Interactive](https://img.shields.io/badge/-Interactive-green?style=for-the-badge)](https://github.com/sinanptm/portfolio)

---

</div>


## ✨ Features

### 🌐 Progressive Web App (PWA)
- **Cross-Platform Installation:** Install and use as a native app on:
  - 💻 Desktop (Windows, macOS, Linux)
  - 📱 Mobile devices (iOS, Android)
- **Offline Functionality:** Access basic content without internet connection
- **Fast Loading:** Optimized performance with caching strategies
- **Automatic Updates:** Always stay up-to-date with the latest version

### 📨 Email Integration
- **Contact Form Integration:** Built-in contact form using Nodemailer
- **Secure Communication:** Encrypted email transmission

### 🔄 GitHub Integration
- **Live Repository Data:** Real-time fetch of:
  - Repository statistics
  - Contribution graph
  - Star counts
  - Fork metrics
- **Activity Timeline:** Display recent GitHub activities
- **Project Showcase:** Automatic import of pinned repositories
- **Rate Limit Handling:** Optimized API calls with token authentication

### 🎮 3D Models & Environment
- **Interactive Desktop Setup:** Fully 3D rendered workspace
- **Custom Model Import:** Support for various 3D model formats
- **Real-time Rendering:** Smooth performance with Three.js
- **Environment Mapping:** Realistic lighting and reflections
- **Mobile-Optimized:** Responsive 3D rendering for all devices

### 🎯 Animations & Interactions
- **Smooth Page Transitions:** Seamless navigation between sections
- **Scroll Animations:** Interactive elements reveal on scroll
- **Hover Effects:** Dynamic feedback on user interaction
- **Loading Animations:** Engaging loading states
- **Particle Effects:** Background particle system for visual appeal

### 🎨 Additional Features
- **Responsive Design:** Adapts to all screen sizes
- **SEO Optimized:** Enhanced search engine visibility
- **Performance Optimized:** Fast loading times
- **Accessibility:** WCAG compliant design elements

  


## 🛠 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sinanptm/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     SENDER_EMAIL=your_email@example.com
     NODEMAILER_PASSKEY=your_nodemailer_password
     RECEIVER_EMAIL=recipient_email@example.com
     NEXT_PUBLIC_GITHUB_TOKEN=your_github_apiToken
     ```

4. **Start the development server:**
   ```bash
   pnpm run dev
   ```

5. **View the portfolio:**
   - Open your browser
   - Visit `http://localhost:3000`

<br>

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `SENDER_EMAIL` | Email address used to send contact form messages |
| `NODEMAILER_PASSKEY` | Password/API key for email service |
| `RECEIVER_EMAIL` | Email address where contact form messages will be received |
| `NEXT_PUBLIC_GITHUB_TOKEN` | For getting Github Stats and Activities with more Rate Limit |

<br>

## 🎨 Customization

### Content Modification
All content is stored in the `constants` folder for easy personalization:

1. **Update Personal Information:**
   - Navigate to `constants/index.ts`
   - Modify values to reflect your:
     - Personal information
     - Skills
     - Projects
     - Experience

2. **Metadata Updates:**
   - Open `app/layout.ts`
   - Update metadata fields with your information

### 3D Environment Customization

**Desktop Wallpaper:**
1. Navigate to `/public/desktop/textures`
2. Replace `desktop.png` with your image
   > ⚠️ **Note:** The model displays a mirror reflection, so rotate your image horizontally before saving

<br>

## 👥 Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request


<br>

<div align="center">

## 💝 Support & Community

[![Star this repo](https://img.shields.io/github/stars/sinanptm/portfolio?style=social)](https://github.com/sinanptm/portfolio)

Made with ❤️ by [Muhammed Sinan](https://github.com/sinanptm)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</div>
