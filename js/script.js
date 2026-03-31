
// document.addEventListener('DOMContentLoaded', () => {

//     const gameLabels = [
//         "Bagachi Classico",
//         "Ma Chu: The A.C. Warrior",
//         "Pepe of Dapitan",
//         "K.night",
//         "Riri",
//         "Bagachi",
//         "Pepe's Shack",
//         "Labyrinth of Self",
//         "Kudlit"
//     ];

//     const artLabels = [
//         "Aemilia",
//         "Steak",
//         "K.night",
//         "Cthulhu",
//         "Burger",
//         "House",
//         "Animate",
//         "Java",
//         "Python",
//         "HTML5",
//         "Poster Making",
//         "Quiz Bee",
//         "Metaverse Participant",
//         "Lhie"
//     ];
//     const pubLabels = [
//         "Teacher's Day Picture Strip",
//         "Dos Onse Logo",
//         ".JPEG Magazine Cover",
//         "Ang Dakong Ibayo Loading Screen",
//         "rITmo Live Posting Border",
//         "rITmo Live Posting Border",
//         "Chip, Sip, Hooray Poster",
//         "Dos Onse T-shirt Design (Front)",
//         "QR-ious Event poster",
//         "Qr-ious Profile Picture Frame",
//         "Qr-ious Event Banner",
//         "Initialize() Picture Frame",
//         "BSIT 1-6 ITlympics 2025 Logo",
//         "Photo Manipulation 1",
//         "Participant Event Tag",
//         "BSIT 1-6 ITlympics 2025 asset",
//         "BSIT 1-6 ITlympics 2025 Avatar Design",
//         "Participant Event Tag",
//         "Photo Manipulation 2",
//         "Photo Manipulation 3",
//         "Wear Mask Publication Material",
//         "Wear Mask Publication Material",
//         "Dos Onse Flag Design",
//         "D'Axis Product Design",
//         "Go, Grow, Glow Pathfit Design",
//         "Logo Design"
//     ];
//     const digitalLabels = [
//         "Rimuru Tempest",
//         "Pink Cat",
//         "Mystery Character",
//         "Mystery Character",
//         "Mah Love",
//         "Sandugo",
//         "Lust",
//         "Impluho",
//         "Scratch Work",
//         "Realism Study",
//         "Imp",
//         "Rawr",
//         "Aemicat",
//         "Bored",
//         "Sun Wukong",
//         "Gandalf and Kid",
//         "Gandalf and Kid",
//         "Sublimate",
//         "Pochi Aemi",
//         "Clay World",
//         "Mystery Character",
//         "ME",
//         "Bratshin shann"
//     ];


//     const createGridCards = (selector, folder, prefix, labelArray) => {
//         const grid = document.querySelector(selector);
        
//         if (grid) {
//             labelArray.forEach((text, index) => {
//                 const i = index + 1;
//                 const card = document.createElement('div');
//                 card.className = `work-cards ${prefix}card`;

//                 card.innerHTML = `
//                     <img src="../images/${folder}/${prefix}${i}.webp" alt="${text}" class="work-img">
//                     <div class="work-label">
//                         <p>${text}</p>
//                     </div>
//                 `;
//                 grid.appendChild(card);
//             });
//         }
//     };

//     createGridCards('.gamegrid', 'game', 'game', gameLabels);
//     createGridCards('.artgrid', 'art', 'art', artLabels); 
//     createGridCards('.pubgrid', 'pub', 'pub', pubLabels);
//     createGridCards('.digitalgrid', 'digi', 'digi', digitalLabels); 

// });

