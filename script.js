async function uploadFile() {

    const file = document.getElementById("fileInput").files[0];

    const response = await fetch("https://cg7fr2nkgl.execute-api.eu-west-1.amazonaws.com/dev/upload-url");

    const data = await response.json();

    const uploadURL = data.uploadURL;

    await fetch(uploadURL, {
        method: "PUT",
        body: file
    });

    document.getElementById("status").innerText = "Upload complete!";
}
