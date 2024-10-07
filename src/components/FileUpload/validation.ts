export function isFileSizeValid(file?: File): boolean {
    if (!file) {
        return true
    }
    const validSizeMb = 10
    const kilobyte = 1024
    if (file) {
        const size = file.size / kilobyte / kilobyte
        return size <= validSizeMb
    }
    return true
}
