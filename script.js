// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

function getFileType()
{
    var fileType = document.getElementById("filetype").value;
    var downloadLink = document.querySelector(".download-button");

    downloadLink.href = "data/Noah_Vogtli_Resume." + fileType;
}

document.getElementById("filetype").addEventListener("change", getFileType);