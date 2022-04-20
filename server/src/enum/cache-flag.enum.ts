export enum CacheFlag {
  CACHE_DAMAGE = '1 << 0',
  CACHE_FIREDELAY = '1 << 1',
  CACHE_SHOTSPEED = '1 << 2',
  CACHE_RANGE = '1 << 3',
  CACHE_SPEED = '1 << 4',
  CACHE_TEARFLAG = '1 << 5',
  CACHE_TEARCOLOR = '1 << 6',
  CACHE_FLYING = '1 << 7',
  CACHE_WEAPON = '1 << 8',
  CACHE_FAMILIARS = '1 << 9',
  CACHE_LUCK = '1 << 10',
  CACHE_SIZE = '1 << 11',
  CACHE_COLOR = '1 << 12',
  CACHE_PICKUP_VISION = '1 << 13',
  CACHE_ALL = '(1 << 16) -1',
  CACHE_TWIN_SYNC = '1 << 31'
}