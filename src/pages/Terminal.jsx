import React, { useState, useEffect, useRef } from "react";
import "../styles/Terminal.css";

const helps = [
  "whoami",
  "theme",
  "date",
  "echo",
  "sudo",
  "repo",
  "clear",
  "email",
  "projects",
  "neofetch",
  "challenge"
];

let cmdsin = [];
let i = -1;

function Terminal() {
  const terminalRef = useRef(null);
  const audioRef = useRef(null);
  const [theme, setThemeState] = useState(localStorage.getItem("theme") || "yellow");

  useEffect(() => {
    setTheme(theme);
    createPrompt();
  }, []);

  const setTheme = (theme) => {
    const root = document.documentElement;
    if (theme === "yellow") {
      root.style.setProperty("--guestColor", "#d79921");
      root.style.setProperty("--terminalColor", "#282828");
      root.style.setProperty("--artColor", "#ebdbb2");
      root.style.setProperty("--borderColor", "#98971a");
      root.style.setProperty("--domainColor", "#98971a");
      root.style.setProperty("--letterColor", "#a89984");
    } else {
      root.style.setProperty("--guestColor", "#fded02");
      root.style.setProperty("--terminalColor", "#090300");
      root.style.setProperty("--artColor", "#a5a2a2");
      root.style.setProperty("--borderColor", "green");
      root.style.setProperty("--domainColor", "#01a252");
      root.style.setProperty("--letterColor", "#a89984");
    }
  };

  const createPrompt = () => {
    const terminal = terminalRef.current;
    const inputBox = document.createElement("div");
    inputBox.className = "inputbox";

    const cmdline = document.createElement("div");
    cmdline.className = "cmdline";

    const prompt = document.createElement("span");
    prompt.className = "prompt";

    const guest = document.createElement("span");
    guest.classList.add("guest", "prompt");
    guest.innerText = "guest";

    const at = document.createElement("span");
    at.classList.add("at", "prompt");
    at.innerText = "@";

    const domain = document.createElement("span");
    domain.classList.add("domain", "prompt");
    domain.innerText = "terminal.com";

    const letters = document.createElement("span");
    letters.classList.add("letters", "prompt");
    letters.innerText = ":~$";

    prompt.append(guest, at, domain, letters);

    const textArea = document.createElement("input");
    textArea.className = "textarea";
    textArea.setAttribute("autocomplete", "off");

    const outputbox = document.createElement("div");
    outputbox.className = "outputbox";

    cmdline.append(prompt, textArea);
    inputBox.append(cmdline);
    terminal.append(inputBox, outputbox);
    textArea.focus();

    textArea.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        textArea.setAttribute("disabled", "true");
        const cmd = textArea.value;
        cmdsin.push(cmd);
        handleCommand(cmd, outputbox);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        textArea.value = cmdsin.at(i);
        textArea.focus();
        textArea.setSelectionRange(textArea.value.length, textArea.value.length);
        i = i - 1;
      }
    });
  };

  const handleCommand = (cmd, outputbox) => {
    if (/^echo [^\s].*/.test(cmd)) {
      const match = cmd.match(/^echo\s+(.*)/);
      const message = match ? match[1] : "";
      renderEcho(cmd, outputbox, message);
    } else {
      switch (cmd) {
        case "help": help(outputbox); break;
        case "whoami": whoami(outputbox); break;
        case "theme": toggleTheme(); break;
        case "date": renderDate(outputbox); break;
        case "neofetch": renderNeo(outputbox); break;
        case "echo": renderEcho(cmd, outputbox, ""); break;
        case "sudo": renderSudo(outputbox); break;
        case "repo": renderRepo(outputbox); break;
        case "clear": terminalRef.current.innerHTML = '<br><br>'; createPrompt(); break;
        case "email": emailFn(outputbox); break;
        case "projects": renderProjects(outputbox); break;
        case "challenge": renderChallenge(outputbox); break;
        default: invalidCmd(cmd, outputbox); break;
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "yellow" ? "dark" : "yellow";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    setThemeState(newTheme);
    createPrompt();
  };

  const renderEcho = (cmd, outputbox, message) => {
    const text = document.createElement("span");
    text.innerText = message;
    text.classList.add("helpcommands");
    outputbox.append(text);
    createPrompt();
  };

  const renderChallenge = (outputbox) => {
    const space1 = document.createElement("div");
    space1.classList.add("pass");
    const text = document.createElement("span");
    text.innerText = "Enter password: ";
    const input = document.createElement("input");
    input.className = "textarea";
    input.focus();

    const text2 = document.createElement("span");
    text2.classList.add("pass");
    text2.innerHTML = "Mudinja Kandupudi!";
    text2.style.color = "green";

    space1.append(text2, document.createElement("br"), text, input);
    outputbox.append(space1);

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        input.setAttribute("disabled", "true");
        const cmd = input.value;
        if (cmd === "Hello World") {
          const text3 = document.createElement("span");
          text3.classList.add("pass");
          text3.innerText = "Congrats! You completed the challenge successfully.";
          text3.style.color = "green";
          audioRef.current?.play();
          space1.append(document.createElement("br"), text3);
        } else {
          const text4 = document.createElement("span");
          text4.classList.add("pass");
          text4.innerText = "Wrong Password!";
          text4.style.color = "red";
          space1.append(document.createElement("br"), text4);
        }
        createPrompt();
      }
    });
  };

  const renderNeo = (outputbox) => {
    const info = {
      browser: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      memory: navigator.deviceMemory || "Unknown",
      cpuThreads: navigator.hardwareConcurrency || "Unknown"
    };

    const text = document.createElement("p");
    text.innerText = `Sys Info\n---------\nOS Platform   : ${info.platform}\nBrowser       : ${info.browser}\nScreen Size   : ${info.screen}\nLanguage      : ${info.language}\nTimezone      : ${info.timezone}\nRAM (approx.) : ${info.memory} GB\nCPU Threads   : ${info.cpuThreads}`;
    text.classList.add("neofetch");
    outputbox.append(text);
    createPrompt();
  };

  const renderRepo = (outputbox) => {
    const text = document.createElement("span");
    text.innerText = "Opening repository...";
    text.classList.add("helpcommands");
    outputbox.append(text);
    window.open("https://github.com/root-sarvesh?tab=repositories", "_blank");
    createPrompt();
  };

  const renderSudo = (outputbox) => {
    const text = document.createElement("span");
    text.classList.add("helpcommands", "permission");
    text.innerText = "Permission Denied!";
    outputbox.append(text);
    createPrompt();
  };

  const renderProjects = (outputbox) => {
    const projects = document.createElement("div");
    projects.className = "projects";
    const load = document.createElement("span");
    load.classList.add("loading");
    load.innerText = " ███▒▒▒▒▒▒▒ ";
    const text = document.createElement("span");
    text.classList.add("devtext");
    text.innerText = "UNDER DEVELOPMENT!";
    projects.append(load, text);
    outputbox.append(projects);
    createPrompt();
  };

  const renderDate = (outputbox) => {
    const date = new Date();
    const text = document.createElement("span");
    text.innerText = date;
    text.classList.add("helpcommands");
    outputbox.append(text);
    createPrompt();
  };

  const emailFn = (outputbox) => {
    const text = document.createElement("span");
    text.innerText = "Opening mailto: sarveshkp23@gmail.com...";
    text.classList.add("helpcommands");
    window.open("mailto:sarveshkp23@gmail.com");
    outputbox.append(text);
    createPrompt();
  };

  const invalidCmd = (cmd, outputbox) => {
    const text1 = document.createElement("span");
    text1.classList.add("helpcommands");
    text1.innerText = `${cmd}: Command not recognized`;
    outputbox.appendChild(text1);
    createPrompt();
  };

  const whoami = (outputbox) => {
    const container = document.createElement("div");
    container.className = "whoami";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = "Name: Sarvesh";
    nameSpan.className = "whoami-name";

    const roleSpan = document.createElement("span");
    roleSpan.textContent = "Role: Passionate Computer Science Student";
    roleSpan.className = "whoami-role";

    const institutionSpan = document.createElement("span");
    institutionSpan.textContent = "Institution: SSN College of Engineering";
    institutionSpan.className = "whoami-institution";

    const detailsPara = document.createElement("p");
    detailsPara.innerHTML = `
      Interests: Web Development, Cyber Security, Ethical Hacking, LINUX<br>
      Currently: Exploring systems programming, building a terminal-style portfolio, and experimenting with open-source tech<br>
      Website: sarvesh.dev (coming soon)<br>
      Philosophy: Talking is cheap. Show me the code! - Linus Torvalds
    `;

    container.append(nameSpan, document.createElement("br"), roleSpan, document.createElement("br"), institutionSpan, document.createElement("br"), detailsPara);
    outputbox.appendChild(container);
  };

  return (
    <>
      <div className="terminal" ref={terminalRef}></div>
      <audio id="audio" ref={audioRef} src="/success.mp3"></audio>
    </>
  );
}

export default Terminal;