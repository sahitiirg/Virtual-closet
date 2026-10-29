const avatar = {
    skin: #FFD9C2
    hair: #3D2314
    eyes: "#A19664"
    base: "#E8E2DC"
};

function drawAvatar() {
    const a = avatar;
    document.getElementById("avatar").innerHTML = `
        <!-- Hair behind the body -->
        <g id="layer-hair-back">
            <path d="M64 60 Q64 22 100 22 Q136 22 136 60 L138 120 Q100 130 62 120 Z" fill="${a.hair}"/>
        </g>
        <!-- Body -->
        <g id="layer-body">
            <rect x="44" y="108" width="18" height="112" rx="9" fill="${a.skin}"/>
            <rect x="138" y="108" width="18" height="112" rx="9" fill="${a.skin}"/>
            <circle cx="53" cy="224" r="10" fill="${a.skin}"/>
            <circle cx="147" cy="224" r="10" fill="${a.skin}"/>
            <rect x="70" y="206" width="26" height="150" rx="12" fill="${a.skin}"/>
            <rect x="104" y="206" width="26" height="150" rx="12" fill="${a.skin}"/>
            <ellipe cx="80" cy="360" rx="16" ry="8" fill="${a.skin}"/>
            <ellipe cx="120" cy="360" rx="16" ry="8" fill="${a.skin}"/>
            <path d="M64 108 Q100 98 136 108 L130 170 L134 212 L66 212 L70 170 Z" fill="${a.skin}"/>
            <rect x="90" y="86" width="20" height="20" fill="${a.skin}"/>
            <path d="M72 110 Q100 104 128 110 L128 175 L72 175 Z fill="${a.base}"/>
            <path d="M66 175 L134 175 L134 230 L102 230 L100 215 L98 230 L66 230 Z" fill="${a.base}"/>
        </g>
        <!-- Empty layers: clothes will go here later -->
        <g id="layer-bottom"></g>
        <g id="layer-top"></g>
        <g id="layer-outerwear"></g>
        <g id="layer-shoes"></g>
        <g id="layer-accessories"></g>

        <!-- Head and face -->
        <g id="layer-head">
            <circle cx="100" cy="60" r="32" fill="${a.skin}"/>
            <circle cx="88" cy="62" r="4" fill="${a.eyes}"/>
            <circle cx="112" cy="62" r="4" fill="${a.eyes}"/>
            <path d="M90 76 Q100 84 110 76" stroke="#A19664" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <ellipse cx="80" cy="72" rx="6" ry="3" fill="#E57373" opacity="0.4"/>
            <ellipse cx="120" cy="72" rx="6" ry="3" fill="#E57373" opacity="0.4"/>
        </g>

        <!-- Fringe on top -->
        <g id="layer-hair-front">
            <path d="M68 58 Q70 26 100 26 Q130 26 132 58 Q118 42 100 44 Q82 42 68 58 Z" fill="${a.hair}"/>
        </g>

    `;
}

drawAvatar();