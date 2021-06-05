"use strict";
var editor = null;

require.config({ paths: { vs: "node_modules/monaco-editor/min/vs" } });
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
    /* Variable to store the input box placeholder value */
    var placeHolderValue = "File name here";
    /* Code snippet to display the prompt for getting the file name with extension */
    var fileName = prompt("Enter the file name: ", placeHolderValue);
    /* Fetching the selected language info from Monacco language list*/
    var selectedLanguage = monaco.languages
      .getLanguages()
      .filter(function (language) {
        return language.id == editor.getModel()._languageIdentifier.language;
      });
    /* Variable to store the extension of the selected language */
    var fileExtension = selectedLanguage[0].extensions[0];
    /* Assigning file name if user input some value, else assigning default value for the file */
    downloadEditorCode(
      `${fileName && fileName != placeHolderValue ? fileName : "file"}${
        fileExtension ? fileExtension : ".txt"
      }`,
      editor.getValue()
    );
  });

  var MODES = (function () {
    var modesIds = monaco.languages.getLanguages().map(function (lang) {
      return lang.id;
    });
    modesIds.sort();
    return modesIds.map(function (modeId) {
      return {
        modeId: modeId,
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
});

window.onresize = function () {
  if (editor) {
    editor.layout();
  }
};

function loadSample(mode) {
  if (!editor) {
    editor = monaco.editor.create(document.getElementById("editor"), {
      model: null,
    });
  }
  var oldModel = editor.getModel();
  var newModel = monaco.editor.createModel("", mode.modeId);
  editor.setModel(newModel);
  if (oldModel) {
    oldModel.dispose();
  }
}

function changeTheme(theme) {
  var newTheme = theme === 1 ? "vs-dark" : theme === 0 ? "vs" : "hc-black";
  monaco.editor.setTheme(newTheme);
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
