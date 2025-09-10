function setUpTabs() {


    document.querySelectorAll(".tab_button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActive = tabsContainer.querySelector(`.tab_content[data-tab="${tabNumber}"]`);


            sideBar.querySelectorAll(".tab_button").forEach(button => {
                button.classList.remove("tab_button--active");
            });

            tabsContainer.querySelectorAll('.tab_content').forEach(tab => {
                tab.classList.remove("tab_content--active");
            });

            button.classList.add("tab_button--active");
            tabToActive.classList.add("tab_content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setUpTabs();
});