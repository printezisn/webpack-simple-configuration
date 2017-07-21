import './sass/app.scss';

import { SortingAlgorithm } from './ts/sort';

function generateRandomArray(len: number): number[] {
    let arr: number[] = [];
    
    for(let i = 0; i < len; i++) {
        arr.push(Math.random());
    }

    return arr;
}

const runBtn = document.getElementById('run-btn');
if(runBtn) {
    runBtn.onclick = function() {
        const algorithmEl = <HTMLInputElement>document.getElementById('algorithm');
        const itemsEl = <HTMLInputElement>document.getElementById('items');
        const durationPanelEl = document.getElementById('duration-panel');
        const durationEl = document.getElementById('duration');

        if(!algorithmEl || !itemsEl || !durationPanelEl || !durationEl) {
            return;
        }
        if(isNaN(Number(itemsEl.value))) {
            alert('Items must be a number');
            return;
        }

        let algorithm = SortingAlgorithm.choose<number>(algorithmEl.value);
        const len = Math.abs(Number(itemsEl.value));
        let randomArray: number[] = generateRandomArray(len);

        let start: Date = new Date();
        durationPanelEl.style.display = 'none';

        algorithm.sort(randomArray);

        let end: Date = new Date();
        durationPanelEl.style.display = 'block';

        durationEl.innerHTML = ((end.getTime() - start.getTime()) / 1000).toFixed(3);
    }
}