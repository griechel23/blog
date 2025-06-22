interface BlogEntry {
  name: string,
  label: string,
  category: BlogCategory,
}

enum BlogCategory {
  BACKEND,
  FRONTEND,
  NONTECH
}