const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}
function openResume() {
    window.open("assets/Naveen_Singh_Resume.pdf", "_blank");
}
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

/* OPEN / CLOSE */
chatbotIcon.onclick = () => chatbot.style.display = "flex";
closeChat.onclick = () => chatbot.style.display = "none";

/* SEND MESSAGE */
sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;

    addMessage(msg, "user-msg");
    userInput.value = "";

    setTimeout(() => {
        botReply(msg.toLowerCase());
    }, 600);
}

function addMessage(text, className) {
    const div = document.createElement("div");
    div.className = className;
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

/* BOT KNOWLEDGE (TRAINED WITH YOUR RESUME) */
function botReply(msg) {
    let reply = "Sorry, I didn't understand. You can ask about skills, projects, or contact details.";

    if (msg.includes("name")) {
        reply = "His name is Naveen Kumar, an aspiring Data Analyst and Data Scientist.";
    }
    else if (msg.includes("contact") || msg.includes("email")) {
        reply = "📧 Email: naveensingh.ac.in@gmail.com\n📞 Phone: 9508052382";
    }
    else if (msg.includes("linkedin")) {
        reply = "🔗 LinkedIn: https://www.linkedin.com/in/naveen-kumar-8ba733253/";
    }
    else if (msg.includes("skills")) {
        reply = "Skills include Python, SQL, Machine Learning, NLP, Power BI, Tableau, Excel, Data Analysis, and Business Analysis.";
    }
    else if (msg.includes("project")) {
        reply =
        "Projects:\n• Telecom Customer Churn Prediction\n• Credit Card Fraud Detection\n• House Price Prediction\n• Netflix Data Analysis (SQL)\n• Voice Assistant Automation (Python)";
    }
    else if (msg.includes("experience") || msg.includes("intern")) {
        reply =
        "Naveen worked as a Data Analyst Intern at Wipro DICE (Dec 2024 – Mar 2025), focusing on churn prediction and fraud detection.";
    }
    else if (msg.includes("hire") || msg.includes("available")) {
        reply =
        "Yes, Naveen is open to opportunities. You can email him directly at naveensingh.ac.in@gmail.com.";
    }

    addMessage(reply, "bot-msg");
}
function openChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = "block";
}

document.getElementById("close-chat").addEventListener("click", () => {
    document.getElementById("chatbot").style.display = "none";
});
