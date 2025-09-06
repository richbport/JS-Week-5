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
      children: [
        { name: "Cousin", children: [] }
      ],
    },
  ],
};

function exploreFamily(person) {
  console.log("Exploring:", person.name);

  // If this person has children, exlore them
  if (person.children && person.children.lenght > 0) {
    for (let child of person.children) {
      exploreFamily(child); // Recursive call to explore children
    }
  }
}

exploreFamily(parent);

/*

1. Start at Grandpa's house:
We begin at Grandpa's house.
There are two children: Dad and Uncle.
We will explore Dad first.

2. Go down the Dad's path:
Now we are at Dad.
Inside of Dad's family, there are two children; You and Brother.

*/