document.addEventListener("DOMContentLoaded", function () {
  const data = [
    // Use the JSON data provided earlier
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
    { id: 4, name: "Daisy Miller", email: "daisy.miller@example.com" },
    { id: 5, name: "Ethan Davis", email: "ethan.davis@example.com" },
    { id: 6, name: "Fiona Wilson", email: "fiona.wilson@example.com" },
    { id: 7, name: "George Martinez", email: "george.martinez@example.com" },
    { id: 8, name: "Hannah Taylor", email: "hannah.taylor@example.com" },
    { id: 9, name: "Ian Anderson", email: "ian.anderson@example.com" },
    { id: 10, name: "Jessica Thomas", email: "jessica.thomas@example.com" },
    { id: 11, name: "Kevin Brown", email: "kevin.brown@example.com" },
    { id: 12, name: "Laura White", email: "laura.white@example.com" },
    { id: 13, name: "Mike Clark", email: "mike.clark@example.com" },
    { id: 14, name: "Nina Lewis", email: "nina.lewis@example.com" },
    { id: 15, name: "Oscar Walker", email: "oscar.walker@example.com" },
    { id: 16, name: "Paula Scott", email: "paula.scott@example.com" },
    { id: 17, name: "Quinn Hill", email: "quinn.hill@example.com" },
    { id: 18, name: "Rachel Young", email: "rachel.young@example.com" },
    { id: 19, name: "Sam Allen", email: "sam.allen@example.com" },
    { id: 20, name: "Tina King", email: "tina.king@example.com" },
    { id: 21, name: "Ulysses Harris", email: "ulysses.harris@example.com" },
    { id: 22, name: "Vera Adams", email: "vera.adams@example.com" },
    { id: 23, name: "Will Carter", email: "will.carter@example.com" },
    { id: 24, name: "Xena Roberts", email: "xena.roberts@example.com" },
    { id: 25, name: "Yvonne Baker", email: "yvonne.baker@example.com" },
    { id: 26, name: "Zachary Gonzalez", email: "zachary.gonzalez@example.com" },
    { id: 27, name: "Ava Martinez", email: "ava.martinez@example.com" },
    { id: 28, name: "Ben Lewis", email: "ben.lewis@example.com" },
    { id: 29, name: "Catherine Murphy", email: "catherine.murphy@example.com" },
    { id: 30, name: "Daniel Young", email: "daniel.young@example.com" },
    { id: 31, name: "Ella Collins", email: "ella.collins@example.com" },
    { id: 32, name: "Frank Wright", email: "frank.wright@example.com" },
    { id: 33, name: "Grace Mitchell", email: "grace.mitchell@example.com" },
    { id: 34, name: "Henry Green", email: "henry.green@example.com" },
    { id: 35, name: "Ivy Adams", email: "ivy.adams@example.com" },
    { id: 36, name: "Jack Baker", email: "jack.baker@example.com" },
    { id: 37, name: "Kara Phillips", email: "kara.phillips@example.com" },
    { id: 38, name: "Liam Evans", email: "liam.evans@example.com" },
    { id: 39, name: "Megan Murphy", email: "megan.murphy@example.com" },
    { id: 40, name: "Nathan Carter", email: "nathan.carter@example.com" },
    { id: 41, name: "Olivia Roberts", email: "olivia.roberts@example.com" },
    { id: 42, name: "Paul Campbell", email: "paul.campbell@example.com" },
    { id: 43, name: "Quincy Rogers", email: "quincy.rogers@example.com" },
    { id: 44, name: "Rita Cooper", email: "rita.cooper@example.com" },
    { id: 45, name: "Steve Sanders", email: "steve.sanders@example.com" },
    { id: 46, name: "Tara Bailey", email: "tara.bailey@example.com" },
    { id: 47, name: "Ursula Peterson", email: "ursula.peterson@example.com" },
    { id: 48, name: "Victor Hayes", email: "victor.hayes@example.com" },
    { id: 49, name: "Wendy Miller", email: "wendy.miller@example.com" },
    { id: 50, name: "Xander Lee", email: "xander.lee@example.com" },
    { id: 51, name: "Yasmine Watson", email: "yasmine.watson@example.com" },
    { id: 52, name: "Zane Scott", email: "zane.scott@example.com" },
    { id: 53, name: "Alice Bell", email: "alice.bell@example.com" },
    { id: 54, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 55, name: "Charlie Lee", email: "charlie.lee@example.com" },
    { id: 56, name: "Diana Wilson", email: "diana.wilson@example.com" },
    { id: 57, name: "Ethan Clark", email: "ethan.clark@example.com" },
    { id: 58, name: "Fiona Adams", email: "fiona.adams@example.com" },
    { id: 59, name: "George Martin", email: "george.martin@example.com" },
    { id: 60, name: "Hannah Carter", email: "hannah.carter@example.com" },
    { id: 61, name: "Ian Harris", email: "ian.harris@example.com" },
    { id: 62, name: "Jessica Wright", email: "jessica.wright@example.com" },
    { id: 63, name: "Kevin Mitchell", email: "kevin.mitchell@example.com" },
    { id: 64, name: "Laura Lewis", email: "laura.lewis@example.com" },
    { id: 65, name: "Mike Walker", email: "mike.walker@example.com" },
    { id: 66, name: "Nina Adams", email: "nina.adams@example.com" },
    { id: 67, name: "Oscar Green", email: "oscar.green@example.com" },
    { id: 68, name: "Paula Brown", email: "paula.brown@example.com" },
    { id: 69, name: "Quinn Johnson", email: "quinn.johnson@example.com" },
    { id: 70, name: "Rachel Davis", email: "rachel.davis@example.com" },
    { id: 71, name: "Steve Miller", email: "steve.miller@example.com" },
    { id: 72, name: "Tina Wilson", email: "tina.wilson@example.com" },
    { id: 73, name: "Ulysses Scott", email: "ulysses.scott@example.com" },
    { id: 74, name: "Vera Harris", email: "vera.harris@example.com" },
    { id: 75, name: "Will Robinson", email: "will.robinson@example.com" },
    { id: 76, name: "Xena Taylor", email: "xena.taylor@example.com" },
    { id: 77, name: "Yvonne Martin", email: "yvonne.martin@example.com" },
    { id: 78, name: "Zachary Johnson", email: "zachary.johnson@example.com" },
    { id: 79, name: "Alyssa Bell", email: "alyssa.bell@example.com" },
    { id: 80, name: "Bradley Garcia", email: "bradley.garcia@example.com" },
    { id: 81, name: "Chloe Johnson", email: "chloe.johnson@example.com" },
    { id: 82, name: "Derek Adams", email: "derek.adams@example.com" },
    { id: 83, name: "Ella Williams", email: "ella.williams@example.com" },
    { id: 84, name: "Felix Davis", email: "felix.davis@example.com" },
    { id: 85, name: "Georgia Martinez", email: "georgia.martinez@example.com" },
    { id: 86, name: "Henry Brown", email: "henry.brown@example.com" },
    { id: 87, name: "Isabella Johnson", email: "isabella.johnson@example.com" },
    { id: 88, name: "Jacob Smith", email: "jacob.smith@example.com" },
    {
      id: 89,
      name: "Katherine Williams",
      email: "katherine.williams@example.com",
    },
    { id: 90, name: "Liam Roberts", email: "liam.roberts@example.com" },
    { id: 91, name: "Mia Thompson", email: "mia.thompson@example.com" },
    { id: 92, name: "Noah Lewis", email: "noah.lewis@example.com" },
    { id: 93, name: "Olivia Lee", email: "olivia.lee@example.com" },
    { id: 94, name: "Paul Walker", email: "paul.walker@example.com" },
    { id: 95, name: "Quinn Adams", email: "quinn.adams@example.com" },
    { id: 96, name: "Riley Green", email: "riley.green@example.com" },
    { id: 97, name: "Sophie Nelson", email: "sophie.nelson@example.com" },
    { id: 98, name: "Thomas Martinez", email: "thomas.martinez@example.com" },
    { id: 99, name: "Uma Phillips", email: "uma.phillips@example.com" },
    { id: 100, name: "Victor Lewis", email: "victor.lewis@example.com" },
  ];

  const rows = 10;
  let currentPage = 1;

  function displayList(data, list, rows, currentPage) {
    list.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>`;
    const start = (currentPage - 1) * rows;
    const end = start + rows;
    const paginatedItems = data.slice(start, end);

    paginatedItems.forEach((item) => {
      const tr = document.createElement("tr");
      tr.classList.add("item");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      td1.textContent = item.id;
      td2.textContent = item.name;
      td3.textContent = item.email;
      tr.append(td1, td2, td3);
      list.appendChild(tr);
    });
  }

  function setupPagination(data, paginationNumbers, rows) {
    paginationNumbers.innerHTML = "";
    const pageCount = Math.ceil(data.length / rows);

    for (let i = 1; i <= pageCount; i++) {
      const btn = paginationButton(i, data);
      paginationNumbers.appendChild(btn);
    }
  }

  function paginationButton(page, data) {
    const button = document.createElement("a");
    button.classList.add("page");
    button.innerText = page;
    if (currentPage === page) button.classList.add("active");
    button.addEventListener("click", function () {
      currentPage = page;
      displayList(data, list, rows, currentPage);
      const allBtn = document.querySelectorAll(".page");
      allBtn.forEach((e) => e.classList.remove("active"));
      button.classList.add("active");
    });
    return button;
  }

  function updateBtn(currentPage) {
    const allBtn = document.querySelectorAll(".page");
    allBtn.forEach((e) => e.classList.remove("active"));
    allBtn[currentPage - 1].classList.add("active");
    displayList(data, list, rows, currentPage);
  }

  const wrapper = document.querySelector(".wrapper");
  const paginationNumbers = document.getElementById("paginationNumber");
  const list = document.getElementById("list");

  wrapper.addEventListener("click", (e) => {
    if (e.target.dataset.set === "fir") {
      if (currentPage !== 1) {
        currentPage = 1;
        updateBtn(currentPage);
      }
    } else if (e.target.dataset.set === "lst") {
      if (currentPage !== Math.ceil(data.length / rows)) {
        currentPage = Math.ceil(data.length / rows);
        updateBtn(currentPage);
      }
    } else if (e.target.dataset.set === "pre") {
      if (currentPage > 1) {
        currentPage--;
        updateBtn(currentPage);
      }
    } else if (e.target.dataset.set === "nxt") {
      if (currentPage < Math.ceil(data.length / rows)) {
        currentPage++;
        updateBtn(currentPage);
      }
    }
  });

  displayList(data, list, rows, currentPage);
  setupPagination(data, paginationNumbers, rows);
});
