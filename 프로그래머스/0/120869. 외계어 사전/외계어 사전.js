function solution(spell, dic) {
    const sortingSpell = spell.sort().join('');
   const isEqual = dic.some((ele,idx)=> {
       const sortingDic = ele.split('').sort().join('');
      return sortingSpell === sortingDic;
   });
    return isEqual ? 1 : 2;
}