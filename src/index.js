var Graph = require('./Graph');

(function () {

    let csvData = ['A,B,5',
        'B,C,5',
        'C,D,7',
        'A,D,15',
        'E,F,5',
        'F,G,5',
        'G,H,10',
        'H,I,10',
        'I,J,5',
        'G,J,20']
    // The input.csv is simple: Each li
    let data = CSVParser();
    let csvData2 = data.getData();

    let map = new Graph(csvData2);

    // console.log(JSON.stringify(map));

    console.log(map.findPathWithDijkstra('E', 'J'));

    console.log(map.findPathWithDijkstra('A', 'B'));

    console.log(map.findPathWithDijkstra('A', 'J'));

    console.log(map.findPathWithDijkstra('D', 'J'));

    console.log(map.findPathWithDijkstra('F', 'J'));
})()