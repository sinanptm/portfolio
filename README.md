<div align="center">
  <h1>🌟 3D Interactive Portfolio</h1>
  <p><em>A unique and immersive way to showcase your skills and projects</em></p>
  <br>
  <a href="https://github.com/sinanptm/portfolio"><img src="https://img.shields.io/badge/-3D%20Environment-blueviolet?style=for-the-badge" alt="3D Environment"></a>
  <a href="https://github.com/sinanptm/portfolio"><img src="https://img.shields.io/badge/-Customizable-orange?style=for-the-badge" alt="Customizable"></a>
  <a href="https://github.com/sinanptm/portfolio"><img src="https://img.shields.io/badge/-Responsive-blue?style=for-the-badge" alt="Responsive"></a>
  <a href="https://github.com/sinanptm/portfolio"><img src="https://img.shields.io/badge/-Interactive-green?style=for-the-badge" alt="Interactive"></a>
</div>
<div align="center">
  <h2>🚀 Portfolio Performance & SEO</h2>
  <img src="https://github.com/user-attachments/assets/c3b1a802-057d-448c-bf97-aa83dae1d1e3" alt="Lighthouse Performance Report" width="800">
  <p><em>Achieving top scores in SEO, Best Practices, and Accessibility ensures a superior user experience and discoverability!</em></p>
</div>

<h2>✨ Features</h2>

<h3>🌐 Progressive Web App (PWA)</h3>
<ul>
  <li><strong>Cross-Platform Installation:</strong> Install and use as a native app on:
    <ul>
      <li>💻 Desktop (Windows, macOS, Linux)</li>
      <li>📱 Mobile devices (iOS, Android)</li>
    </ul>
  </li>
  <li><strong>Offline Functionality:</strong> Access basic content without internet connection</li>
  <li><strong>Fast Loading:</strong> Optimized performance with caching strategies</li>
  <li><strong>Automatic Updates:</strong> Always stay up-to-date with the latest version</li>
</ul>

<h3>📨 Email Integration</h3>
<ul>
  <li><strong>Contact Form Integration:</strong> Built-in contact form using Nodemailer</li>
  <li><strong>Secure Communication:</strong> Encrypted email transmission</li>
</ul>

<h3>🔄 GitHub Integration</h3>
<ul>
  <li><strong>Live Repository Data:</strong> Real-time fetch of:
    <ul>
      <li>Repository statistics</li>
      <li>Contribution graph</li>
      <li>Star counts</li>
      <li>Fork metrics</li>
    </ul>
  </li>
  <li><strong>Activity Timeline:</strong> Display recent GitHub activities</li>
  <li><strong>Project Showcase:</strong> Automatic import of pinned repositories</li>
  <li><strong>Rate Limit Handling:</strong> Optimized API calls with token authentication</li>
</ul>

<h3>🎮 3D Models & Environment</h3>
<ul>
  <li><strong>Interactive Desktop Setup:</strong> Fully 3D rendered workspace</li>
  <li><strong>Custom Model Import:</strong> Support for various 3D model formats</li>
  <li><strong>Real-time Rendering:</strong> Smooth performance with Three.js</li>
  <li><strong>Environment Mapping:</strong> Realistic lighting and reflections</li>
  <li><strong>Mobile-Optimized:</strong> Responsive 3D rendering for all devices</li>
</ul>

<h3>🎯 Animations & Interactions</h3>
<ul>
  <li><strong>Smooth Page Transitions:</strong> Seamless navigation between sections</li>
  <li><strong>Scroll Animations:</strong> Interactive elements reveal on scroll</li>
  <li><strong>Hover Effects:</strong> Dynamic feedback on user interaction</li>
  <li><strong>Loading Animations:</strong> Engaging loading states</li>
  <li><strong>Particle Effects:</strong> Background particle system for visual appeal</li>
</ul>

<h3>🎨 Additional Features</h3>
<ul>
  <li><strong>Responsive Design:</strong> Adapts to all screen sizes</li>
  <li><strong>SEO Optimized:</strong> Enhanced search engine visibility</li>
  <li><strong>Performance Optimized:</strong> Fast loading times</li>
  <li><strong>Accessibility:</strong> WCAG compliant design elements</li>
</ul>

<h2>🛠 Installation</h2>

<ol>
  <li><strong>Clone the repository:</strong>
    <pre><code>git clone https://github.com/sinanptm/portfolio.git
cd portfolio</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>pnpm install</code></pre>
  </li>
  <li><strong>Set up environment variables:</strong>
    <ul>
      <li>Create a <code>.env</code> file in the root directory</li>
      <li>Add the following variables:
        <pre><code>SENDER_EMAIL=your_email@example.com
NODEMAILER_PASSKEY=your_nodemailer_password
RECEIVER_EMAIL=recipient_email@example.com
NEXT_PUBLIC_GITHUB_TOKEN=your_github_apiToken</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>Start the development server:</strong>
    <pre><code>pnpm run dev</code></pre>
  </li>
  <li><strong>View the portfolio:</strong>
    <ul>
      <li>Open your browser</li>
      <li>Visit <code>http://localhost:3000</code></li>
    </ul>
  </li>
</ol>

<h2>🔧 Environment Variables</h2>

<table>
  <tr>
    <th>Variable</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>SENDER_EMAIL</code></td>
    <td>Email address used to send contact form messages</td>
  </tr>
  <tr>
    <td><code>NODEMAILER_PASSKEY</code></td>
    <td>Password/API key for email service</td>
  </tr>
  <tr>
    <td><code>RECEIVER_EMAIL</code></td>
    <td>Email address where contact form messages will be received</td>
  </tr>
  <tr>
    <td><code>NEXT_PUBLIC_GITHUB_TOKEN</code></td>
    <td>For getting Github Stats and Activities with more Rate Limit</td>
  </tr>
</table>

<h2>🎨 Customization</h2>

<h3>Content Modification</h3>
<p>All content is stored in the <code>constants</code> folder for easy personalization:</p>

<ol>
  <li><strong>Update Personal Information:</strong>
    <ul>
      <li>Navigate to <code>constants/index.ts</code></li>
      <li>Modify values to reflect your:
        <ul>
          <li>Personal information</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Experience</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Metadata Updates:</strong>
    <ul>
      <li>Open <code>app/layout.ts</code></li>
      <li>Update metadata fields with your information</li>
    </ul>
  </li>
</ol>

<h3>3D Environment Customization</h3>

<p><strong>Desktop Wallpaper:</strong></p>
<ol>
  <li>Navigate to <code>/public/desktop/textures</code></li>
  <li>Replace <code>desktop.png</code> with your image
    <blockquote>
      <p>⚠️ <strong>Note:</strong> The model displays a mirror reflection, so rotate your image horizontally before saving</p>
    </blockquote>
  </li>
</ol>

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/sinanptm">Muhammed Sinan</a></p>
</div>
