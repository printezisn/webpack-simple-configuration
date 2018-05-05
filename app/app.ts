import 'bulma/bulma.sass';
import 'toastr/toastr.scss';

import './sass/app.scss';

import toastr from "toastr";

import { SortingAlgorithm } from './ts/sort';
import { initNavbar } from './ts/page';


function generateRandomArray(len: number): number[] {
    let arr: number[] = [];
    
    for(let i = 0; i < len; i++) {
        arr.push(Math.random());
    }

    return arr;
}

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
  
    const runBtn = <HTMLElement>document.getElementById('run-btn');
    runBtn.addEventListener('click', () => {
        const algorithmEl = <HTMLInputElement>document.getElementById('algorithm');
        const itemsEl = <HTMLInputElement>document.getElementById('items');
        const durationPanelEl = <HTMLElement>document.getElementById('duration-panel');
        const durationEl = <HTMLElement>document.getElementById('duration');
    
        if(isNaN(Number(itemsEl.value))) {
            toastr.error('Items must be a number');
            return;
        }
    
        let algorithm = SortingAlgorithm.choose<number>(algorithmEl.value);
        const len = Math.abs(Number(itemsEl.value));
        let randomArray: number[] = generateRandomArray(len);
    
        let start = new Date();
        durationPanelEl.style.display = 'none';
    
        algorithm.sort(randomArray);

        let end: Date = new Date();
        durationPanelEl.style.display = '';
    
        durationEl.innerHTML = ((end.getTime() - start.getTime()) / 1000).toFixed(3);
    
        toastr.success('The operation was completed successfully!');
    });
});