document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("Home");
    const searchFilterBtn = document.getElementById("searchFilter");
    const addRolesBtn = document.getElementById("addRoles");
    const container = document.querySelector(".container");

    homeBtn.addEventListener("click", function () {
        location.reload();
    });

    searchFilterBtn.addEventListener("click", function () {
        container.innerHTML = `
            <div class="header">
                <div class="nav">
                    <div class="search">
                        <input type="text" placeholder="Search...">
                        <button type="submit"><img style="cursor: pointer;" src="../assets/img/search.png" alt=""></button>
                    </div>
                </div>
            </div>`;
    });

    addRolesBtn.addEventListener("click", function () {
        container.innerHTML = `
        <div class="header">
            <div class="nav">
                <div class="search">
                    <h1>Add User Roles</h1>
                </div>
            </div>
        </div>
        <div style="width: 30%; margin: 120px auto; padding: 30px; background-color: lightblue; box-shadow: 10px 10px 10px rgb(82, 11, 77); border-radius: 10px; color: black; ">
            <form class="form" action="">
                <label for="role">Select Role:</label>
                <select name="roles" id="roles">
                    <option value="admin">Admin</option>
                    <option value="management">Management</option>
                    <option value="users">Users</option>
                </select> <br><br>
                <label for="fname" >First name:</label>
                <input type="text" id="fname" name="fname" required><br><br>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" required><br><br>
                <label for="">Password:</label>
                <input type="password" id="password" name="password" required><br><br>
                <input type="submit" value="Create"> <input type="button" value="Cancel">
            </form>
        </div>`;
        
    });
});