document.addEventListener('DOMContentLoaded', () => {
    const skillShowcase = [
        {
            group: "Programming Languages",
            proficiency: [95, 90, 25, 70, 85, 75, 75, 30, 55, 25]
        },
        {
            group: "Creativity Tools",
            proficiency: [80, 75, 98, 98, 100, 90, 96, 80, 60, 80, 85]
        },
        {
            group: "IDE and Other Tools",
            proficiency: [98, 90, 85, 95, 90, 80, 95, 70, 80, 85]
        }
    ];

    const columns = document.querySelectorAll('.tool-box');

    columns.forEach((targetColumn, colIndex) => {
        const data = skillShowcase[colIndex];
        
        if (data) {
            const bars = targetColumn.querySelectorAll('.proficiency');

            data.proficiency.forEach((value, barIndex) => {
                bars[barIndex].style.setProperty('--xp', value + '%');
            });
        }
    });









    const modal = document.querySelector('.modal'); // Assuming you have a .modal container
    const mTitle = document.querySelector('.modal-title');
    const mDesc = document.querySelector('.modal-description');
    const mImg = document.querySelector('.modal-image');
    const mLink = document.querySelector('.modal-link');
    const mBtn = document.querySelector('.modal-btn');
    const closeBtn = document.querySelector('.close');

    // const r = document.documentElement; 
    // r.style.setProperty('--label', '#eee');
    // r.style.setProperty('--highlight', '#444');
    // r.style.setProperty('--default', '#111');




    const createGridCards = (selector, folder, prefix, dataArray) => {
        const grid = document.querySelector(selector);
        if (!grid) {
            console.warn(`Grid not found for selector: ${selector}`);
            return;
        }

        dataArray.forEach((item, index) => {
            const i = index + 1;
            const card = document.createElement('div');
            card.className = `work-cards ${prefix}card`;

            // 1. Build the card HTML
            card.innerHTML = `
                <img src="../images/${folder}/${prefix}${i}.webp" alt="${item.title}" class="work-img">
                <div class="work-label">
                    <p>${item.title}</p>
                </div>
            `;

            // 2. Add Click Event for Modal
            card.addEventListener('click', () => {
                mTitle.textContent = item.title;
                mDesc.textContent = item.desc || "No description provided.";
                mImg.src = `../images/${folder}/${prefix}${i}.webp`;

                if (item.link) {
                    mLink.href = item.link;
                    mLink.target = "_blank";
                    mBtn.style.background = "var(--base) !important";
                    mLink.textContent = "View Project";
                } else {
                    mLink.target = "_self";
                    mBtn.style.background = "var(--unavailable) !important";
                    mLink.textContent = "Unavailable";
                }

                modal.classList.add('active');
            });

            grid.appendChild(card);
        });
    };

    const gameData = [
        { 
            title: "Bagachi Classico", 
            desc: "The original Bagachi experience. v1.0 of the game.", 
            link: "https://github.com/lhiexhian/Bagachi_Classico" 
        },
        { 
            title: "Ma Chu: The A.C. Warrior", 
            desc: "Modern style timerush game. (In development)", 
            link: "https://github.com/lhiexhian/MatChew" 
        },
        { 
            title: "Pepe of Dapitan", 
            desc: "Stardew Valley-inspired farming game. (In development)", 
            link: "https://drive.google.com/file/d/1BncTmtQKwScoYyVFY2Um_eFUxIq6zN2Q/view" 
        },
        { 
            title: "K.night", 
            desc: "A mysterious game. (In development)", 
            link: "https://github.com/lhiexhian/K.night" 
        },
        { 
            title: "Riri", 
            desc: "A delightful puzzle game. (In development)", 
            link: "https://drive.google.com/file/d/1P-sO_AHkkd6zcrg_BALMBl19fJ3Ab5N9/view?usp=drivesdk" 
        },
        { 
            title: "Bagachi", 
            desc: "An Pet Simulator game. (In development)", 
            link: "https://github.com/lhiexhian/Bagachi" 
        },
        { 
            title: "Pepe's Shack", 
            desc: "DLC of Pepe of Dapitan. (In development)", 
            link: "" 
        },
        { 
            title: "Labyrinth of Self", 
            desc: "A Maze through my mind.", 
            link: "https://drive.google.com/file/d/1evvGjgasuLUFs8yu6K7pQdDzYozz0uku/view" 
        },
        { 
            title: "Kudlit", 
            desc: "A Timerush game inspired by the Philippine culture.", 
            link: "https://drive.google.com/file/d/1puqwkcteJy8yGwX-i4Hl4Q4tdXCqUhR5/view" 
        }
    ];
    const artData = [
        { 
            title: "Aemilia",
            desc: "",
            link: ""
        },
        { 
            title: "Steak",
            desc: "",
            link: ""
        },
        { 
            title: "K.night",
            desc: "",
            link: ""
        },
        { 
            title: "Cthulhu",
            desc: "",
            link: ""
        },
        { 
            title: "Burger",
            desc: "",
            link: ""
        },
        { 
            title: "House",
            desc: "",
            link: ""
        },
        { 
            title: "Animate",
            desc: "",
            link: ""
        },
        { 
            title: "Java",
            desc: "",
            link: ""
        },
        { 
            title: "Python",
            desc: "",
            link: ""
        },
        { 
            title: "HTML5",
            desc: "",
            link: ""
        },
        { 
            title: "Poster Making",
            desc: "",
            link: ""
        },
        { 
            title: "Quiz Bee",
            desc: "",
            link: ""
        },
        { 
            title: "Metaverse Participant",
            desc: "",
            link: ""
        },
        { 
            title: "Lhie",
            desc: "",
            link: ""
        }
    ];
    const pubData = [
        { 
            title: "Teacher's Day Picture Strip",
            desc: "",
            link: ""
        },
        { 
            title: "Dos Onse Logo",
            desc: "",
            link: ""
        },
        { 
            title: ".JPEG Magazine Cover",
            desc: "",
            link: ""
        },
        { 
            title: "Ang Dakong Ibayo Loading Screen",
            desc: "",
            link: ""
        },
        { 
            title: "rITmo Live Posting Border",
            desc: "",
            link: ""
        },
        { 
            title: "rITmo Live Posting Border",
            desc: "",
            link: ""
        },
        { 
            title: "Chip, Sip, Hooray Poster",
            desc: "",
            link: ""
        },
        { 
            title: "Dos Onse T-shirt Design (Front)",
            desc: "",
            link: ""
        },
        { 
            title: "QR-ious Event poster",
            desc: "",
            link: ""
        },
        { 
            title: "Qr-ious Profile Picture Frame",
            desc: "",
            link: ""
        },
        { 
            title: "Qr-ious Event Banner",
            desc: "",
            link: ""
        },
        { 
            title: "Initialize() Picture Frame",
            desc: "",
            link: ""
        },
        { 
            title: "BSIT 1-6 ITlympics 2025 Logo",
            desc: "",
            link: ""
        },
        { 
            title: "Photo Manipulation 1",
            desc: "",
            link: ""
        },
        { 
            title: "Participant Event Tag",
            desc: "",
            link: ""
        },
        { 
            title: "BSIT 1-6 ITlympics 2025 asset",
            desc: "",
            link: ""
        },
        { 
            title: "BSIT 1-6 ITlympics 2025 Avatar Design",
            desc: "",
            link: ""
        },
        { 
            title: "Participant Event Tag",
            desc: "",
            link: ""
        },
        { 
            title: "Photo Manipulation 2",
            desc: "",
            link: ""
        },
        { 
            title: "Photo Manipulation 3",
            desc: "",
            link: ""
        },
        { 
            title: "Wear Mask Publication Material",
            desc: "",
            link: ""
        },
        { 
            title: "Wear Mask Publication Material",
            desc: "",
            link: ""
        },
        { 
            title: "Dos Onse Flag Design",
            desc: "",
            link: ""
        },
        { 
            title: "D'Axis Product Design",
            desc: "",
            link: ""
        },
        { 
            title: "Go, Grow, Glow Pathfit Design",
            desc: "",
            link: ""
        },
        { 
            title: "Logo Design",
            desc: "",
            link: ""
        }
    ];
    const digitalData = [
        { 
            title: "Rimuru Tempest",
            desc: "",
            link: ""
        },
        { 
            title: "Pink Cat",
            desc: "",
            link: ""
        },
        { 
            title: "Mystery Character",
            desc: "",
            link: ""
        },
        { 
            title: "Mystery Character",
            desc: "",
            link: ""
        },
        { 
            title: "Mah Love",
            desc: "",
            link: ""
        },
        { 
            title: "Sandugo",
            desc: "",
            link: ""
        },
        { 
            title: "Lust",
            desc: "",
            link: ""
        },
        { 
            title: "Impluho",
            desc: "",
            link: ""
        },
        { 
            title: "Scratch Work",
            desc: "",
            link: ""
        },
        { 
            title: "Realism Study",
            desc: "",
            link: ""
        },
        { 
            title: "Imp",
            desc: "",
            link: ""
        },
        { 
            title: "Rawr",
            desc: "",
            link: ""
        },
        { 
            title: "Aemicat",
            desc: "",
            link: ""
        },
        { 
            title: "Bored",
            desc: "",
            link: ""
        },
        { 
            title: "Sun Wukong",
            desc: "",
            link: ""
        },
        { 
            title: "Gandalf and Kid",
            desc: "",
            link: ""
        },
        { 
            title: "Gandalf and Kid",
            desc: "",
            link: ""
        },
        { 
            title: "Sublimate",
            desc: "",
            link: ""
        },
        { 
            title: "Pochi Aemi",
            desc: "",
            link: ""
        },
        { 
            title: "Clay World",
            desc: "",
            link: ""
        },
        { 
            title: "Mystery Character",
            desc: "",
            link: ""
        },
        { 
            title: "ME",
            desc: "",
            link: ""
        }
    ];

        // Close modal when clicking outside the content or on a close button
    closeBtn.onclick = () => modal.classList.remove('active');
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    };


    // Initialize
    createGridCards('.gamegrid', 'game', 'game', gameData);
    createGridCards('.artgrid', 'art', 'art', artData);
    createGridCards('.pubgrid', 'pub', 'pub', pubData);
    createGridCards('.digitalgrid', 'digi', 'digi', digitalData);
});
