export function motionAnim(segs){
    return {
        initial: { opacity: 0, scale: 0.75, translateY: -50 },
        animate: { opacity: 1, scale: 1, translateY: 0 },
        transition: { duration: 0.5, delay: segs}
    }
}

export function sortNombres(a, b){
    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
    return 0;
}
