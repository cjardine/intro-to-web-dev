function fixCodeBlocks() {
  function getCodeBlocks() {
    return [...document.querySelectorAll("pre code")];
  }

  function convertHTMLToEscapedString(element) {
    let string = element.innerHTML;
    string = string.replaceAll("<", "&lt;");
    string = string.replaceAll(">", "&gt;");
    return string;
  }

  const codeBlockArray = getCodeBlocks();
  codeBlockArray.forEach(
    (codeBlock) => (codeBlock.innerHTML = convertHTMLToEscapedString(codeBlock))
  );
}

fixCodeBlocks();
