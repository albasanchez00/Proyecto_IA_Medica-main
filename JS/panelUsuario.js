document.addEventListener("DOMContentLoaded", function() {
    const cardData = [
        { title: "📊 Estadísticas", items: ["📉 Evolución de síntomas", "📊 Progreso del tratamiento", "✅ Adherencia al tratamiento"] },
        { title: "⏰ Recordatorios", items: ["🔔 Próximos medicamentos", "🏥 Próxima cita", "⚠️ Alertas de dosis olvidadas"] },
        { title: "📄 Historial Médico", items: ["📅 Citas pasadas y diagnósticos", "📂 Descarga de informes"] },
        { title: "📩 Mensajes", items: ["💬 3 mensajes sin leer", "🔔 Notificaciones recientes"] },
        { title: "⚙️ Configuración", items: ["👤 Editar perfil", "🔧 Ajustes de notificaciones"] },
        { title: "🤖 Asistente", items: ["🗣️ Consultar", "🔧 Configuración"] }
    ];
    
    const dashboard = document.querySelector(".dashboard-overview");
    dashboard.innerHTML = cardData.map(card => `
        <div class="card">
            <h3>${card.title}</h3>
            ${card.items.map(item => `<p>${item}</p>`).join("")}
        </div>
    `).join("");
    
    const navLinks = document.querySelectorAll(".nav_panelUser a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});