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

3. Explore You:
We visit You.
There are no more children here, so we have finished exploring this part of the family tree.
Now, we go back to Dad to explore the next path: Brother.

4. Go down Brother's path:
Now we walk to Brother.
There are no children here, so we have finished exploring this part of the family tree.
Now, we return to Dad.

5. Finish exploring Dad's path:
We have explored Dad's family fully (both You and Brother).
Now, we go back to Grandpa's house to explore Uncle.

6. Go down the Uncle's Path:
Now we are at Uncle.
Uncle has one child: Cousin.
We will explore Cousin.

*/