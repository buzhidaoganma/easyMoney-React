import { useEffect, useState } from "react";
import useUpdate from "./useUpdate";

type RecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
  createdAt: string; //ISO 8601
};
type NewRecordItem = Omit<RecordItem, "createdAt" | "">;
//Omit这个函数专门作用于类型的，类型的函数用<>来传，上面的意思就是可以忽略createdAt的属性,用｜来分割多个不要的类型

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: NewRecordItem) => {
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
  };

  return {
    records,
    addRecord,
  };
};
