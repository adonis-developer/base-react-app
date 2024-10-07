class Storage {
  _storage
  constructor(storage: globalThis.Storage) {
    this._storage = storage
  }

  get(key: string, defaultValue = null): any {
    let value = this._storage.getItem(key) || defaultValue

    if (value) {
      try {
        value = JSON.parse(value)
      } catch {
        value = defaultValue
      }
    }

    return value
  }

  has(key: string) {
    return this.get(key) !== null
  }

  set(key: string, value: any) {
    value = JSON.stringify(value)

    this._storage.setItem(key, value)
  }

  remove(key: string) {
    this._storage.removeItem(key)
  }

  clear() {
    this._storage.clear()
  }
}

const LocalStorage = new Storage(window.localStorage)
const SessionStorage = new Storage(window.sessionStorage)

export default LocalStorage

export { SessionStorage }
