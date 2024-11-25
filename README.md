<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Interactive Portfolio</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 40px;
            margin-bottom: 30px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 2.2em;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            margin-top: 40px;
        }
        h3 {
            font-size: 1.8em;
            margin-top: 30px;
        }
        .center {
            text-align: center;
        }
        .badge {
            display: inline-block;
            margin: 5px;
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }
        .badge:hover {
            background-color: #2980b9;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 20px 0;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        li {
            margin-bottom: 10px;
            position: relative;
            padding-left: 25px;
        }
        li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #27ae60;
            font-weight: bold;
        }
        code {
            background-color: #f0f0f0;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: 'Courier New', Courier, monospace;
        }
        pre {
            background-color: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        .feature-icon {
            font-size: 1.5em;
            margin-right: 10px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="center">
            <h1>🌟 3D Interactive Portfolio</h1>
            <p><em>A unique and immersive way to showcase your skills and projects</em></p>
            <a href="https://github.com/sinanptm/portfolio" class="badge">3D Environment</a>
            <a href="https://github.com/sinanptm/portfolio" class="badge">Customizable</a>
            <a href="https://github.com/sinanptm/portfolio" class="badge">Responsive</a>
            <a href="https://github.com/sinanptm/portfolio" class="badge">Interactive</a>
        </div>
    </div>

    <div class="container">
        <h2 class="center">🚀 Portfolio Performance & SEO</h2>
        <img src="https://github.com/user-attachments/assets/c3b1a802-057d-448c-bf97-aa83dae1d1e3" alt="Lighthouse Performance Report">
        <p class="center"><em>Achieving top scores in SEO, Best Practices, and Accessibility ensures a superior user experience and discoverability!</em></p>
    </div>

    <div class="container">
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
    </div>

    <div class="container">
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
    </div>

    <div class="container">
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
    </div>

    <div class="container">
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
    </div>

    <div class="container center">
        <p>Made with ❤️ by <a href="https://github.com/sinanptm" class="button">Muhammed Sinan</a></p>
    </div>
</body>
</html>
