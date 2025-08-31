const parent = {
  name: "Grandpa",
  children: [
    {
      name: "Dad",
      children: [
        { name: "You", children: [] },
        { name: "Brother", children: [] },
      ],
    },
    {
      name: "Uncle",
      children: [{ name: "Cousin", children: [] }],
    },
  ],
};

function exploreFamily(person) {
  console.log("Exploring:", person.name);

  if (person.children && person.children.lenght > 0) {
    for (let child of person.children) {
      exploreFamily(child);
    }
  }
}

exploreFamily(parent);
