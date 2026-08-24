// =========================================
// DATA
// =========================================

console.log("Loading index.js");


async function load() {

    try {

        const data = await fetch("/api");

        const response = await data.json();

        console.log(response);

        addCard(response);

    } catch (err) {

        console.log(err);

    }

}


load();


// =========================================
// DOM ELEMENTS
// =========================================

const experienceContainer =
    document.querySelector(".experience-grid");


const noExperiences =
    document.querySelector(".no-experiences");


// =========================================
// CREATE EXPERIENCE CARD
// =========================================

function createCard(experience) {

    const card = document.createElement("article");

    card.classList.add("experience-card");


    card.innerHTML = `

        <div class="card-meta">

            <span>
                ${experience.college}
            </span>

            <span>
                ${experience.year}
            </span>

        </div>


        <h3>
            ${experience.title}
        </h3>


        <p class="student-line">

            By ${experience.studentName}
            · ${experience.course}

        </p>


        <p class="experience-preview">

            ${experience.experience}

        </p>


        <button
            type="button"
            class="read-link"
        >
            Read full story →
        </button>

    `;


    return card;

}


// =========================================
// ADD / RENDER CARDS
// =========================================

function addCard(cardsData) {

    const container =
        document.querySelector(".experience-grid");


    // =====================================
    // NO EXPERIENCES
    // =====================================

    if (cardsData.length === 0) {

        container.innerHTML = `

            <div class="no-experiences">

                <h3>
                    No experiences shared yet.
                </h3>

                <p>
                    Be the first student to share
                    your college experience.
                </p>

            </div>

        `;

        return;

    }


    // =====================================
    // CREATE CARDS
    // =====================================

    let cardsHTML = "";


    cardsData.forEach((card, i) => {

        cardsHTML += `

            <article class="experience-card">

                <div class="card-meta">

                    <span>
                        ${card.college}
                    </span>

                    <span>
                        ${card.year}
                    </span>

                </div>


                <h3>
                    ${card.title}
                </h3>


                <p class="student-line">

                    By ${card.studentName}
                    · ${card.course}

                </p>


                <p class="experience-preview">

                    ${card.experience}

                </p>


                <button
                    type="button"
                    class="read-link"
                    data-index="${i}"
                >
                    Read full story →
                </button>

            </article>

        `;

    });


    container.innerHTML = cardsHTML;


    // =====================================
    // READ FULL STORY
    // =====================================

    const readButtons =
        container.querySelectorAll(".read-link");


    readButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".experience-card");


            card.classList.toggle("expanded");


            if (card.classList.contains("expanded")) {

                button.textContent =
                    "Show less ↑";

            } else {

                button.textContent =
                    "Read full story →";

            }

        });

    });

}


// =========================================
// FORM SUBMISSION
// =========================================

const form =
    document.querySelector("#experienceForm");


form.addEventListener("submit", async (event) => {

    // Don't let browser navigate/reload

    event.preventDefault();


    const experience = {

        studentName:
            document
                .querySelector("#studentName")
                .value
                .trim(),

        college:
            document
                .querySelector("#college")
                .value
                .trim(),

        course:
            document
                .querySelector("#course")
                .value
                .trim(),

        year:
            document
                .querySelector("#year")
                .value,

        title:
            document
                .querySelector("#title")
                .value
                .trim(),

        experience:
            document
                .querySelector("#experience")
                .value
                .trim()

    };


    try {

        const response =
            await fetch("/api", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(experience)

            });


        const data =
            await response.json();


        console.log(data);


        // =================================
        // SUCCESS
        // =================================

        if (response.ok) {

            form.reset();


            await load();


            // Scroll to Read section

            document
                .querySelector("#read")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    } catch (error) {

        console.error(
            "Error:",
            error
        );

    }

});