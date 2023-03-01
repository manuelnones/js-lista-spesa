/*
    - memorizzare in un array una lista della spesa
    - creazione indice
    - creazione del ciclo while
    - stampare singolarmente ogni elemento di lista spesa
*/

let lists = [`patate`, `carote`, `burro`, `insalata`, `pane`, `farina`, `uova`, `pollo`];
let index = 0;

while (index < lists.length) {
    document.writeln(lists[index]);
    index++;
};