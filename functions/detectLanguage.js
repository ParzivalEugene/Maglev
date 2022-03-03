import {dictionary} from "../constants/language";

export const useDictionary = (router) => {
  const lang = router.asPath.split("/").pop()
  const data = dictionary[["", undefined].includes(lang) ? "ru" : lang]
  return {data, lang}
}