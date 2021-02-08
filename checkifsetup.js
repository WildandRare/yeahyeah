var checksetup = false;
function check() {
     checksetup = true;
}

function activatecheck() {
                var errorcheckmessage = document.getElementById("checkno");
    if (checksetup) {

    errorcheckmessage.style.display = "none";
    setTimeout(function() {    checksetup = false; }, 1000)
    } else {
    errorcheckmessage.style.display = "block";
    setTimeout(function() {    checksetup = false; }, 1000)
    }
}
