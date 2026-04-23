const express = require('express');
const app = express();
const port = 5002;

const html = `
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ССО - Статут та Правила (Node.js Express)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        .gradient-bg { background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e293b 100%); }
        .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border-color: rgba(96, 165, 250, 0.3); }
    </style>
</head>
<body class="gradient-bg min-h-screen text-gray-100">
    <nav class="fixed top-8 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <span class="text-2xl font-bold text-blue-400">ССО</span>
                    <span class="ml-2 text-sm text-gray-400">Статут (Node.js Express)</span>
                </div>
            </div>
        </div>
    </nav>
    <header class="pt-32 pb-20 px-4">
        <div class="w-full text-center">
            <h1 class="text-6xl md:text-7xl font-extrabold text-white mb-6">
                <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">ССО</span>
                <span class="text-white"> Статут</span>
            </h1>
            <p class="text-xl text-gray-300">Node.js Express Version</p>
        </div>
    </header>
    <main class="w-full px-4 sm:px-6 lg:px-8 pb-20">
        <div class="bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl p-6 md:p-8 border border-slate-700/50 card-hover backdrop-blur-sm">
            <h2 class="text-2xl font-bold text-white mb-4">⚡ Node.js Express Version</h2>
            <p class="text-gray-300">Ця версія сайту працює на Node.js Express веб-фреймворку.</p>
        </div>
    </main>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
