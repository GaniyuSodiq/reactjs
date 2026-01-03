/**
 * we want to return 3 days ago date
 * we want to return 1 day ago date
 * 
 * we new Date().setDate(new Date().getDate() - n)
 */

export function formatDate() {
    const now = new Date()

    const yyyy = now.getFullYear()

    const mm = String(now.getMonth() + 1).padStart(2, '0')

    // function formatToTwoDigits(num) {
    //   return String(num).padStart(2, '0');
    // }
    // console.log(formatToTwoDigits(5));  // Output: "05"
    // console.log(formatToTwoDigits(12)); // Output: "12"
    // console.log(formatToTwoDigits(100)); // Output: "100" (does not truncate longer numbers)

    const dd = now.getDate()

    return `${yyyy}/${mm}/${dd}`
}


