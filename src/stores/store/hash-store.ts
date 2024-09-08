import { create } from "zustand";
import { HashStoreState } from "@/types/hash-types";

/** hash값을 localstroge에 저장 -> 전역상태관리로 전환
 *
 * 1. next.js에서는 hash값을 url에서 못가져옴
 * 2. window.location.hash 로 가져 올수 있지만 더 좋은 방법이 없을까?
 *  -> 1. react-router-dom 으로 가져오기 ?  : 라이브러리를 추가하기는 싫음 ...
 *     2. useHash 훅을 만들어서 따로 가져오는 방법 :
 *
 */
const hashStore = create<HashStoreState>((set) => ({
  hash: "#home",
  setHash: (newHash) => set({ hash: newHash }),
}));

export default hashStore;
