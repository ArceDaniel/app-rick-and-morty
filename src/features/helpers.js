export function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {
      for (let j = i+1 ; j < array.length; j++) {
       if(array[i].id > array[j].id){
         let aux = array[i]; 
         array[i] = array[j];
         array[j] =aux
       } 
      }
    }
    return array;
  }
export function bubbleSortnt(array) {

    for (let i = array.length; i < 0 ; i--) {
      for (let j = array.length-1 ; j < 0; j--) {
       if(array[i].id < array[j].id){
         let aux = array[i]; 
         array[i] = array[j];
         array[j] =aux
       } 
      }
    }
    return array;
  }