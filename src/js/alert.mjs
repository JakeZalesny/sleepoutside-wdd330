// Reads the contents of alerts.js file and if it finds anything it creates a section called "alert list"

export async function readContents() {
    
    const response = await fetch("../json/alerts.json");
    const alerts = await response.json(); 
    const main = document.querySelector(".divider");
    const section = document.createElement("section");
    section.className = "alert-list"; 
    main.appendChild(section);
    
    if (Object.keys(alerts).length != 0) {
        if (Array.isArray(alerts)) {
            for (const item of alerts) {
                section.appendChild(formatAlert(item));
            }
        }
    }
}

function formatAlert(item) {
    let alert = document.querySelector(".alert-list")
    alert.innerHTML = `<p class="alert-card">${item.message}</p>`
    alert.color = item.color;
    alert.background = item.background;
}   