<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" width="720" height="520" role="img" aria-label="Animated chat conversation">
  <style>
    /* font + basic text */
    .txt { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:600; fill: #ffffff; font-size:14px; line-height:1.35; }

    /* shadows and base */
    .shadow { filter: url(#s); }
    .bg-none { fill: none; }

    /* typing bubble (gray) */
    .typing-bubble { fill:#e6e6e6; rx:12; ry:12; opacity:0; transform-origin: center; }
    .dot { fill:#6b6b6b; opacity:0.95; }

    /* message bubbles base */
    .bubble { rx:18; ry:18; opacity:0; transform-origin: center; }
    .left { fill: #007AFF; }    /* received - blue */
    .right { fill: #34C759; }   /* sent - green */

    /* animation - float/slide & fade */
    @keyframes inLeft {
      0% { opacity:0; transform: translateX(-18px) translateY(12px) scale(0.995); }
      60% { opacity:1; transform: translateX(6px) translateY(-6px) scale(1.002); }
      100% { opacity:1; transform: translateX(0) translateY(0) scale(1); }
    }
    @keyframes inRight {
      0% { opacity:0; transform: translateX(18px) translateY(12px) scale(0.995); }
      60% { opacity:1; transform: translateX(-6px) translateY(-6px) scale(1.002); }
      100% { opacity:1; transform: translateX(0) translateY(0) scale(1); }
    }
    @keyframes fadeOut {
      0% { opacity:1; }
      90% { opacity:0.08; }
      100% { opacity:0; display:none; }
    }

    /* typing dot bounce */
    @keyframes bounce {
      0% { transform: translateY(0); }
      40% { transform: translateY(-4px); }
      80% { transform: translateY(0); }
      100% { transform: translateY(0); }
    }

    /* --- TIMINGS (calculated based on message lengths) --- */
    /* typing durations: m1=1s, m2=1.2s, m3=2s, m4=2s (max 2s) */
    /* sequence offsets calculated so typing -> disappear -> message in -> next typing */

    /* Typing indicator appearance (fade in quickly) */
    .typing1 { animation: inLeft 0.35s forwards 0s; }    /* visible immediately */
    .typing2 { animation: inRight 0.35s forwards 1.75s; } /* approx after message1 */
    .typing3 { animation: inLeft 0.35s forwards 3.7s; }
    .typing4 { animation: inRight 0.35s forwards 6.45s; }

    /* Typing dots bouncing while visible; each dot is delayed for natural rhythm */
    .dots1 { animation: bounce 1s infinite 0s; transform-origin:center; }
    .dots2 { animation: bounce 1s infinite 0.12s; transform-origin:center; }
    .dots3 { animation: bounce 1s infinite 0.24s; transform-origin:center; }

    /* Fade typing bubble out after its duration (then message shows) */
    .typing1.hide { animation: fadeOut 0.22s forwards 1.0s; }   /* hides at 1s */
    .typing2.hide { animation: fadeOut 0.22s forwards 3.0s; }   /* hides at ~3s (1.75 + 1.2 + ~0.05) */
    .typing3.hide { animation: fadeOut 0.22s forwards 5.7s; }   /* hides at ~5.7s (3.7+2s) */
    .typing4.hide { animation: fadeOut 0.22s forwards 8.45s; }  /* hides at ~8.45s (6.45+2s) */

    /* Message enters after typing hides (small offset added) */
    .msg1 { animation: inLeft 0.7s forwards 1.15s; }  /* starts right after typing1 hides */
    .msg2 { animation: inRight 0.7s forwards 3.15s; }
    .msg3 { animation: inLeft 0.7s forwards 5.85s; }
    .msg4 { animation: inRight 0.7s forwards 8.6s; }

    /* keep messages visible after animation (for browsers that require explicit) */
    .msg1.shown, .msg2.shown, .msg3.shown, .msg4.shown { opacity:1; }

    /* small pointer tails - will appear with bubble because grouped */
  </style>

  <defs>
    <!-- subtle drop shadow -->
    <filter id="s" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- transparent canvas -->
  <rect width="100%" height="100%" class="bg-none"/>

  <!-- =========== Message & typing groups =========== -->
  <!-- Y coordinates spaced to match screenshot vibe -->

  <!-- -------- Message 1 (left blue) -------- -->
  <!-- Typing indicator (left) -->
  <g id="t1" class="typing1 typingGroup" transform="translate(36,28)">
    <g class="shadow">
      <rect class="typing-bubble" width="72" height="40" rx="12" ry="12"></rect>
    </g>
    <g transform="translate(10,20)">
      <circle class="dot dots1" cx="0" cy="0" r="4"></circle>
      <circle class="dot dots2" cx="16" cy="0" r="4"></circle>
      <circle class="dot dots3" cx="32" cy="0" r="4"></circle>
    </g>
  </g>

  <!-- Message 1 actual bubble (left) -->
  <g id="m1" class="msg1" transform="translate(36,28)">
    <g class="shadow">
      <!-- rounded rect + tail path combined -->
      <rect class="bubble left shadow" x="0" y="0" width="320" height="56" rx="18" ry="18"></rect>
      <!-- left tail -->
      <path d="M16 56 L4 68 L26 60 Q18 56 16 56 Z" fill="#007AFF" transform="translate(6,0)"></path>
    </g>
    <!-- wrapped text using foreignObject for natural wrapping -->
    <foreignObject x="14" y="8" width="292" height="48">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color:white; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; font-weight:600; font-size:14px; line-height:1.38; overflow:hidden;">
        Hey, I'm Ali 👋
      </div>
    </foreignObject>
  </g>

  <!-- -------- Message 2 (right green) -------- -->
  <!-- Typing indicator (right) -->
  <g id="t2" class="typing2 typingGroup" transform="translate(388,100)">
    <g class="shadow">
      <rect class="typing-bubble" width="72" height="40" rx="12" ry="12"></rect>
    </g>
    <g transform="translate(10,20)">
      <circle class="dot dots1" cx="0" cy="0" r="4"></circle>
      <circle class="dot dots2" cx="16" cy="0" r="4"></circle>
      <circle class="dot dots3" cx="32" cy="0" r="4"></circle>
    </g>
  </g>

  <!-- Message 2 actual bubble (right) -->
  <g id="m2" class="msg2" transform="translate(388,100)">
    <g class="shadow">
      <rect class="bubble right shadow" x="0" y="0" width="320" height="56" rx="18" ry="18"></rect>
      <!-- right tail -->
      <path d="M304 56 L320 68 L298 60 Q306 56 304 56 Z" fill="#34C759" transform="translate(0,0)"></path>
    </g>
    <foreignObject x="14" y="8" width="292" height="48">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color:white; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; font-weight:600; font-size:14px; line-height:1.38; text-align:right; overflow:hidden;">
        Huge Tech Nerd and AI Specialist
      </div>
    </foreignObject>
  </g>

  <!-- -------- Message 3 (left blue, long) -------- -->
  <g id="t3" class="typing3 typingGroup" transform="translate(36,172)">
    <g class="shadow">
      <rect class="typing-bubble" width="72" height="40" rx="12" ry="12"></rect>
    </g>
    <g transform="translate(10,20)">
      <circle class="dot dots1" cx="0" cy="0" r="4"></circle>
      <circle class="dot dots2" cx="16" cy="0" r="4"></circle>
      <circle class="dot dots3" cx="32" cy="0" r="4"></circle>
    </g>
  </g>

  <!-- Message 3 actual bubble (left, multi-line) -->
  <g id="m3" class="msg3" transform="translate(36,172)">
    <g class="shadow">
      <rect class="bubble left shadow" x="0" y="0" width="600" height="92" rx="20" ry="20"></rect>
      <path d="M16 92 L4 106 L26 98 Q18 92 16 92 Z" fill="#007AFF" transform="translate(6,0)"></path>
    </g>
    <foreignObject x="16" y="12" width="568" height="68">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color:white; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; font-weight:600; font-size:15px; line-height:1.36;">
        Always experimenting with new things, such as softwares, websites, technology, code, and AI
      </div>
    </foreignObject>
  </g>

  <!-- -------- Message 4 (right green, multi-line) -------- -->
  <g id="t4" class="typing4 typingGroup" transform="translate(388,270)">
    <g class="shadow">
      <rect class="typing-bubble" width="72" height="40" rx="12" ry="12"></rect>
    </g>
    <g transform="translate(10,20)">
      <circle class="dot dots1" cx="0" cy="0" r="4"></circle>
      <circle class="dot dots2" cx="16" cy="0" r="4"></circle>
      <circle class="dot dots3" cx="32" cy="0" r="4"></circle>
    </g>
  </g>

  <g id="m4" class="msg4" transform="translate(180,270)">
    <g class="shadow">
      <!-- place right bubble anchored to the right area (we translate group differently) -->
      <rect class="bubble right shadow" x="140" y="0" width="560" height="92" rx="20" ry="20"></rect>
      <path d="M676 92 L692 106 L670 98 Q678 92 676 92 Z" fill="#34C759" transform="translate(0,0)"></path>
    </g>
    <foreignObject x="156" y="12" width="520" height="68">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color:white; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; font-weight:600; font-size:15px; line-height:1.36; text-align:right;">
        Please follow and enjoy my projects, feel free to comment if you want to help improve them
      </div>
    </foreignObject>
  </g>

  <!-- =========== JS-less timing helpers: toggle hide classes via animationend not available in pure svg,
       so we simulate typing hide by adding a duplicate small animation (CSS above) that fades typing out.
       Due to pure SVG/CSS limitations across renderers, some browsers may keep typing element visible briefly.
       GitHub's renderer supports these animations in most cases. =========== -->

  <!-- Add initial 'hide' classes via duplicate <animate> to trigger opacity fade at desired times (works within SVG) -->
  <!-- Typing hide via animate on 'opacity' to mirror CSS fadeOut timings -->
  <animate xlink:href="#t1" attributeName="opacity" to="0" begin="1s" dur="0.001s" fill="freeze" />
  <animate xlink:href="#t2" attributeName="opacity" to="0" begin="3s" dur="0.001s" fill="freeze" />
  <animate xlink:href="#t3" attributeName="opacity" to="0" begin="5.7s" dur="0.001s" fill="freeze" />
  <animate xlink:href="#t4" attributeName="opacity" to="0" begin="8.45s" dur="0.001s" fill="freeze" />

  <!-- Forcing message groups to appear at timestamps (fallback for some renderers) -->
  <animate xlink:href="#m1" attributeName="opacity" from="0" to="1" begin="1.15s" dur="0.001s" fill="freeze" />
  <animate xlink:href="#m2" attributeName="opacity" from="0" to="1" begin="3.15s" dur="0.001s" fill="freeze" />
  <animate xlink:href="#m3" attributeName="opacity" from="0" to="1" begin="5.85s" dur="0.001s" fill="freeze" />
  <animate xlink:href="#m4" attributeName="opacity" from="0" to="1" begin="8.6s" dur="0.001s" fill="freeze" />

</svg>
