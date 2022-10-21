export default function fibsRec(n) {

    if (!Number.isInteger(n)) {
        return [] 
    }

    if (n < 1) {
        return []
    }

    if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    }

    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}
