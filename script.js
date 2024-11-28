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
        video.play(); 
    });

    card.addEventListener('mouseleave', () => {
        video.pause(); 
        video.currentTime = 0;
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


// Handle Checkbox for Enhanced Search
const enhancedSearchCheckbox = document.getElementById("enhancedSearch");
enhancedSearchCheckbox.addEventListener("change", () => {
    if (enhancedSearchCheckbox.checked) {
        enhancedSearchCheckbox.parentNode.style.backgroundColor = "white";
        enhancedSearchCheckbox.parentNode.querySelector('input').style.color = "#fff";
    } else {
        enhancedSearchCheckbox.parentNode.style.backgroundColor = "#fff";
    }
});


// googleplay button
document.addEventListener('DOMContentLoaded', function () {
    const googlePlayButtons = document.querySelectorAll('.googleplay');
    console.log(googlePlayButtons)
    googlePlayButtons.forEach(button => {
        button.onclick = function () {
            window.location.href = 'play-store.html'; 
        };
    });
});


// app store button

document.addEventListener('DOMContentLoaded', function () {
    const applePlayButtons = document.querySelectorAll('.apple15');
    console.log(applePlayButtons)
    applePlayButtons.forEach(button => {
        button.onclick = function () {
            window.location.href = 'app-store.html'; 
        };
    });
});


//ham
const hamButton = document.getElementById('ham');

hamButton.addEventListener('click', () => {

    let slidingMenu = document.getElementById('sliding-menu');
    
    if (!slidingMenu) {

        slidingMenu = document.createElement('div');
        slidingMenu.id = 'sliding-menu';

        // Styling for the sliding menu
        Object.assign(slidingMenu.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100%',
            width: '40%', 
            backgroundColor: '#ffffff', 
            color: '#000000',
            boxShadow: '2px 0 10px rgba(0, 0, 0, 0.5)',
            zIndex: '1000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '30px',
            gap: '15px', 
            transform: 'translateX(-100%)', 
            transition: 'transform 0.3s ease',
            fontFamily: `'Arial', sans-serif`, 
        });

        const navItems = [
            { text: 'Android app', href: 'android.html' },
            { text: 'iOS app', href: 'ios.html' },
            { text: 'Community', href: 'community.html' },
            { text: 'Premium', href: 'premium.html' },
            { text: 'Fraud Insurance', href: 'fraud_insurance.html' },
            { text: 'Business', href: 'business.html' },
            { text: 'Scam Alert', href: 'scam-alert.html' }
        ];

        // Create and add the cancel (cross) button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = '×'; // The cross symbol
        cancelButton.id = 'cancel-button';
        Object.assign(cancelButton.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: '#000000',
            fontSize: '30px',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif',
        });

        cancelButton.addEventListener('click', () => {
            slidingMenu.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                slidingMenu.remove();
            }, 300);
        });

        slidingMenu.appendChild(cancelButton);

        // Create menu items
        navItems.forEach((item) => {
            const menuItem = document.createElement('a');
            menuItem.textContent = item.text;
            menuItem.href = item.href;

            Object.assign(menuItem.style, {
                textDecoration: 'none',
                color: '#000000',
                fontSize: '18px', 
                padding: '10px 20px',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                width: '100%', 
                marginBottom: '10px', 
                display: 'block', 
                borderBottom: '1px solid #bdc3c7', 
            });

            menuItem.addEventListener('mouseover', () => {
                menuItem.style.backgroundColor = '#f1f1f1'; 
                menuItem.style.color = '#1abc9c'; 
            });
            menuItem.addEventListener('mouseout', () => {
                menuItem.style.backgroundColor = 'transparent';
                menuItem.style.color = '#000000'; 
            });

            slidingMenu.appendChild(menuItem);
        });

        // Append the sliding menu to the body
        document.body.appendChild(slidingMenu);

        // Animate the sliding menu
        setTimeout(() => {
            slidingMenu.style.transform = 'translateX(0)';
        }, 10);

    } else {
        slidingMenu.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            slidingMenu.remove();
        }, 300);
    }
});
