document.querySelectorAll('.feature-card-button').forEach(ele => {
    let arrow = ele.textContent;

    ele.addEventListener('mouseover', () => {
        ele.textContent += ' ➜';
    });

    ele.addEventListener('mouseleave', () => {
        ele.textContent = arrow
    });
});

document.querySelectorAll('.feature-card').forEach(card => {
    const video = card.querySelector('.phone-image');

    card.addEventListener('mouseover', () => {
        video.play(); // Start video playback on hover
    });

    card.addEventListener('mouseleave', () => {
        video.pause(); // Pause playback on hover exit
        video.currentTime = 0; // Reset video to the start
    });
});
const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";

const modalContent = document.createElement("div");
modalContent.style.backgroundColor = "#fff";
modalContent.style.borderRadius = "10px";
modalContent.style.padding = "30px";
modalContent.style.width = "95%";
modalContent.style.maxWidth = "700px";
modalContent.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
modalContent.style.textAlign = "left";
modalContent.style.position = "relative";

modalContent.innerHTML = `
    <h3 style="
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    ">Truecaller APK</h3>
    <p style="
        margin-bottom: 20px;
        font-size: 18px;
        color: #2d2d2d;
        line-height: 33px;
    ">
        To safely install Truecaller APK from 
        <a href="https://www.truecaller.com" target="_blank" style="
            color: #007bff;
            text-decoration: none;
            font-weight: 600;
        ">https://www.truecaller.com</a> on your Android device:
    </p>
    <ol style="margin: 0 0 20px 20px; padding: 0; font-size: 18px; display: flex; flex-direction:column; gap:15px; color: #2d2d2d;">
        <li>Download the APK.</li>
        <li>Allow installation from the highlighted source.</li>
        <li>Complete the installation, set up your Truecaller account, and enjoy spam-free communication.</li>
    </ol>
    <span id="close-modal" style="
        position: absolute;
        top: 10px;
       
         right: 10px;
        font-size: 40px;
       
        cursor: pointer;
        color: black;
    ">&times;</span>
`;

modal.appendChild(modalContent);
document.body.appendChild(modal);

const tryButton = document.querySelector(".button-tc");
tryButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
