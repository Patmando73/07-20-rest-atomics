/**
 * Created by Patmando73 and Samuel Stephen on 7/20/15.
 */



function goHome() {
    window.location.replace("/home");
}

var logo = document.getElementById('logo');
logo.addEventListener('click', goHome);

function showModal(event) {
    event.preventDefault();
    document.getElementById('new-user-form').style.display = 'block';
}

var link = document.getElementById('new-user-form-link');
link.addEventListener('click', showModal);

function hideModal() {
    document.getElementById('new-user-form').style.display = 'none';
    $("#confirm")[0].style.display = 'none';
}

var close = document.getElementById('close');
close.addEventListener('click', hideModal);



function showUsers(event) {
    event.preventDefault();
    var request = new XMLHttpRequest();
    var route = '/users';
    request.open('get', route);

    request.addEventListener('load', function() {
        document.getElementById('list-of-users').innerText = '';
        for (var i = 0; i < this.response.length; i++) {
            var user = this.response[i];
            var newLiId = user.id;
            var newLi = document.createElement('li');
            newLi.id = newLiId;
            newLi.dataId = user.id;
            newLi.innerText = user.email;
            var Li = document.getElementById('list-of-users');
            Li.appendChild(newLi);
            document.getElementById(newLiId).style.cursor = 'pointer';
            document.getElementById(newLiId).onclick = showThisUser;
        }
    });
    request.responseType = "json";
    request.send();
}

document.getElementById('list-users-link').onclick = showUsers;

function showThisUser() {
    var request = new XMLHttpRequest();
    var route = '/users/' + this.id;
    request.open('get', route);
    request.addEventListener('load', function(){
        var user = this.response;
        document.getElementById('list-of-users').innerText = '';
        user_id = user.id;
        $("#list-of-users").append("<form method='post' id='delete-form'>delete<input type='hidden' name='_method' value='delete'><input type='submit'> </form>");
        deleteForm =  document.getElementById("delete-form");
        deleteForm.action = "/users/" + user.id;

        $("#list-of-users").append("<form method='get' id='modify-form'>modify<input type='submit'> </form>");
        modifyForm =  document.getElementById("modify-form");
        modifyForm.action = "/users/" + user.id + "/edit";
    });

    request.responseType = "json";

    request.send();

}



