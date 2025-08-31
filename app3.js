const cave = {
  name: "Entrance",
  paths: [
    {
      name: "Left Tunnel",
      paths: [
        { name: "Small Chamber", paths: [] },
        { name: "Deep Cave", paths: [{ name: "Hidden Room", paths: [] }] },
      ],
    },
    {
      name: "Right Tunnel",
      paths: [{ name: "Crystal Cavern", paths: [] }],
    },
  ],
};

function exploreCave(cave) {
  console.log("Exploring:", cave.name)

  for (let path of cave.paths) {
    exploreCave(path)
  }
}

exploreCave(cave)
