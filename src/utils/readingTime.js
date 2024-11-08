export function getReadingTime(content) {
  const WORD_PER_MINUTE = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / WORD_PER_MINUTE)

  return `${minutes} min read`
}
