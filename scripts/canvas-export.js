const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

async function exportCanvas(filePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const canvasData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(canvasData);

  const nodes = data.nodes || [];
  const edges = data.edges || [];

  // 👉 좌표 보정 (음수 대응)
  const minX = Math.min(...nodes.map(n => n.x));
  const minY = Math.min(...nodes.map(n => n.y));

  const offsetX = Math.abs(minX) + 100;
  const offsetY = Math.abs(minY) + 100;

  // 👉 노드 HTML 생성
  const nodesHtml = nodes.map(node => `
    <div class="node"
      style="
        left:${node.x + offsetX}px;
        top:${node.y + offsetY}px;
        width:${node.width}px;
        height:${node.height}px;
      ">
      ${node.text || ""}
    </div>
  `).join("");

  // 👉 연결선 SVG 생성
  const lines = edges.map(edge => {
    const from = nodes.find(n => n.id === edge.fromNode);
    const to = nodes.find(n => n.id === edge.toNode);
    if (!from || !to) return "";

    const x1 = from.x + from.width / 2 + offsetX;
    const y1 = from.y + from.height / 2 + offsetY;
    const x2 = to.x + to.width / 2 + offsetX;
    const y2 = to.y + to.height / 2 + offsetY;

    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
  }).join("");

  const html = `
  <html>
    <head>
      <style>
        body {
          margin:0;
          background:#0f0f0f;
        }
        .container {
          position:relative;
          width:2000px;
          height:2000px;
        }
        .node {
          position:absolute;
          background:#1e1e1e;
          color:white;
          border:1px solid #555;
          border-radius:8px;
          padding:8px;
          font-size:14px;
          box-shadow:0 4px 10px rgba(0,0,0,0.5);
        }
        svg {
          position:absolute;
          width:100%;
          height:100%;
        }
        line {
          stroke:white;
          stroke-width:2;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <svg>
          ${lines}
        </svg>
        ${nodesHtml}
      </div>
    </body>
  </html>
  `;

  await page.setContent(html);

  const output = filePath.replace(".canvas", ".png");

  await page.screenshot({
    path: output,
    fullPage: true,
  });

  await browser.close();
  console.log("🔥 Exported:", output);
}

// 👉 재귀 탐색
async function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await walk(fullPath);
    } else if (file.endsWith(".canvas")) {
      await exportCanvas(fullPath);
    }
  }
}

walk(process.cwd());