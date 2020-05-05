var clearStorage = clear
var emptyStorage = empty
var storageQuotaMsg = storageQuotaMsg
var saveTextButton = save
var fileDownloadButton = download
var textarea = textField

function sessionStorageToFile("save") {
 JSON.stringify(sessionStorage['autosave']);
}

function emptyStorage() {
  const myStory = document.getElementById('textArea');
  myStory.value = '';
  sessionStorage.clear();
}

downloadLink.download = fileNameToSaveAs;

downloadLink.href = window.URL.createObjectURL(csvAsBlob);

const objectURL = URL.createObjectURL(object);

downloadLink.target = '_blank';

 downloadLink.style.display = 'none';
 document.body.appendChild(downloadLink.download);