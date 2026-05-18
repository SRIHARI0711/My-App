const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>DevOps Lab App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            background: #f4f4f4;
            color: #222;
          }
          .box {
            background: white;
            padding: 24px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            max-width: 700px;
          }
          h1 {
            color: #0b57d0;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>DevOps Lab Application</h1>
          <p>This is a simple Node.js app for Jenkins CI/CD pipeline testing.</p>
          <p>Status: Running successfully.</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // Automatically open browser
  const url = `http://localhost:${PORT}`;
  const command = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
  exec(command);
});