/**
 * Created by Patmando73 on 7/20/15.
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

       // var deleteUser = document.getElementById('list-of-users');
        user_id = user.id;

        $("#list-of-users").append("<form method='post' id='delete-form'>delete<input type='hidden' name='_method' value='delete'><input type='submit'> </form>");

        deleteForm =  document.getElementById("delete-form");

        deleteForm.action = "/users/" + user.id;

        //var modifyUserInput1 = document.createElement("input");
        //var modifyUserInput2 = document.createElement("input");
        //modifyUserInput1.type = "radio";
        //modifyUserInput1.name = "thing";
        //modifyUserInput1.value = "modify - " + user.email;
        //modifyUserInput2.type = "hidden";
        //modifyUserInput2.name = "_method";
        //modifyUserInput2.value = "put";
        //modifyUser.input = modifyUserInput1;
        //modifyUser.input = modifyUserInput2;
        //modifyUser.innerText = "Modify " + user.email;
        //modifyUser.href = "/users/"+ user.id +"/edit";
        //var theUl = document.getElementById('list-of-users');
        //theUl.appendChild(deleteUser);
        //document.getElementById(newLiId).onclick = modifyTheUser;

        //var deleteUser = document.createElement('a');
        //deleteUser.innerText = "Delete " + user.email;
        //deleteUser.href = "/users/"+ user.id;
        //var theUl = document.getElementById('list-of-users');
        //theUl.appendChild(deleteUser);
        //document.getElementById(newLiId).onclick = deleteTheUser;

    });
    request.responseType = "json";

    request.send();
}



