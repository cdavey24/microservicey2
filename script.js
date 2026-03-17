async function uploadFile() {

    const file = document.getElementById("fileInput").files[0];

    const response = await fetch("YOUR_API_ENDPOINT");

    const data = await response.json();

    const uploadURL = data.uploadURL;

    await fetch(uploadURL, {
        method: "PUT",
        body: file
    });

    document.getElementById("status").innerText = "Upload complete!";
}