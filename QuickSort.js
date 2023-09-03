function QuickSort(array, li, ri) {
    if (li >= ri || li < 0) return
    const pivotIndex = partion(array, li, ri)
    QuickSort(array, li, pivotIndex - 1)
    QuickSort(array, pivotIndex + 1, ri)
}

function partion(array, li, ri) {
    const pivot = array[ri];
    // temppivot index
    let i = li - 1;

    for (let j = li; j < ri; j++) {
        if (array[j] <= pivot) {
            swap(array, i += 1, j)
        }
    }
    // incrememnt the tempPivot index
    i += 1
    // bring the pivot value to the tempPivot index
    swap(array, i, ri)
    // return the pivot index
    return i;
}

function swap(array, swapIndexi, swapIndexj) {
    if (swapIndexi == swapIndexj) return
    [array[swapIndexi], array[swapIndexj]] = [array[swapIndexj], array[swapIndexi]]
}

const array = [1, 8, 9, 56, 4, 8, 7, 5, 5]
console.log(array, "Unsorted")
QuickSort(array, 0, array.length - 1)
console.log(array, "Sorted")
