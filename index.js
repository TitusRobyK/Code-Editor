require.config({ paths: { vs: "node_modules/monaco-editor/min/vs" } });

require(["vs/editor/editor.main"], function () {
  var editor = monaco.editor.create(document.getElementById("editor"), {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
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
    if (MODES[i].modeId === "typescript") {
      startModeIndex = i;
    }
    document.querySelector(".language-picker").append(o);
  }
});
