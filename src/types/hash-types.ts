export type HashChangeCallback = () => void;

export type ObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;
export type HandleLinkClick = (
  href: string,
  event?: React.MouseEvent<HTMLAnchorElement>
) => void;

export interface HashStoreState {
  hash: string;
  setHash: (newHash: string) => void;
}
