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
            <div class="form">
                <form>
                    <label for="fname">First name:</label><br>
                    <input type="text" id="fname" name="fname"><br>
                    <label for="lname">Last name:</label><br>
                    <input type="text" id="lname" name="lname"><br>
                    <label for="">Password:</label><br>
                    <input type="password" id="password" name="password" required><br>
                    <input type="submit" value="Add">
                </form>
            </div>`;
    });
});
