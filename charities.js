document.addEventListener('DOMContentLoaded', function() {
    const charityList = document.getElementById("charity-list");

    // Example API call (replace with actual API data)
    const charities = [
        { name: "Charity Navigator", link: "https://www.charitynavigator.org/" },
        { name: "VolunteerMatch", link: "https://www.volunteermatch.org/" },
        { name: "GlobalGiving", link: "https://www.globalgiving.org/" }
    ];

    // Populate charity list dynamically
    charities.forEach(function(charity) {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = charity.link;
        anchor.textContent = charity.name;
        listItem.appendChild(anchor);
        charityList.appendChild(listItem);
    });
});

