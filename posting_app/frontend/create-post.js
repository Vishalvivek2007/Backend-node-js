const form = document.getElementById("postForm");

const message = document.getElementById("message");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const image = document.getElementById("image").files[0];
    const caption = document.getElementById("caption").value;

    const formData = new FormData();

    formData.append("image", image);
    formData.append("caption", caption);

    try{

        const response = await fetch("http://localhost:3003/create-post",{

            method:"POST",
            body:formData

        });

        const data = await response.json();

        message.innerText = data.message;

        form.reset();

    }

    catch(err){

        console.log(err);

        message.innerText="Upload Failed";

    }

});