<div align="center">
  <h1>🌟 3D Interactive Portfolio</h1>
  <p><em>A unique and immersive way to showcase your skills and projects</em></p>
  <img src="https://img.shields.io/badge/-3D%20Environment-blueviolet" alt="3D Environment"/>
  <img src="https://img.shields.io/badge/-Customizable-orange" alt="Customizable"/>
  <img src="https://img.shields.io/badge/-Responsive-blue" alt="Responsive"/>
  <img src="https://img.shields.io/badge/-Interactive-green" alt="Interactive"/>
</div>



<h3>🛠 Installation</h3>

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/sinanptm/portfolio.git
cd portfolio</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Set up environment variables:
    <ul>
      <li>Create a <code>.env</code> file in the root directory</li>
      <li>Add the following variables to the <code>.env</code> file:
        <pre><code>SENDER_EMAIL=your_email@example.com
NODEMAILER_PASSKEY=your_nodemailer_password
RECEIVER_EMAIL=recipient_email@example.com</code></pre>
      </li>
    </ul>
  </li>
  <li>Start the development server:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Open your browser and visit <code>http://localhost:3000</code> to view the portfolio.</li>
</ol>

<h3>🔧 Environment Variables</h3>

<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
<h2 align="center">🎨 Customization</h2>

<h3>Changing Content</h3>
<p>All the content is stored in the <code>constants</code> folder. You can easily modify the text, links, and other information to personalize the portfolio:</p>
<ol>
  <li>Open the <code>constants/index.ts</code> file in the project root.</li>
  <li>Update the values to reflect your personal information, skills, and projects.</li>
</ol>

<h3>Updating Metadata</h3>
<p>To change the metadata of the portfolio:</p>
<ol>
  <li>Navigate to the <code>app/layout.ts</code> file.</li>
  <li>Modify the metadata fields to match your information.</li>
</ol>

<h3>Changing the 3D Model Desktop Wallpaper</h3>
<p>To personalize the desktop wallpaper in the 3D environment:</p>
<ol>
  <li>Go to the <code>/public/desktop/textures</code> directory.</li>
  <li>Replace the existing <code>profile.png</code> with your own image (keep the same filename).</li>
</ol>



<p align="center">Made with ❤️ by Muhammed Sinan</p>

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"/>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/>
</div>
