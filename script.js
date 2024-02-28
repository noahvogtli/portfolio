function getFileType()
{
    var fileType = document.getElementById("filetype").value;
    var downloadLink = document.getElementById('download-button');

    downloadLink.href = "data/Noah_Vogtli_Resume." + fileType;
}

document.getElementById("filetype").addEventListener("change", getFileType);
