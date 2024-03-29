"use strict";
var editor = null;

require.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });
require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
    scrollbar: {
      useShadows: false,
      verticalHasArrows: true,
      horizontalHasArrows: true,
      vertical: "visible",
      horizontal: "visible",
      verticalScrollbarSize: 15,
      horizontalScrollbarSize: 15,
      arrowSize: 30,
    },
  });

  /* Code snippet to listen cmd/ctrl + S key event */
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
    saveToFile();
  });

  var MODES = (function () {
    var modesIds = monaco.languages.getLanguages().map(function (lang) {
      return lang.id;
    });
    modesIds.sort();
    return modesIds.map(function (modeId) {
      return {
        modeId: modeId,
        sampleURL: "../assets/lib/samples/sample." + modeId + ".txt",
      };
    });
  })();

  var startModeIndex = 0;
  for (var i = 0; i < MODES.length; i++) {
    var o = document.createElement("option");
    o.textContent = MODES[i].modeId;
    if (MODES[i].modeId === "javascript") {
      startModeIndex = i;
    }
    document.querySelector(".language-picker").append(o);
  }
  document.querySelector(".language-picker").selectedIndex = startModeIndex;
  loadSample(MODES[startModeIndex]);

  document
    .querySelector(".language-picker")
    .addEventListener("change", function (evt) {
      loadSample(MODES[this.selectedIndex]);
    });
  changeTheme(1);
  document.querySelector(".theme-picker").selectedIndex = 1;
  document
    .querySelector(".theme-picker")
    .addEventListener("change", function (evt) {
      changeTheme(this.selectedIndex);
    });
  document
    .querySelector(".download__btn")
    .addEventListener("click", saveToFile);
  document.querySelector(".reset__btn").addEventListener("click", resetCodePad);
});

window.onresize = function () {
  if (editor) {
    editor.layout();
  }
};

window.onload = function () {
  document
    .querySelector(".footer__Wrap")
    .querySelector(
      "#copyright__year"
    ).innerHTML = `© ${new Date().getFullYear()} Made With`;
  showTime(); // Function call to initialize the time on page load
};

function loadSample(mode) {
  xhr(mode.sampleURL, function (err, data) {
    document.querySelector("#editor").innerHTML = "";
    if (err) {
      if (editor) {
        if (editor.getModel()) {
          editor.getModel().dispose();
        }
        editor.dispose();
        editor = null;
      }
      document.querySelector("#editor").innerHTML =
        '<p class="alert alert-error">Failed to load ' +
        mode.modeId +
        " sample</p>";
      return;
    }
    if (!editor) {
      editor = monaco.editor.create(document.getElementById("editor"), {
        model: null,
      });
    }
    var oldModel = editor.getModel();
    var newModel = monaco.editor.createModel(data, mode.modeId);
    editor.setModel(newModel);
    if (oldModel) {
      oldModel.dispose();
    }
  });
}

/* Function to fetch the sample code from samples folder*/
function xhr(url, cb) {
  var httpClient = new XMLHttpRequest();
  httpClient.onreadystatechange = function () {
    if (httpClient.readyState == 4) {
      if (httpClient.status == 200) {
        cb(null, httpClient.responseText);
      } else {
        cb("Failed to load", null);
      }
    }
  };
  httpClient.open("GET", url, true);
  httpClient.send();
}

function changeTheme(theme) {
  var newTheme = theme === 1 ? "vs-dark" : theme === 0 ? "vs" : "hc-black";
  monaco.editor.setTheme(newTheme);
}

/* Function to get the file name from the user and download that in the system */
function saveToFile() {
  var placeHolderValue = "File Name";
  var fileName = prompt("Input suitable file name ", placeHolderValue);
  var selectedLanguage = monaco.languages
    .getLanguages()
    .filter(function (language) {
      return language.id == editor.getModel()._languageIdentifier.language;
    });
  var fileExtension = selectedLanguage[0].extensions[0];
  if (fileName != null) {
    downloadEditorCode(
      `${fileName && fileName != placeHolderValue ? fileName : "file"}${
        fileExtension ? fileExtension : ".txt"
      }`,
      editor.getValue()
    );
  }
}

/* Function to reset the editor*/
function resetCodePad() {
  editor.setValue("");
}

/* Function to download the file with user inputted file name */
function downloadEditorCode(fileName, data) {
  var anchorTag = document.createElement("a");
  var url = window.URL.createObjectURL(new Blob([data]));
  anchorTag.href = url;
  anchorTag.download = fileName;
  document.body.append(anchorTag);
  anchorTag.click();
  anchorTag.remove();
  window.URL.revokeObjectURL(url);
}

/* setInterval method to call showTime method to update the digital clock for every second */
setInterval(showTime, 1000);
/* Logic to display the current running time in the footer*/
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  let currentTime = `${hour}:${min}:${sec} ${am_pm}`;

  document.querySelector(".footer__timer #clock__timer").innerHTML =
    currentTime;
}
