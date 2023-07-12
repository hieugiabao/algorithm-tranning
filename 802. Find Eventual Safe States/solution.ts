/**
 * The function `eventualSafeNodes` takes in a directed graph represented as an adjacency list and returns a list of nodes
 * that are eventually safe, meaning there is a path from the node to a terminal node without any cycles.
 * @param {number[][]} graph - The parameter `graph` is a 2D array of numbers representing a directed graph. Each element
 * in the array represents a node in the graph, and the inner array represents the outgoing edges from that node. For
 * example, `graph[i]` represents the outgoing edges from node `i`, and
 * @returns The function `eventualSafeNodes` returns an array of numbers, which represents the indices of the nodes in the
 * input graph that are considered "eventually safe".
 */
function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length
  const visited: boolean[] = new Array(n).fill(false)
  const safe: boolean[] = new Array(n).fill(false)
  const dfsCache = new Map<number, boolean>()
  const ans = []

  // Returns true if the node is eventually safe, otherwise false.
  // If the node is already visited, return the cached result.
  // Otherwise, recursively check all the outgoing edges.
  // If any of the outgoing edges is not eventually safe, return false.
  // Otherwise, the node is eventually safe, return true.
  function dfs(node: number): boolean {
    if (visited[node]) {
      return safe[node]
    }
    visited[node] = true
    for (const next of graph[node]) {
      // If the node is already visited, return the cached result.
      if (!dfsCache.has(next)) {
        dfsCache.set(next, dfs(next))
      }
      if (!dfsCache.get(next)) {
        return false
      }
    }
    safe[node] = true
    return true
  }

  for (let i = 0; i < n; ++i) {
    if (dfs(i)) {
      ans.push(i)
    }
  }
  return ans
}

export { eventualSafeNodes }
