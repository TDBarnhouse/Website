var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pwSecret = false;
let pwdSecret = false;
var pwContact = false;
let pwdContact = false;

var commands = [];

setTimeout(function() {
  loopLines(startingBanner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pwSecret) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === passwordSecret) {
      pwdSecret = true;
    }
    if (pwdSecret && e.keyCode == 13) {
      addLine("Authentication successful.", "success", 0);
      addLine(" ", 0);
      loopLines(secret, "", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwdSecret = false;
      pwSecret = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Authentication failed.", "error", 0);
      addLine(" ", 0);
      command.innerHTML = "";
      textarea.value = "";
      pwSecret = false;
      liner.classList.remove("password");
    }
  }   
  else if (pwContact) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === passwordContact) {
      pwdContact = true;
    }
    if (pwdContact && e.keyCode == 13) {
      addLine("Authentication successful.", "success", 0);
      addLine(" ", 0);
      loopLines(contact, "", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwdContact = false;
      pwContact = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Authentication failed.", "error", 0);
      addLine(" ", 0);
      command.innerHTML = "";
      textarea.value = "";
      pwContact = false;
      liner.classList.remove("password");
    } 
  }
    else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("tristan.barnhouse@tristan.barnhouse:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}


function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "margin", 80);
      break;
    case "whois tristan.barnhouse":
      loopLines(whois, "margin", 80);
      break;
    case "whoami":
      addLine("tristan.barnhouse", "margin", 0);
      addLine(" ", 0);      
      break;
    case "cat flag.txt":
      addLine("Gotcha! ;)", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "socials":
      loopLines(socials, "margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pwSecret = true;
      break;
    case "portfolio":
      loopLines(portfolio, "margin", 80);
      break;
    case "resume":
      loopLines(resume, "margin", 80);
      break;
    case "history":
      loopLines(commands, "margin", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "contact":
      liner.classList.add("password");
      pwContact = true;
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "ls":
      addLine("<span class=\"index\">Home  Terminal  About  Portfolio  Contact", "error", 0);
      addLine(" ", 0);
      break;
    case "cd":
      addLine("<span class=\"index\">cd: You need a directory.", "error", 0);
      addLine(" ", 0);
      break;
    case "cat":
      addLine("<span class=\"index\">cat: You need a file.", "error", 0);
      addLine(" ", 0);
      break;
    case "cat password.txt":
      addLine("Be4st1e", "margin", 0);
      addLine(" ", 0);
      break;
    case "exit":
      addLine("Closing the tristan.barnhouse framework console...", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5501/";
      }, 1000); 
      break;
    case "whois":
      addLine("<span class=\"index\">whois: You need a user ID.", "error", 0);
      addLine(" ", 0);
      break;
    case "cd home":
      addLine("Changing directory into Home...", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5501/";
      }, 1000); 
      break;
    case "cd terminal":
      addLine("Changing directory into Terminal...", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5501/";
      }, 1000); 
      break;
    case "cd about":
      addLine("Changing directory into About...", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5501/";
      }, 1000); 
      break;
    case "cd portfolio":
      addLine("Changing directory into Portfolio...", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5501/";
      }, 1000); 
      break;
    case "cd contact":
      addLine("Changing directory into Contact...", "margin", 0);
      addLine(" ", 0);
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5501/";
      }, 1000); 
      break;
    default:
      addLine("<span class=\"index\">Command not found.", "error", 0);
      addLine(" ", 0);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}