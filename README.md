<b>Evolving Ships</b><br>

[Click Here For a Live Demo](https://editor.p5js.org/angelopportunity/sketches/TwyiExUv4/)

<b>About This Project</b><br>

This project is a simple simulation of natural selection in code. Each ship has genes which control its behavior, and the first generation of ships has
genes which are assigned completely at random. The first generation will usually crash into the walls and explode relatively quickly. Each ship has a lifespan
which is tracked, and after the entire generation dies, the longest-living ships will pass their genes onto the next generation. There is a small chance of mutation
to simulate real natural selection and to avoid stagnation.

Ships also inheret colors from their parents, so you can more easily tell which ships descended from which parents. Mutated ships are given random colors and are 
easy to spot.

The scope of this simulation is quite limited, and the best "solution" for a ship is to evolve toward having as few "thrust" genes as possible. If you let the
simulation run for 10+ generations, you'll see the ships evolving toward less movement.

<b>Made With</b>

Javascript<br>
P5JS

<b>Acknowledgements</b><br>
TheCodingTrain has several tutorialson P5JS and on simulated natural selection which helped me greatly during the development of this project. 
