export default function removeFalsyObjKeys<T extends object>(obj: T) {
  const newObj: T = { ...obj };
  Object.entries(obj).forEach(([k, v]) => {
    if (v == null || v === "") {
      delete newObj[k as keyof T];
    }
  });
  return newObj as T;
}
