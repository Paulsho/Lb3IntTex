window.onload = () => {
    const processorForm = document.getElementById("processor");

    processorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formDataProcessor = new FormData(this);

        fetch("BaseDb.php", {
            method: "post",
            body: formDataProcessor
        }).then(function (response){
            return response.text();
        }).then(function (text) {
            document.getElementById("content").innerHTML += text;
        }).catch(function (error) {
            console.error(error);
        });
    })

    const guaranteeForm = document.getElementById("guarantee");

    guaranteeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formDataGuarantee = new FormData(this);
        fetch("BaseDb.php", {
            method: "post",
            body: formDataGuarantee
        }).then(function (response){
            return response.json();
        }).then(function (json) {
            document.getElementById("content").innerHTML += json;
        }).catch(function (error) {
            console.error(error);
        });
    })

    const softwareForm = document.getElementById("software");

    softwareForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formDataSoftware = new FormData(this);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "BaseDb.php");
        xhr.responseType = 'document';
        xhr.send(formDataSoftware);

        xhr.onload = () => {
            document.getElementById("content").innerHTML += xhr.responseXML.body.innerHTML;
        }
    })
}


