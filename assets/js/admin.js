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
                        <button type="submit"><img src="assets/images/search.png" alt=""></button>
                    </div>
                </div>
            </div>`;
    });

    addRolesBtn.addEventListener("click", function () {
        container.innerHTML = `
            <div class="form">
                <form>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required><br><br>
                    <input type="submit" value="Submit">
                </form>
            </div>`;
    });
});
