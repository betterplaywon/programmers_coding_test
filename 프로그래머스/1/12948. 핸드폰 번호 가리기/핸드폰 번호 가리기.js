function solution(phone_number) {
    const lastNumber = phone_number.length-4;
    const maintainNumber = phone_number.slice(lastNumber,phone_number.length);
    const replaceStar = '*'.repeat(lastNumber);
    return replaceStar+maintainNumber;
}