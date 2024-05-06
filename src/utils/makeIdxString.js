import { FilterIndex } from '../constants/filterType';
/**
 * 선택된 문자열을 idx string으로 바꾸는 함수
 * @param {*} selectedList 선택된 필터 문자열 리스트
 */
export const makeIdxString = (selectedList) => {
  let filterQueryString = '';
  const idxArr = selectedList.map((type) => FilterIndex.findIndex((item) => item === type));

  for (let idx of idxArr) {
    filterQueryString += `idx=${idx}&`;
  }
  return filterQueryString;
};
