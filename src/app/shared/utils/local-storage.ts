export class LocalStorageManager {
  public static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  };

  public static getItem(key: string): string | null {
    const storedItem = localStorage.getItem(key);
    return storedItem ?? null;
  };

  public static removeItems(keys: string[]): void {
    keys.forEach(key => {
      localStorage.removeItem(key);
    });
  };
}