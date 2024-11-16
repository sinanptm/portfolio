<div align="center">
  
# 🌟 3D Interactive Portfolio

<p style="font-size: 1.2em"><em>A unique and immersive way to showcase your skills and projects</em></p>

[![3D Environment](https://img.shields.io/badge/-3D%20Environment-blueviolet?style=for-the-badge)](https://github.com/sinanptm/portfolio)
[![Customizable](https://img.shields.io/badge/-Customizable-orange?style=for-the-badge)](https://github.com/sinanptm/portfolio)
[![Responsive](https://img.shields.io/badge/-Responsive-blue?style=for-the-badge)](https://github.com/sinanptm/portfolio)
[![Interactive](https://img.shields.io/badge/-Interactive-green?style=for-the-badge)](https://github.com/sinanptm/portfolio)

---

</div>

## 📌 Table of Contents
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

<br>

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