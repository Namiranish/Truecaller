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

// signin 
const modalSignin = document.createElement("div");
modalSignin.style.position = "fixed";
modalSignin.style.top = "0";
modalSignin.style.left = "0";
modalSignin.style.width = "100%";
modalSignin.style.height = "100%";
modalSignin.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modalSignin.style.display = "none";
modalSignin.style.justifyContent = "center";
modalSignin.style.alignItems = "center";
modalSignin.style.zIndex = "1000";

const modalContentSignin = document.createElement("div");
modalContentSignin.style.backgroundColor = "#fff";
modalContentSignin.style.borderRadius = "10px";
modalContentSignin.style.padding = "30px";
modalContentSignin.style.width = "95%";
modalContentSignin.style.maxWidth = "600px";
modalContentSignin.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
modalContentSignin.style.textAlign = "center";
modalContentSignin.style.position = "relative";

// Modal Content with SignIn Info
modalContentSignin.innerHTML = `
    <h3 style="font-size: 30px; font-weight: 700; margin-bottom: 10px;">Sign In</h3>
    <p style="font-size: 16px; color: #2d2d2d; margin-bottom: 10px;">I'm a resident of <span style="color: #0a6cff; cursor: pointer;">India <i class="fa-solid fa-chevron-down" style="color: #0a6cff;"></i></span></p>
    
    <div class="dropdown" style="display: none; position: absolute; left: 0; right: 0; background-color: white; border: 1px solid #ddd; padding: 10px;">
        <select style="width: 100%; padding: 8px; border-radius: 5px;">
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
        </select>
    </div>

    <div style="display: flex; justify-content: space-between; gap: 10px; margin-bottom: 20px;">
        <button style="padding: 12px 20px; background-color: #1a73e8; font-size: 18px; border: none; color: white; border-radius: 5px; flex-grow: 1; height: 50px;">
            Google
        </button>
        <button style="padding: 12px 20px; background-color: #0a6cff; border: none; font-size: 16px; color: white; border-radius: 5px; flex-grow: 1; height: 50px;">
            MICROSOFT
        </button>
    </div>

    <div style="margin-bottom: 20px;">
        <input type="checkbox" id="enhancedSearch" style="margin-right: 10px;">
        <label for="enhancedSearch" style="font-size: 16px; color: #2d2d2d;">Enhanced Search</label>
    </div>

    <p style="font-size: 14px; color: #2d2d2d; margin-bottom: 10px;">
        <span style="font-weight: 700;">Your privacy is important to us</span>  | 
        <span style="font-weight: 700;">How we use your data</span>  | 
        <span style="font-weight: 700;">Data we process</span>
    </p>

    <p style="font-size: 14px; color: #2d2d2d;">
        By signing in, I accept the <span style="color: #0a6cff; font-weight: 600;">terms of service</span> and <span style="color: #0a6cff; font-weight: 600;">privacy policy</span>
    </p>

    <span id="close-modal-signin" style="position: absolute; top: 10px; right: 15px; font-size: 30px; cursor: pointer;">&times;</span>
`;

modalSignin.appendChild(modalContentSignin);
document.body.appendChild(modalSignin);

// Handle Sign In Modal Trigger
const signinButton = document.querySelector(".signin");
signinButton.addEventListener("click", () => {
    modalSignin.style.display = "flex";
});

// Handle Close Button
document.getElementById("close-modal-signin").addEventListener("click", () => {
    modalSignin.style.display = "none";
});

// Handle Dropdown for Country Selection
const countryText = document.querySelector('.signin p span');
const dropdown = document.querySelector('.dropdown');
countryText.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Handle Checkbox for Enhanced Search
const enhancedSearchCheckbox = document.getElementById("enhancedSearch");
enhancedSearchCheckbox.addEventListener("change", () => {
    if (enhancedSearchCheckbox.checked) {
        enhancedSearchCheckbox.parentNode.style.backgroundColor = "#0a6cff";
        enhancedSearchCheckbox.parentNode.querySelector('input').style.color = "#fff";
    } else {
        enhancedSearchCheckbox.parentNode.style.backgroundColor = "#fff";
    }
});


// download button
