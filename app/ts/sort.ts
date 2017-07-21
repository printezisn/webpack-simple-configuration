export abstract class SortingAlgorithm<T> {
    abstract sort(arr: T[]): T[];

    protected swap(arr: T[], i: number, j: number) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static choose<T>(name: string): SortingAlgorithm<T> {
        switch(name) {
            case 'Merge Sort':
                return new MergeSort<T>();
            case 'Bubble Sort':
                return new BubbleSort<T>();
            default:
                throw 'Invalid sorting algorithm';
        }
    }
}

class MergeSort<T> extends SortingAlgorithm<T> {  
    private split(arr: T[]): [T[], T[]] {
        let left_arr: T[] = [];
        let right_arr: T[] = [];
        const len = arr.length;
        const mid = len / 2;

        for(let i = 0; i < len; i++) {
            if(i < mid) {
                left_arr.push(arr[i]);
            }
            else {
                right_arr.push(arr[i]);
            }
        }

        return [left_arr, right_arr];
    }

    private merge(left_arr: T[], right_arr: T[]): T[] {
        let arr: T[] = [];
        let i = 0, j = 0;
        const left_len = left_arr.length, right_len = right_arr.length;

        while(i < left_len && j < right_len) {
            if(left_arr[i] <= right_arr[j]) {
                arr.push(left_arr[i]);
                i++;
            }
            else {
                arr.push(right_arr[j]);
                j++;
            }
        }
        while(i < left_len) {
            arr.push(left_arr[i]);
            i++;
        }
        while(j < right_len) {
            arr.push(right_arr[j]);
            j++;
        }

        return arr;
    }

    sort(arr: T[]): T[] {
        const len = arr.length;

        if(len <= 1) {
            return arr;
        }

        let [left_arr, right_arr] = this.split(arr);
        left_arr = this.sort(left_arr);
        right_arr = this.sort(right_arr);

        return this.merge(left_arr, right_arr);
    }
}

class BubbleSort<T> extends SortingAlgorithm<T> {
    sort(arr: T[]): T[] {
        let swapped: boolean = true;
        let i, j, len = arr.length;

        for(i = 0; i < len; i++) {
            swapped = false;
            for(j = len - 1; j > i; j--) {
                if(arr[j - 1] > arr[j]) {
                    this.swap(arr, j - 1, j);
                    swapped = true;
                }
            }

            if(!swapped) {
                break;
            }
        }

        return arr;
    }
}