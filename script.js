// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


function getFileType()
{
    var fileType = document.getElementById("filetype").value;
    var downloadLink = document.querySelector(".download-button");

    downloadLink.href = "data/Noah_Vogtli_Resume." + fileType;
}

document.getElementById("filetype").addEventListener("change", getFileType);