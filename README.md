# Persistent To Do

- Nextjs + React Query Todo App
- Display, Create and Delete Notes

## Persistence

- Saves Notes in browser storage
  - Notes are available when browser is refreshed, or reopened
- Storage options
  - [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
  - [Indexed DB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
  - Switch between the two in `config.ts`
    - ```javascript
      export const indexedDB = true;
      ```
