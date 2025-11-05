(function() {
    const T = {
        en: {
            t: "Access Denied",
            msg: "Looks like Gravira isn’t available in your region right now.<br><br>Due to our intergalactic gaming license 🌍 (yes, we take rules seriously), we’re unable to offer access from your current location.<br><br>If you believe this is a mistake, or just want to say hi, feel free to drop us a line.",
            help: "Need help? Contact our ",
            vpn: "🛸 Using a VPN?",
            link: "live chat",
            note: "We’re cool with that 😎 — just note that depending on your setup, things might not always run smoothly.<br><br>✨ Thanks for flying with Gravira. Until next time — safe travels!"
        },
        "fr-CA": {
            t: "403 ACCÈS REFUSÉ",
            msg: "On dirait que Gravira n’est pas disponible dans votre région en ce moment.<br><br>En raison de notre licence de jeu intergalactique 🌍 (oui, on prend la réglementation au sérieux), nous ne pouvons pas offrir l’accès depuis votre emplacement actuel.<br><br>Si vous pensez qu’il s’agit d’une erreur, ou si vous voulez simplement nous dire bonjour, n’hésitez pas à nous écrire.",
            help: "💬 Besoin d’aide? Contactez-nous par clavardage",
            vpn: "🛸 Vous utilisez un VPN?",
            link: "en direct",
            note: "Ça nous va 😎 — sachez toutefois qu’en fonction de votre configuration, tout pourrait ne pas toujours fonctionner rondement.<br><br>✨ Merci d’avoir voyagé avec Gravira. À la prochaine — bon voyage !"
        }
    };

    const raw = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    const key = raw.startsWith("fr") ? "fr-CA" : "en";
    document.documentElement.lang = key;

    const d = T[key],
        g = id => document.getElementById(id);
    g("t") && (g("t").textContent = d.t);
    g("msg") && (g("msg").innerHTML = d.msg);
    g("help") && (g("help").textContent = d.help);
    g("vpn") && (g("vpn").textContent = d.vpn);
    g("link") && (g("link").textContent = d.link);
    g("note") && (g("note").innerHTML = d.note);

})();
