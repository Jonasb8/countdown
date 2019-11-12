
export function color(s){

    if (s>20) {
      console.log('la', s);
      return '#2980b9'
    } else {
      if (s>12) {
        console.log('ici', s);
        return '#e67e22'
      } else {
        console.log('laaa', s);
        return '#c0392b'
      }
    }
}
