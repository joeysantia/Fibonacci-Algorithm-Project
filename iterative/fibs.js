export default function fibs(n) {

    if (!Number.isInteger(n)) {
        return []
    }

    let res = []

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            res.push(i)
        } else {
            res.push(res[i - 1] + res[i - 2])
        }
    }

    return res
}