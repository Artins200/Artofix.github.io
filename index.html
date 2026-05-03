<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artofix_Official — обход блокировок, мультиаккаунтинг и настройка сети в РФ</title>
  <meta name="description" content="ArtoFIX 2.3 — профессиональный инструмент для обхода блокировок, мультиаккаунтинга и защиты соединений. Скачайте последнюю версию с автоматическим обновлением компонентов.">
  <meta name="keywords" content="обход, Artofix 2.3, Artofix.23, fixArto2.3, Artofix, artofix, ARTOFIX, обход блокировок, мультиаккаунтинг, мультиаккаунтинг в рф, настройка сети, DPI обход, zapret, подмена user-agent, подмена DNS, защита соединений">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #030408;
      --surface: #0a0d16;
      --surface2: #111524;
      --red: #ff3366;
      --red2: #ff5c8a;
      --orange: #ff7733;
      --blue: #4477ff;
      --blue2: #6699ff;
      --cyan: #00eeff;
      --purple: #aa44ff;
      --text: #f0f2ff;
      --muted: #7788aa;
      --muted2: #aabbcc;
      --border: rgba(255,255,255,0.06);
      --border2: rgba(255,51,102,0.3);
      --glow-red: 0 0 80px rgba(255,51,102,0.4);
      --glow-blue: 0 0 80px rgba(68,119,255,0.4);
      --glow-purple: 0 0 80px rgba(170,68,255,0.3);
      --transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1.2);
      --radius-sm: 16px;
      --radius: 28px;
      --radius-btn: 50px;
    }

    * { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      font-family: 'DM Sans', sans-serif;
      color: var(--text);
      overflow-x: hidden;
      cursor: none;
    }

    /* Кастомный курсор */
    #cursor {
      position: fixed; width: 12px; height: 12px;
      background: var(--red); border-radius: 50%;
      pointer-events: none; z-index: 9999;
      transition: transform 0.15s, background 0.3s;
      mix-blend-mode: screen;
    }
    #cursor-ring {
      position: fixed; width: 36px; height: 36px;
      border: 2px solid rgba(255,51,102,0.6); border-radius: 50%;
      pointer-events: none; z-index: 9998;
      transition: transform 0.35s cubic-bezier(0.25,0.8,0.25,1), width 0.3s, height 0.3s, border-color 0.3s;
    }

    /* Шум */
    .noise {
      position: fixed; inset: 0; z-index: 1; pointer-events: none; opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 180px 180px;
    }

    /* Живой градиентный фон за мышью */
    #mouse-gradient {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background: radial-gradient(circle 300px at 50% 50%, rgba(255,51,102,0.12), transparent 70%),
                  radial-gradient(circle 400px at 80% 20%, rgba(68,119,255,0.08), transparent 70%);
      transition: background 0.1s;
    }

    /* Фоновые частицы */
    #bg-canvas {
      position: fixed; top:0; left:0; width:100%; height:100%;
      z-index: 0; opacity: 0.5;
    }

    /* Навигация */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 1.2rem 3rem;
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(3,4,8,0.7); backdrop-filter: blur(25px);
      border-bottom: 1px solid var(--border);
      animation: slideDown 0.8s ease-out;
    }
    @keyframes slideDown { from { transform: translateY(-100%); opacity:0; } to { transform: translateY(0); opacity:1; } }
    .nav-logo {
      font-family: 'Bebas Neue', sans-serif; font-size: 1.9rem; letter-spacing: 0.12em;
      background: linear-gradient(90deg, var(--red), var(--orange), var(--purple));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      text-shadow: 0 0 30px rgba(255,51,102,0.3);
    }
    .nav-links { display: flex; gap: 2.5rem; }
    .nav-links a {
      font-family: 'Space Mono', monospace; font-size: 0.7rem; text-decoration: none;
      color: var(--muted2); letter-spacing: 0.1em; text-transform: uppercase;
      transition: color 0.3s; cursor: none; position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px;
      background: var(--red); transform: scaleX(0); transition: transform 0.3s;
    }
    .nav-links a:hover { color: var(--red2); }
    .nav-links a:hover::after { transform: scaleX(1); }
    .nav-badge {
      font-family: 'Space Mono', monospace; font-size: 0.65rem;
      background: rgba(255,51,102,0.15); border: 1px solid rgba(255,51,102,0.3);
      color: var(--red2); padding: 0.35rem 1rem; border-radius: 100px;
      letter-spacing: 0.06em; animation: pulseBadge 2s infinite;
    }
    @keyframes pulseBadge {
      0%, 100% { box-shadow: 0 0 10px rgba(255,51,102,0.2); }
      50% { box-shadow: 0 0 25px rgba(255,51,102,0.5); }
    }

    /* Hero */
    .hero {
      position: relative; z-index: 2; min-height: 100vh;
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; text-align: center; padding: 8rem 2rem 4rem;
    }
    .hero-tag {
      font-family: 'Space Mono', monospace; font-size: 0.68rem; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--red); background: rgba(255,51,102,0.1);
      border: 1px solid rgba(255,51,102,0.25); padding: 0.45rem 1.4rem;
      border-radius: 100px; margin-bottom: 2.5rem; display: inline-block;
      animation: fadeUp 1s 0.2s both;
    }
    .hero-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(7rem, 20vw, 18rem); line-height: 0.82;
      letter-spacing: -0.03em; margin-bottom: 0.2em;
      animation: fadeUp 1s 0.35s both; position: relative;
    }
    .hero-title .line1 {
      display: block; background: linear-gradient(135deg, #ffffff 0%, #ccd6ff 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .hero-title .line2 {
      display: block;
      background: linear-gradient(135deg, var(--red) 0%, var(--orange) 50%, var(--purple) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      position: relative;
      animation: glitchText 5s infinite;
    }
    @keyframes glitchText {
      0%, 100% { filter: none; }
      2% { filter: blur(2px) hue-rotate(10deg); }
      4% { filter: none; }
    }
    .hero-title .line2::after {
      content: attr(data-text); position: absolute; left: 0; top: 0;
      background: linear-gradient(135deg, var(--red) 0%, var(--orange) 50%, var(--purple) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      filter: blur(50px); opacity: 0.4; z-index: -1;
    }
    .hero-sub {
      font-size: 1.25rem; font-weight: 300; color: var(--muted2);
      max-width: 600px; margin: 1.5rem auto 3rem; line-height: 1.8;
      animation: fadeUp 1s 0.5s both;
    }
    .hero-sub strong { color: var(--text); font-weight: 600; }
    .hero-cta {
      display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap;
      animation: fadeUp 1s 0.65s both;
    }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.7rem;
      background: linear-gradient(135deg, var(--red), var(--orange));
      color: #fff; font-family: 'DM Sans', sans-serif; font-size: 1.05rem;
      font-weight: 700; text-decoration: none; padding: 1.1rem 2.8rem;
      border-radius: var(--radius-btn); border: none; cursor: none;
      box-shadow: 0 20px 50px rgba(255,51,102,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset;
      transition: all 0.3s; letter-spacing: 0.03em; position: relative; overflow: hidden;
    }
    .btn-primary::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.25), transparent);
      opacity: 0; transition: opacity 0.3s; border-radius: var(--radius-btn);
    }
    .btn-primary:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 30px 70px rgba(255,51,102,0.6), 0 0 40px rgba(255,51,102,0.3);
    }
    .btn-primary:hover::before { opacity: 1; }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: 0.7rem;
      background: transparent; color: var(--muted2); font-family: 'DM Sans', sans-serif;
      font-size: 1.05rem; font-weight: 500; text-decoration: none;
      padding: 1.1rem 2.8rem; border-radius: var(--radius-btn);
      border: 1.5px solid rgba(255,255,255,0.1); cursor: none; transition: all 0.3s;
    }
    .btn-ghost:hover { border-color: rgba(255,255,255,0.3); color: var(--text); transform: translateY(-3px); }

    .hero-stats {
      display: flex; gap: 4rem; justify-content: center; margin-top: 5rem;
      padding-top: 3rem; border-top: 1px solid var(--border);
      width: 100%; max-width: 700px; animation: fadeUp 1s 0.8s both;
    }
    .hero-stat { text-align: center; }
    .hero-stat-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 3.8rem; line-height: 1;
      background: linear-gradient(135deg, var(--red), var(--orange));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .hero-stat-label {
      font-family: 'Space Mono', monospace; font-size: 0.62rem;
      text-transform: uppercase; letter-spacing: 0.14em; color: var(--muted); margin-top: 0.5rem;
    }

    /* Scroll hint */
    .scroll-hint {
      position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
      animation: fadeUp 1s 1.2s both;
    }
    .scroll-hint span {
      font-family: 'Space Mono', monospace; font-size: 0.58rem;
      letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted);
    }
    .scroll-line {
      width: 1.5px; height: 55px;
      background: linear-gradient(to bottom, var(--red), transparent);
      animation: scrollPulse 2s infinite;
    }
    @keyframes scrollPulse {
      0%, 100% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
    }
    @keyframes fadeUp {
      from { opacity:0; transform: translateY(35px); }
      to { opacity:1; transform: translateY(0); }
    }

    /* Marquee */
    .marquee-section {
      position: relative; z-index: 2;
      border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
      background: rgba(255,51,102,0.03); overflow: hidden; padding: 1.2rem 0;
    }
    .marquee-track {
      display: flex; gap: 0; white-space: nowrap;
      animation: marquee 30s linear infinite;
    }
    .marquee-item {
      font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem;
      letter-spacing: 0.18em; color: var(--muted); padding: 0 2.5rem;
      display: inline-flex; align-items: center; gap: 1.8rem;
    }
    .marquee-item::after {
      content: '◆'; color: var(--red); font-size: 0.5rem;
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* Sections */
    section { position: relative; z-index: 2; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 3rem; }
    .section-label {
      font-family: 'Space Mono', monospace; font-size: 0.65rem;
      letter-spacing: 0.22em; text-transform: uppercase; color: var(--red);
      margin-bottom: 1.2rem; display: flex; align-items: center; gap: 1rem;
    }
    .section-label::before {
      content: ''; width: 35px; height: 1.5px; background: var(--red);
    }
    .section-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(3rem, 7vw, 6rem); line-height: 1;
      letter-spacing: 0.02em; margin-bottom: 1.8rem;
    }

    /* Glow divider */
    .glow-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,51,102,0.35), transparent);
      position: relative; z-index: 2; margin: 0;
    }

    /* Features */
    .features-section { padding: 10rem 0; }
    .features-header { max-width: 650px; margin-bottom: 5rem; }
    .features-header p { font-size: 1.1rem; color: var(--muted2); line-height: 1.8; font-weight: 300; }
    .features-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 2px; background: var(--border); border: 1px solid var(--border);
      border-radius: 28px; overflow: hidden;
    }
    .feature-card {
      background: var(--surface); padding: 3.5rem 2.8rem;
      transition: all 0.4s; position: relative; overflow: hidden;
    }
    .feature-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--red), transparent);
      transform: scaleX(0); transition: transform 0.5s;
    }
    .feature-card:hover { background: var(--surface2); transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .feature-card:hover::before { transform: scaleX(1); }
    .feature-icon {
      width: 56px; height: 56px; border-radius: 16px;
      background: rgba(255,51,102,0.1); border: 1px solid rgba(255,51,102,0.25);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.8rem; font-size: 1.5rem; transition: all 0.3s;
    }
    .feature-card:hover .feature-icon {
      background: rgba(255,51,102,0.2); box-shadow: 0 0 35px rgba(255,51,102,0.3);
      transform: scale(1.1) rotate(-5deg);
    }
    .feature-card h3 {
      font-family: 'DM Sans', sans-serif; font-size: 1.15rem; font-weight: 700;
      margin-bottom: 0.8rem; color: var(--text);
    }
    .feature-card p { font-size: 0.93rem; color: var(--muted2); line-height: 1.7; font-weight: 300; }
    .feature-num {
      position: absolute; bottom: 2rem; right: 2rem;
      font-family: 'Bebas Neue', sans-serif; font-size: 6rem;
      color: rgba(255,255,255,0.015); line-height: 1; pointer-events: none;
    }

    /* How it works */
    .how-section { padding: 10rem 0; background: linear-gradient(180deg, transparent 0%, rgba(255,51,102,0.02) 50%, transparent 100%); }
    .steps-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; margin-top: 4rem; }
    .steps-left { position: sticky; top: 130px; }
    .steps-visual {
      background: var(--surface); border: 1px solid var(--border); border-radius: 28px;
      overflow: hidden; aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center;
      position: relative;
    }
    .terminal {
      width: 92%; background: #010308; border-radius: 16px; overflow: hidden;
      font-family: 'Space Mono', monospace; font-size: 0.8rem;
      box-shadow: 0 30px 60px rgba(0,0,0,0.9);
    }
    .terminal-bar {
      background: #1a1d2a; padding: 0.8rem 1.2rem;
      display: flex; align-items: center; gap: 0.6rem;
    }
    .t-dot { width: 11px; height: 11px; border-radius: 50%; }
    .t-dot.r { background: #ff5f57; }
    .t-dot.y { background: #ffbd2e; }
    .t-dot.g { background: #28c940; }
    .terminal-title { font-size: 0.68rem; color: var(--muted); margin-left: auto; margin-right: auto; letter-spacing: 0.1em; }
    .terminal-body { padding: 1.5rem 1.5rem 1.8rem; }
    .t-line { margin-bottom: 0.45rem; display: flex; gap: 0.7rem; }
    .t-prompt { color: var(--red); }
    .t-cmd { color: #eef0ff; }
    .t-out { color: #4ea97a; }
    .t-info { color: #6699ff; }
    .t-warn { color: #ffbd2e; }
    .t-cursor { display: inline-block; width: 8px; height: 14px; background: var(--cyan); animation: blink 1s infinite; vertical-align: middle; }
    @keyframes blink { 0%,49%{opacity:1}50%,100%{opacity:0} }

    .steps-list { display: flex; flex-direction: column; gap: 0; }
    .step-item {
      display: flex; gap: 2rem; padding: 2.8rem 0;
      border-bottom: 1px solid var(--border); position: relative;
      cursor: none; transition: all 0.3s;
    }
    .step-item:last-child { border-bottom: none; }
    .step-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem;
      color: var(--red); min-width: 30px; padding-top: 0.2rem;
      letter-spacing: 0.12em; transition: all 0.3s;
    }
    .step-content h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
    .step-content p { font-size: 0.9rem; color: var(--muted2); line-height: 1.7; font-weight: 300; }
    .step-item:hover .step-num { text-shadow: 0 0 25px var(--red); transform: scale(1.2); }

    /* Changelog */
    .changelog-section { padding: 10rem 0; }
    .changelog-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 6rem; align-items: start; margin-top: 4rem; }
    .version-card {
      background: var(--surface); border: 1px solid var(--border2); border-radius: 28px;
      padding: 3rem 2.5rem; position: sticky; top: 130px; text-align: center;
      box-shadow: 0 0 40px rgba(255,51,102,0.1);
    }
    .version-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 6rem; line-height: 0.9;
      background: linear-gradient(135deg, var(--red), var(--orange));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      margin-bottom: 0.5rem;
    }
    .version-date { font-family: 'Space Mono', monospace; font-size: 0.68rem; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; margin-bottom: 2rem; }
    .version-badge {
      display: inline-block; background: rgba(255,51,102,0.12);
      border: 1px solid rgba(255,51,102,0.25); color: var(--red2);
      font-family: 'Space Mono', monospace; font-size: 0.65rem;
      letter-spacing: 0.1em; padding: 0.4rem 1rem; border-radius: 100px;
      text-transform: uppercase; margin-bottom: 2rem;
    }
    .version-divider { height: 1px; background: var(--border); margin: 1.5rem 0; }
    .version-stat { margin-bottom: 0.8rem; }
    .version-stat-label { font-family: 'Space Mono', monospace; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted); margin-bottom: 0.2rem; }
    .version-stat-val { font-size: 0.9rem; color: var(--muted2); }

    .changes-list { display: flex; flex-direction: column; gap: 2px; }
    .change-item {
      display: flex; align-items: flex-start; gap: 1.5rem;
      padding: 2rem 2.2rem; background: var(--surface);
      border-radius: 0; transition: background 0.3s; position: relative;
    }
    .change-item:first-child { border-radius: 20px 20px 0 0; }
    .change-item:last-child { border-radius: 0 0 20px 20px; }
    .change-item:hover { background: var(--surface2); }
    .change-icon {
      width: 40px; height: 40px; min-width: 40px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center; font-size: 1.1rem; margin-top: 0.1rem;
    }
    .ci-fix { background: rgba(68,119,255,0.1); } .ci-new { background: rgba(40,201,64,0.1); }
    .ci-improve { background: rgba(255,119,51,0.1); } .ci-security { background: rgba(255,51,102,0.1); }
    .change-text h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.3rem; }
    .change-text p { font-size: 0.85rem; color: var(--muted2); line-height: 1.6; font-weight: 300; }
    .change-tag {
      margin-left: auto; font-family: 'Space Mono', monospace; font-size: 0.6rem;
      text-transform: uppercase; letter-spacing: 0.1em; padding: 0.3rem 0.8rem;
      border-radius: 6px; white-space: nowrap; align-self: flex-start; margin-top: 0.2rem;
    }
    .ct-new { background: rgba(40,201,64,0.1); color: #28c940; }
    .ct-fix { background: rgba(68,119,255,0.1); color: var(--blue2); }
    .ct-improve { background: rgba(255,119,51,0.12); color: var(--orange); }
    .ct-security { background: rgba(255,51,102,0.1); color: var(--red2); }

    /* Tech */
    .tech-section { padding: 10rem 0; background: linear-gradient(180deg, transparent, rgba(68,119,255,0.02) 50%, transparent); }
    .tech-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 5rem; align-items: center; margin-top: 4rem; }
    .tech-cards { display: flex; flex-direction: column; gap: 1.5rem; }
    .tech-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .tech-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 22px; padding: 2.2rem 2rem 2rem; transition: all 0.3s;
      position: relative; overflow: hidden;
    }
    .tech-card::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--blue), transparent);
      transform: scaleX(0); transition: transform 0.5s;
    }
    .tech-card:hover { border-color: rgba(68,119,255,0.2); transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
    .tech-card:hover::after { transform: scaleX(1); }
    .tech-card-icon { font-size: 1.6rem; margin-bottom: 1rem; }
    .tech-card h4 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
    .tech-card p { font-size: 0.83rem; color: var(--muted2); line-height: 1.6; font-weight: 300; }

    .tech-aside { display: flex; flex-direction: column; gap: 1.5rem; }
    .tech-stat-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 22px; padding: 2.5rem; text-align: center;
    }
    .tsc-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 4rem; line-height: 1;
      background: linear-gradient(135deg, var(--blue), var(--cyan));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      margin-bottom: 0.3rem; display: block;
    }
    .tsc-label { font-family: 'Space Mono', monospace; font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); }
    .progress-bar-wrap { margin-top: 1.8rem; }
    .progress-label {
      display: flex; justify-content: space-between;
      font-family: 'Space Mono', monospace; font-size: 0.62rem;
      text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted);
      margin-bottom: 0.5rem;
    }
    .progress-bar {
      height: 3px; background: rgba(255,255,255,0.05);
      border-radius: 10px; overflow: hidden; margin-bottom: 1rem;
    }
    .progress-fill {
      height: 100%; border-radius: 10px;
      background: linear-gradient(90deg, var(--red), var(--orange));
      transition: width 1.8s cubic-bezier(0.25,0.8,0.25,1); width: 0;
    }
    .progress-fill.blue { background: linear-gradient(90deg, var(--blue), var(--cyan)); }
    .progress-fill.green { background: linear-gradient(90deg, #28c940, #00eeff); }

    /* FAQ */
    .faq-section { padding: 10rem 0; }
    .faq-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 6rem; align-items: start; margin-top: 4rem; }
    .faq-intro p { font-size: 1rem; color: var(--muted2); line-height: 1.8; font-weight: 300; margin-top: 1.5rem; position: sticky; top: 130px; }
    .accordion { display: flex; flex-direction: column; }
    .acc-item { border-bottom: 1px solid var(--border); overflow: hidden; }
    .acc-btn {
      width: 100%; background: none; border: none; padding: 2.2rem 0;
      display: flex; align-items: center; justify-content: space-between;
      cursor: none; text-align: left; color: var(--text);
      font-family: 'DM Sans', sans-serif; font-size: 1.05rem; font-weight: 600;
      transition: color 0.3s; gap: 2rem;
    }
    .acc-btn:hover { color: var(--red2); }
    .acc-icon {
      width: 30px; height: 30px; min-width: 30px; border-radius: 8px;
      background: rgba(255,51,102,0.1); border: 1px solid rgba(255,51,102,0.25);
      display: flex; align-items: center; justify-content: center;
      color: var(--red); font-size: 1.1rem;
      transition: transform 0.4s, background 0.3s;
    }
    .acc-btn.open .acc-icon { transform: rotate(45deg); background: rgba(255,51,102,0.2); }
    .acc-body { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.33,1,0.68,1); }
    .acc-body.open { max-height: 500px; }
    .acc-body-inner { padding-bottom: 2rem; font-size: 0.95rem; color: var(--muted2); line-height: 1.8; font-weight: 300; }
    .acc-body-inner strong { color: var(--text); font-weight: 500; }

    /* Download */
    .download-section { padding: 10rem 0; text-align: center; }
    .download-inner {
      background: var(--surface); border: 1px solid var(--border2);
      border-radius: 40px; padding: 6rem 4rem; position: relative;
      overflow: hidden; max-width: 950px; margin: 0 auto;
      box-shadow: 0 40px 80px rgba(0,0,0,0.4);
    }
    .download-inner::before {
      content: ''; position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
      width: 700px; height: 350px;
      background: radial-gradient(ellipse, rgba(255,51,102,0.2) 0%, transparent 70%);
      pointer-events: none;
    }
    .download-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3.5rem, 8vw, 6.5rem); line-height: 1; margin-bottom: 1.5rem; }
    .download-sub { font-size: 1.05rem; color: var(--muted2); max-width: 500px; margin: 0 auto 3rem; line-height: 1.7; font-weight: 300; }
    .platform-badges { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem; }
    .platform-badge {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
      padding: 0.5rem 1.2rem; border-radius: 100px;
      font-family: 'Space Mono', monospace; font-size: 0.66rem;
      letter-spacing: 0.08em; color: var(--muted2); text-transform: uppercase;
    }
    .download-requirements {
      display: flex; gap: 3rem; justify-content: center; flex-wrap: wrap;
      margin-top: 3rem; padding-top: 3rem; border-top: 1px solid var(--border);
    }
    .req-item {
      font-family: 'Space Mono', monospace; font-size: 0.66rem;
      text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted);
      display: flex; align-items: center; gap: 0.6rem;
    }
    .req-item::before { content: '✓'; color: #28c940; }

    /* Footer */
    footer {
      position: relative; z-index: 2; border-top: 1px solid var(--border);
      padding: 5rem 0 3rem;
    }
    .footer-inner {
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 2rem; max-width: 1300px; margin: 0 auto; padding: 0 3rem;
    }
    .footer-logo {
      font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; letter-spacing: 0.12em;
      background: linear-gradient(90deg, var(--red), var(--orange));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .footer-links { display: flex; gap: 2.5rem; }
    .footer-links a {
      font-family: 'Space Mono', monospace; font-size: 0.62rem;
      text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted);
      text-decoration: none; transition: color 0.3s; cursor: none;
    }
    .footer-links a:hover { color: var(--muted2); }
    .footer-copy { font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; color: var(--muted); }
    .footer-note {
      max-width: 1300px; margin: 2rem auto 0; padding: 2.5rem 3rem 0;
      border-top: 1px solid var(--border);
      font-family: 'Space Mono', monospace; font-size: 0.58rem; line-height: 1.8;
      letter-spacing: 0.05em; color: var(--muted);
    }

    /* Modal */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.88);
      backdrop-filter: blur(20px); z-index: 1000;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none; transition: opacity 0.5s;
    }
    .modal-overlay.active { opacity: 1; pointer-events: all; }
    .modal {
      background: var(--surface); border: 1px solid var(--border2);
      border-radius: 36px; max-width: 650px; width: 93%;
      max-height: 85vh; padding: 3.5rem 3rem 3rem;
      overflow-y: auto; transform: scale(0.93) translateY(25px);
      transition: transform 0.5s cubic-bezier(0.25,0.8,0.25,1);
      scrollbar-width: thin; scrollbar-color: rgba(255,51,102,0.3) transparent;
    }
    .modal-overlay.active .modal { transform: scale(1) translateY(0); }
    .modal-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
    .modal-sub { font-family: 'Space Mono', monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--red); margin-bottom: 2.5rem; }
    .modal-body { font-size: 0.9rem; color: var(--muted2); line-height: 1.9; font-weight: 300; }
    .modal-body p { margin-bottom: 1.1rem; }
    .modal-body strong { color: var(--text); font-weight: 600; }
    .modal-divider { height: 1px; background: var(--border); margin: 2rem 0; }
    .modal-accept {
      display: block; width: 100%; margin-top: 2.5rem;
      background: linear-gradient(135deg, var(--red), var(--orange));
      border: none; border-radius: 100px; color: #fff;
      font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1.05rem;
      padding: 1.1rem; cursor: none; transition: all 0.3s; letter-spacing: 0.04em;
      box-shadow: 0 18px 45px rgba(255,51,102,0.4);
    }
    .modal-accept:hover { box-shadow: 0 25px 60px rgba(255,51,102,0.6); transform: translateY(-3px); }

    /* Scroll reveal */
    .reveal {
      opacity: 0; transform: translateY(50px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-delay-1 { transition-delay: 0.12s; }
    .reveal-delay-2 { transition-delay: 0.24s; }
    .reveal-delay-3 { transition-delay: 0.36s; }
    .reveal-delay-4 { transition-delay: 0.48s; }

    /* Жидкостная анимация для кнопок */
    .btn-primary, .btn-ghost { position: relative; overflow: hidden; }
    .btn-primary .liquid, .btn-ghost .liquid {
      position: absolute; top: 50%; left: 50%; width: 0; height: 0;
      background: rgba(255,255,255,0.15); border-radius: 50%;
      transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s;
    }
    .btn-primary:hover .liquid, .btn-ghost:hover .liquid { width: 500px; height: 500px; }

    @media (max-width: 1000px) {
      nav { padding: 1rem 1.5rem; }
      .nav-links { display: none; }
      .container { padding: 0 1.5rem; }
      .features-grid { grid-template-columns: 1fr; }
      .steps-layout, .changelog-grid, .tech-layout, .faq-grid { grid-template-columns: 1fr; gap: 3rem; }
      .steps-left { position: static; }
      .version-card { position: static; }
      .faq-intro p { position: static; }
      .hero-stats { gap: 2rem; }
      .download-inner { padding: 4rem 2rem; }
      .footer-inner { flex-direction: column; text-align: center; }
      .tech-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <canvas id="bg-canvas"></canvas>
  <div class="noise"></div>
  <div id="mouse-gradient"></div>
  <div id="cursor"></div>
  <div id="cursor-ring"></div>

  <nav>
    <div class="nav-logo">ArtoFIX</div>
    <div class="nav-links">
      <a href="#features">Возможности</a>
      <a href="#how">Как работает</a>
      <a href="#changelog">Что нового</a>
      <a href="#faq">FAQ</a>
    </div>
    <div class="nav-badge">v2.3 Stable</div>
  </nav>

  <section class="hero">
    <div class="hero-tag">Релиз 2025 · Версия 2.3 Stable</div>
    <h1 class="hero-title">
      <span class="line1">ARTO</span>
      <span class="line2" data-text="FIX">FIX</span>
    </h1>
    <p class="hero-sub">
      Профессиональный инструмент для <strong>обхода блокировок</strong>, 
      мультиаккаунтинга и полной защиты цифрового следа. 
      Настраивается за минуту — работает без остановок.
    </p>
    <div class="hero-cta">
      <a href="#" id="download-link" class="btn-primary">
        <span class="liquid"></span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M4 7l4 4 4-4M2 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Скачать ArtoFIX 2.3
      </a>
      <a href="#features" class="btn-ghost">
        <span class="liquid"></span>
        Смотреть возможности →
      </a>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <span class="hero-stat-num" data-count="50">0</span>
        <span class="hero-stat-label">методов обхода</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num" data-count="99">0</span>
        <span class="hero-stat-label">% сайтов открывается</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num" data-count="2">0</span>
        <span class="hero-stat-label">мин на настройку</span>
      </div>
    </div>
    <div class="scroll-hint">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <div class="marquee-section">
    <div class="marquee-track" id="marquee">
      <span class="marquee-item">DPI Bypass</span>
      <span class="marquee-item">Мультиаккаунтинг</span>
      <span class="marquee-item">DNS Protection</span>
      <span class="marquee-item">User-Agent Spoofing</span>
      <span class="marquee-item">Auto Updates</span>
      <span class="marquee-item">Zapret Integration</span>
      <span class="marquee-item">Профили изолированы</span>
      <span class="marquee-item">Обход РКН</span>
      <span class="marquee-item">Без утечек DNS</span>
      <span class="marquee-item">GitHub Releases</span>
      <span class="marquee-item">DPI Bypass</span>
      <span class="marquee-item">Мультиаккаунтинг</span>
      <span class="marquee-item">DNS Protection</span>
      <span class="marquee-item">User-Agent Spoofing</span>
      <span class="marquee-item">Auto Updates</span>
      <span class="marquee-item">Zapret Integration</span>
      <span class="marquee-item">Профили изолированы</span>
      <span class="marquee-item">Обход РКН</span>
      <span class="marquee-item">Без утечек DNS</span>
      <span class="marquee-item">GitHub Releases</span>
    </div>
  </div>

  <section class="features-section" id="features">
    <div class="container">
      <div class="features-header reveal">
        <div class="section-label">Возможности</div>
        <h2 class="section-title">ВСЁ В ОДНОМ<br>ИНСТРУМЕНТЕ</h2>
        <p>ArtoFIX объединяет десятки технологий обхода блокировок в одном приложении с удобным интерфейсом. Больше не нужно разбираться с Zapret вручную — ArtoFIX делает всё за вас и всегда остаётся актуальным.</p>
      </div>
      <div class="features-grid reveal">
        <div class="feature-card">
          <div class="feature-icon">🛡</div>
          <h3>DPI-обход нового поколения</h3>
          <p>Автоматическая фрагментация пакетов, подмена заголовков TLS и HTTP. Алгоритм адаптируется под текущие методы блокировки РКН в реальном времени.</p>
          <div class="feature-num">01</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👤</div>
          <h3>Мультиаккаунтинг без рисков</h3>
          <p>Полная изоляция каждого профиля — собственные куки, кеш, хранилище, прокси и отпечатки браузера. Десятки аккаунтов на одном устройстве без риска бана.</p>
          <div class="feature-num">02</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Подмена цифровых отпечатков</h3>
          <p>User-Agent, разрешение экрана, глубина цвета, часовой пояс, WebGL, Canvas fingerprint — все параметры гибко настраиваются под нужный профиль.</p>
          <div class="feature-num">03</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Автоматические обновления</h3>
          <p>ArtoFIX сам загружает свежий Zapret и все модули с GitHub. Проверка подписи каждого релиза гарантирует подлинность файлов. Всегда последняя версия.</p>
          <div class="feature-num">04</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h3>DNS-защита DoH/DoT</h3>
          <p>Собственные зашифрованные DNS-серверы через DoH и DoT. Полное предотвращение утечек запросов — ни провайдер, ни РКН не увидят, что вы открываете.</p>
          <div class="feature-num">05</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📡</div>
          <h3>Мониторинг доступности</h3>
          <p>Постоянная проверка доступности сайтов из реестра РКН. Автоматическая смена стратегии обхода при изменении политики блокировок у провайдеров.</p>
          <div class="feature-num">06</div>
        </div>
      </div>
    </div>
  </section>

  <div class="glow-divider"></div>

  <section class="how-section" id="how">
    <div class="container">
      <div class="section-label reveal">Как это работает</div>
      <h2 class="section-title reveal">ПРОСТО КАК<br>ОДИН-ДВА-ТРИ</h2>
      <div class="steps-layout">
        <div class="steps-left reveal">
          <div class="steps-visual">
            <div class="terminal">
              <div class="terminal-bar">
                <div class="t-dot r"></div><div class="t-dot y"></div><div class="t-dot g"></div>
                <div class="terminal-title">artofix — bash — 80×24</div>
              </div>
              <div class="terminal-body">
                <div class="t-line"><span class="t-prompt">❯</span><span class="t-cmd"> artofix start</span></div>
                <div class="t-line"><span class="t-info">  → Initializing ArtoFIX 2.3...</span></div>
                <div class="t-line"><span class="t-out">  ✓ Zapret engine loaded</span></div>
                <div class="t-line"><span class="t-out">  ✓ DNS resolver: DoH active</span></div>
                <div class="t-line"><span class="t-out">  ✓ DPI bypass: AUTO mode</span></div>
                <div class="t-line"><span class="t-info">  → Testing 47 bypass methods...</span></div>
                <div class="t-line"><span class="t-out">  ✓ Optimal strategy found [TLS-frag]</span></div>
                <div class="t-line"><span class="t-out">  ✓ Profile isolation: enabled</span></div>
                <div class="t-line"><span class="t-warn">  ⚡ Update available: v2.3 → v2.3.1</span></div>
                <div class="t-line"><span class="t-out">  ✓ Auto-updating components...</span></div>
                <div class="t-line"><span class="t-out">  ✓ All systems operational</span></div>
                <div class="t-line"><span class="t-prompt">❯</span><span class="t-cmd"> _</span><span class="t-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps-right">
          <div class="steps-list">
            <div class="step-item reveal"><div class="step-num">01</div><div class="step-content"><h3>Скачайте и запустите</h3><p>Загрузите архив с GitHub, распакуйте в любую папку и запустите <code style="background:rgba(255,51,102,0.15);padding:0.15em 0.5em;border-radius:5px;font-family:'Space Mono',monospace;font-size:0.85em">artofix.exe</code>. Никаких установщиков, никаких системных изменений без вашего ведома.</p></div></div>
            <div class="step-item reveal reveal-delay-1"><div class="step-num">02</div><div class="step-content"><h3>Автоматическая настройка</h3><p>ArtoFIX тестирует десятки методов обхода и находит оптимальный для вашего провайдера за секунды. Параллельно загружает актуальные компоненты Zapret и настраивает зашифрованный DNS.</p></div></div>
            <div class="step-item reveal reveal-delay-2"><div class="step-num">03</div><div class="step-content"><h3>Создайте профили</h3><p>Для мультиаккаунтинга создайте изолированные профили — каждый со своим прокси, отпечатком браузера и хранилищем данных. Профили не пересекаются, риск бана сведён к нулю.</p></div></div>
            <div class="step-item reveal reveal-delay-3"><div class="step-num">04</div><div class="step-content"><h3>Работайте без ограничений</h3><p>Всё настроено. ArtoFIX работает в фоне, следит за изменениями блокировок и обновляет стратегию автоматически. Вам не нужно ни о чём думать — просто пользуйтесь интернетом свободно.</p></div></div>
            <div class="step-item reveal reveal-delay-4"><div class="step-num">05</div><div class="step-content"><h3>Автообновление без усилий</h3><p>ArtoFIX отслеживает новые релизы на GitHub, проверяет криптографическую подпись и обновляет все компоненты одной командой. Вы всегда защищены актуальными алгоритмами.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="glow-divider"></div>

  <section class="changelog-section" id="changelog">
    <div class="container">
      <div class="section-label reveal">Changelog</div>
      <h2 class="section-title reveal">ЧТО НОВОГО<br>В ВЕРСИИ 2.3</h2>
      <div class="changelog-grid">
        <div class="version-card reveal">
          <div class="version-num">2.3</div>
          <div class="version-date">Апрель 2025</div>
          <div class="version-badge">Stable Release</div>
          <div class="version-divider"></div>
          <div class="version-stat"><div class="version-stat-label">Всего изменений</div><div class="version-stat-val">47 commits</div></div>
          <div class="version-stat"><div class="version-stat-label">Платформа</div><div class="version-stat-val">Windows 10 / 11</div></div>
          <div class="version-stat"><div class="version-stat-label">Размер</div><div class="version-stat-val">~18 МБ</div></div>
          <div class="version-stat"><div class="version-stat-label">Runtime</div><div class="version-stat-val">Node.js / Electron</div></div>
        </div>
        <div class="changes-list reveal">
          <div class="change-item"><div class="change-icon ci-security">🛡</div><div class="change-text"><h4>Новый алгоритм под мартовские изменения РКН</h4><p>Полностью переработан движок обхода DPI под актуальные методы блокировки. Новый алгоритм фрагментации TLS-handshake и подмены заголовков HTTP/2.</p></div><div class="change-tag ct-new">New</div></div>
          <div class="change-item"><div class="change-icon ci-new">✅</div><div class="change-text"><h4>Верификация релизов через GitHub API</h4><p>Автообновление теперь проверяет криптографическую подпись каждого релиза перед установкой. Защита от подмены компонентов при MITM-атаке.</p></div><div class="change-tag ct-security">Security</div></div>
          <div class="change-item"><div class="change-icon ci-fix">🔧</div><div class="change-text"><h4>Исправлена подмена разрешения в Electron-приложениях</h4><p>Фикс бага, из-за которого некоторые Electron-приложения получали реальное разрешение экрана вместо подменённого значения профиля.</p></div><div class="change-tag ct-fix">Fix</div></div>
          <div class="change-item"><div class="change-icon ci-improve">⚡</div><div class="change-text"><h4>Улучшенный консольный интерфейс</h4><p>Прогресс-бар, цветные логи с уровнями, временные метки и отображение активных стратегий в реальном времени. Диагностика стала намного удобнее.</p></div><div class="change-tag ct-improve">Improve</div></div>
          <div class="change-item"><div class="change-icon ci-fix">🛠</div><div class="change-text"><h4>Снижено число ложных срабатываний антивирусов</h4><p>Переработана сборка и подписание бинарных файлов. Код обфускации компонентов приведён в соответствие с рекомендациями VirusTotal.</p></div><div class="change-tag ct-fix">Fix</div></div>
          <div class="change-item"><div class="change-icon ci-new">🔄</div><div class="change-text"><h4>Принудительное обновление компонентов одной командой</h4><p>Новая команда <code style="font-family:'Space Mono',monospace;font-size:0.8em;background:rgba(255,255,255,0.07);padding:0.1em 0.35em;border-radius:4px">artofix update --force</code> полностью переустанавливает Zapret и все зависимости.</p></div><div class="change-tag ct-new">New</div></div>
          <div class="change-item"><div class="change-icon ci-improve">🧩</div><div class="change-text"><h4>Полная переработка системы изоляции профилей</h4><p>Новая архитектура хранения профилей с шифрованием, версионированием и быстрым переключением. Время смены профиля сокращено в 3 раза.</p></div><div class="change-tag ct-improve">Improve</div></div>
        </div>
      </div>
    </div>
  </section>

  <div class="glow-divider"></div>

  <section class="tech-section">
    <div class="container">
      <div class="section-label reveal">Технологии</div>
      <h2 class="section-title reveal">ПОД КАПОТОМ</h2>
      <div class="tech-layout">
        <div class="tech-cards reveal">
          <div class="tech-row">
            <div class="tech-card"><div class="tech-card-icon">⚙️</div><h4>Zapret Engine</h4><p>Лучший open-source движок для обхода DPI в основе. Автоматически обновляется до последней версии с проверкой подписи.</p></div>
            <div class="tech-card"><div class="tech-card-icon">🔐</div><h4>DoH / DoT DNS</h4><p>Зашифрованные DNS-запросы через DNS-over-HTTPS и DNS-over-TLS. Провайдер не видит, какие домены вы запрашиваете.</p></div>
          </div>
          <div class="tech-row">
            <div class="tech-card"><div class="tech-card-icon">🧬</div><h4>TLS Fingerprint</h4><p>Подмена JA3/JA4 TLS-отпечатков, имитация популярных браузеров. Невозможно отличить от легального трафика Chrome.</p></div>
            <div class="tech-card"><div class="tech-card-icon">📦</div><h4>Electron Isolation</h4><p>Изолированные Electron-контексты для каждого профиля с отдельным хранилищем, памятью и сетевым стеком.</p></div>
          </div>
          <div class="tech-row">
            <div class="tech-card"><div class="tech-card-icon">🔗</div><h4>GitHub Auto-Update</h4><p>Прямая интеграция с GitHub Releases API. Мгновенная доставка обновлений с верификацией через GPG-подпись.</p></div>
            <div class="tech-card"><div class="tech-card-icon">📊</div><h4>RKN Monitor</h4><p>Постоянный мониторинг реестра заблокированных ресурсов. Автоматическая адаптация стратегии при смене политики.</p></div>
          </div>
        </div>
        <div class="tech-aside reveal reveal-delay-2">
          <div class="tech-stat-card">
            <span class="tsc-num" data-count="47">0</span>
            <div class="tsc-label">Методов обхода</div>
          </div>
          <div class="tech-stat-card">
            <span class="tsc-num" data-count="12" style="background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">0</span>
            <div class="tsc-label">DNS-серверов</div>
            <div class="progress-bar-wrap">
              <div class="progress-label"><span>DPI bypass</span><span>98%</span></div>
              <div class="progress-bar"><div class="progress-fill" data-width="98"></div></div>
              <div class="progress-label"><span>DNS leaks</span><span>100%</span></div>
              <div class="progress-bar"><div class="progress-fill blue" data-width="100"></div></div>
              <div class="progress-label"><span>Profile isolation</span><span>96%</span></div>
              <div class="progress-bar"><div class="progress-fill green" data-width="96"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="glow-divider"></div>

  <section class="faq-section" id="faq">
    <div class="container">
      <div class="faq-grid">
        <div class="faq-intro reveal">
          <div class="section-label">FAQ</div>
          <h2 class="section-title" style="font-size:clamp(2.5rem,4.5vw,3.8rem)">ЧАСТО ЗАДАВАЕМЫЕ<br>ВОПРОСЫ</h2>
          <p>Собрали самые популярные вопросы об ArtoFIX. Если ответа на ваш вопрос нет — откройте Issue на GitHub.</p>
        </div>
        <div class="accordion reveal">
          <div class="acc-item"><button class="acc-btn">Что такое DPI и почему обычный VPN не всегда работает?<div class="acc-icon">+</div></button><div class="acc-body"><div class="acc-body-inner"><strong>DPI (Deep Packet Inspection)</strong> — технология глубокой инспекции пакетов, которую используют провайдеры и РКН для блокировки сайтов. Обычный VPN виден как VPN-трафик и легко блокируется. ArtoFIX маскирует соединение под обычный HTTPS-трафик через фрагментацию пакетов и подмену заголовков — такой трафик невозможно отличить от обычного браузинга.</div></div></div>
          <div class="acc-item"><button class="acc-btn">ArtoFIX меняет системные настройки или требует прав администратора?<div class="acc-icon">+</div></button><div class="acc-body"><div class="acc-body-inner">Для запуска Zapret-движка и изменения сетевых правил <strong>требуются права администратора</strong>. ArtoFIX запрашивает их один раз при старте. Все изменения системных настроек прозрачно логируются и полностью откатываются при остановке приложения. Вы всегда видите, что именно было изменено.</div></div></div>
          <div class="acc-item"><button class="acc-btn">Насколько безопасны изолированные профили для мультиаккаунтинга?<div class="acc-icon">+</div></button><div class="acc-body"><div class="acc-body-inner">Каждый профиль работает в <strong>полностью изолированном контексте</strong>: отдельное хранилище Cookie, кеш, IndexedDB, localStorage, а также уникальный набор отпечатков (User-Agent, разрешение, WebGL, Canvas, часовой пояс). При использовании отдельного прокси для каждого профиля вероятность связывания аккаунтов платформой стремится к нулю.</div></div></div>
          <div class="acc-item"><button class="acc-btn">Как часто выходят обновления и нужно ли их ставить вручную?<div class="acc-icon">+</div></button><div class="acc-body"><div class="acc-body-inner">Обновления выходят <strong>по мере изменений в блокировках РКН</strong> — обычно раз в 1–3 недели. ArtoFIX проверяет GitHub Releases при каждом запуске и уведомляет о новой версии. Команда <code style="font-family:'Space Mono',monospace;font-size:0.85em;background:rgba(255,255,255,0.07);padding:0.1em 0.35em;border-radius:4px">artofix update</code> обновляет всё автоматически с проверкой подписи.</div></div></div>
          <div class="acc-item"><button class="acc-btn">Почему антивирус может ругаться на ArtoFIX?<div class="acc-icon">+</div></button><div class="acc-body"><div class="acc-body-inner">ArtoFIX использует <strong>низкоуровневые сетевые операции</strong> и модифицирует сетевой стек Windows — аналогично тому, как это делают VPN-клиенты и файрволы. Некоторые антивирусы дают ложные срабатывания на такой код. В версии 2.3 мы значительно снизили их число. Исходный код открыт на GitHub — вы можете убедиться в его безопасности самостоятельно.</div></div></div>
          <div class="acc-item"><button class="acc-btn">На каких версиях Windows работает ArtoFIX?<div class="acc-icon">+</div></button><div class="acc-body"><div class="acc-body-inner">Официально поддерживаются <strong>Windows 10 (1903+) и Windows 11</strong>. На более старых версиях запуск теоретически возможен, но не гарантирован. Поддержка Linux и macOS находится в планах на версию 3.0. Для работы необходим Node.js (встроен в дистрибутив) и ~50 МБ свободного места.</div></div></div>
        </div>
      </div>
    </div>
  </section>

  <div class="glow-divider"></div>

  <section class="download-section">
    <div class="container">
      <div class="download-inner reveal">
        <div class="section-label" style="justify-content:center">Готовы начать?</div>
        <h2 class="download-title">СКАЧАЙТЕ<br>ARTOFIX 2.3</h2>
        <p class="download-sub">Бесплатно. Открытый исходный код. Автоматические обновления. Никаких регистраций.</p>
        <div class="platform-badges">
          <span class="platform-badge">🪟 Windows 10</span>
          <span class="platform-badge">🪟 Windows 11</span>
          <span class="platform-badge">⚡ x64 / arm64</span>
          <span class="platform-badge">📦 ~18 МБ</span>
        </div>
        <div style="display:flex;gap:1.2rem;justify-content:center;flex-wrap:wrap">
          <a href="#" id="download-link-2" class="btn-primary" style="font-size:1.15rem;padding:1.3rem 3.2rem">
            <span class="liquid"></span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v10M4 8l5 5 5-5M2 14h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Скачать — Бесплатно
          </a>
          <a href="https://github.com/Artins200/ArtoFIX-2.3" target="_blank" class="btn-ghost" style="font-size:1.15rem;padding:1.3rem 2.8rem">
            <span class="liquid"></span>
            GitHub →
          </a>
        </div>
        <div class="download-requirements">
          <span class="req-item">Windows 10 / 11</span>
          <span class="req-item">x64 или ARM64</span>
          <span class="req-item">Node.js включён</span>
          <span class="req-item">Права администратора</span>
          <span class="req-item">Открытый код</span>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <div class="footer-logo">ArtoFIX</div>
      <div class="footer-links">
        <a href="https://github.com/Artins200/ArtoFIX-2.3" target="_blank">GitHub</a>
        <a href="#faq">FAQ</a>
        <a href="#changelog">Changelog</a>
      </div>
      <div class="footer-copy">© 2025 ArtoFIX · v2.3 Stable</div>
    </div>
    <div class="footer-note">
      Только для легального использования на собственных устройствах. Автор не несёт ответственности за нарушение пользователем законодательства или условий использования сторонних сервисов. Все торговые марки принадлежат их владельцам.
    </div>
  </footer>

  <div class="modal-overlay" id="license-modal">
    <div class="modal">
      <div class="modal-title">Лицензионное соглашение</div>
      <div class="modal-sub">Внимательно прочитайте перед использованием</div>
      <div class="modal-body">
        <p><strong>1. Образовательное использование.</strong> ArtoFIX 2.3 предоставляется исключительно в образовательных и исследовательских целях. Использование в коммерческих целях или для нарушения законодательства запрещено.</p>
        <p><strong>2. Ответственность.</strong> Автор не несёт ответственности за сохранность данных, работоспособность ОС и любого ПО, затронутого в процессе установки или использования ArtoFIX 2.3.</p>
        <p><strong>3. Правовые последствия.</strong> Приложение может использоваться для обхода технических ограничений интернет-провайдеров, что может противоречить местному законодательству. Используя ArtoFIX 2.3, вы принимаете на себя всю полноту правовой ответственности.</p>
        <p><strong>4. Мультиаккаунтинг.</strong> Использование для мультиаккаунтинга может нарушать условия использования платформ (Google, YouTube и др.). Автор не поощряет обход политик этих сервисов.</p>
        <p><strong>5. Системные изменения.</strong> Все изменения сетевых настроек (DNS, прокси, правила фаервола) производятся исключительно по решению пользователя и полностью откатываются при остановке приложения.</p>
        <p><strong>6. Принятие условий.</strong> Устанавливая ArtoFIX 2.3, вы подтверждаете, что прочитали и приняли все условия данного соглашения.</p>
      </div>
      <div class="modal-divider"></div>
      <button class="modal-accept" id="accept-license">Принимаю условия — Скачать ArtoFIX 2.3</button>
    </div>
  </div>

  <script>
    (function() {
      // ── КАСТОМНЫЙ КУРСОР ──
      const cur = document.getElementById('cursor');
      const ring = document.getElementById('cursor-ring');
      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
      function animateCursor() {
        cur.style.left = (mx - 6) + 'px'; cur.style.top = (my - 6) + 'px';
        rx += (mx - rx - 18) * 0.1; ry += (my - ry - 18) * 0.1;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(animateCursor);
      }
      animateCursor();
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => { ring.style.width='60px'; ring.style.height='60px'; ring.style.borderColor='rgba(255,51,102,0.8)'; });
        el.addEventListener('mouseleave', () => { ring.style.width='36px'; ring.style.height='36px'; ring.style.borderColor='rgba(255,51,102,0.6)'; });
      });

      // ── ЖИВОЙ ГРАДИЕНТ ЗА МЫШЬЮ ──
      const mouseGrad = document.getElementById('mouse-gradient');
      document.addEventListener('mousemove', e => {
        mouseGrad.style.background = `radial-gradient(circle 350px at ${e.clientX}px ${e.clientY}px, rgba(255,51,102,0.15), transparent 70%), radial-gradient(circle 450px at 80% 20%, rgba(68,119,255,0.08), transparent 70%)`;
      });

      // ── CANVAS ЧАСТИЦЫ ──
      const canvas = document.getElementById('bg-canvas');
      const ctx = canvas.getContext('2d');
      let W, H, particles = [];
      function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
      window.addEventListener('resize', resize); resize();
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * 2200 - 600, y: Math.random() * 1400,
          r: Math.random() * 2 + 0.4,
          vx: (Math.random() - 0.5) * 0.2, vy: -Math.random() * 0.25 - 0.05,
          alpha: Math.random() * 0.6 + 0.1,
          color: Math.random() > 0.5 ? '#ff3366' : '#4477ff'
        });
      }
      function drawBg() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
          p.x += p.vx; p.y += p.vy;
          if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
          if (p.x < -20) p.x = W + 20;
          if (p.x > W + 20) p.x = -20;
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(drawBg);
      }
      drawBg();

      // ── SCROLL REVEAL ──
      const reveals = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      reveals.forEach(r => obs.observe(r));

      // ── COUNTER ANIMATE ──
      function animateCount(el) {
        const target = +el.dataset.count;
        const dur = 1800;
        const start = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 4);
          el.textContent = Math.round(ease * target);
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = target + (el.closest('.hero-stat') ? (target === 99 ? '%' : '+') : '+');
        }
        requestAnimationFrame(tick);
      }
      const counters = document.querySelectorAll('[data-count]');
      const cObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); cObs.unobserve(e.target); } });
      }, { threshold: 0.5 });
      counters.forEach(c => cObs.observe(c));

      // ── PROGRESS BARS ──
      const bars = document.querySelectorAll('.progress-fill');
      const bObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.width + '%'; bObs.unobserve(e.target); } });
      }, { threshold: 0.5 });
      bars.forEach(b => { b.style.width = '0'; bObs.observe(b); });

      // ── ACCORDION FAQ ──
      document.querySelectorAll('.acc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const body = btn.nextElementSibling;
          const isOpen = body.classList.contains('open');
          document.querySelectorAll('.acc-body.open').forEach(b => { b.classList.remove('open'); b.previousElementSibling.classList.remove('open'); });
          if (!isOpen) { body.classList.add('open'); btn.classList.add('open'); }
        });
      });

      // ── МОДАЛЬНОЕ ОКНО С ЛИЦЕНЗИЕЙ ──
      const modal = document.getElementById('license-modal');
      let downloadUrl = '';
      const tag = 'v.2.3';
      fetch(`https://api.github.com/repos/Artins200/ArtoFIX-2.3/releases/tags/${tag}`)
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(data => {
          if (data.assets && data.assets.length) {
            const a = data.assets.find(x => x.name.endsWith('.zip') || x.name.endsWith('.exe')) || data.assets[0];
            downloadUrl = a.browser_download_url;
          } else {
            downloadUrl = `https://github.com/Artins200/ArtoFIX-2.3/releases/download/${tag}/ArtoFIX-2.3.zip`;
          }
        }).catch(() => {
          downloadUrl = `https://github.com/Artins200/ArtoFIX-2.3/releases/download/${tag}/ArtoFIX-2.3.zip`;
        });

      ['download-link', 'download-link-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', e => { e.preventDefault(); modal.classList.add('active'); });
      });

      document.getElementById('accept-license').addEventListener('click', () => {
        modal.classList.remove('active');
        const a = document.createElement('a');
        a.href = downloadUrl || `https://github.com/Artins200/ArtoFIX-2.3/releases/tag/${tag}`;
        if (!downloadUrl) a.target = '_blank';
        a.download = '';
        document.body.appendChild(a); a.click(); a.remove();
      });

      modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
    })();
  </script>
</body>
</html>
