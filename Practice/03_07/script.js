/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const house = {
    numberOfRooms: 3,
    Roofless: false,
    Room: {
        numberOfWindows:2,
        bedroom: false,
    },
    blowOfRoof: function () {
        this.Roofless = true;
        console.log("The roof goes booom!")
    }
}

const markup = (backpack) => {
    return `
    <div>
      Roof blown of: ${house.Roofless}

    </div>
  `;
  };

const main = document.createElement("main");
main.innerHTML = markup(house);
document.body.appendChild(main);
